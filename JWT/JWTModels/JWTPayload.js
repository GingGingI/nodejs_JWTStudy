var iss = 'default.com';
var sub = 'JWTStudyToken';
var id = 'hihello';
var name = 'example';

function payload() {}

payload.prototype.GetItem = function() {
    var payload = {
        "iss" : iss,
        "sub" : sub,
        "id"  : id,
        "name": name
    };
    return payload;
}

module.exports = new payload()

/*

토큰의 registered 클레임
iss: 토큰 발급자,
sub: 토큰의 제목,
aud: 토큰의 대상자,
exp: 토큰의 만료시간, 시간은 NumbericDate 형식으로 되어야하며 현제시간 이후로 설정되어야함.
nbf: 토큰의 활성날자와 비슷한 개념, NumbericDate형식으로 지정하며 이날자가 지나기전까진 토큰처리 안됨.
iat: 토큰의 발급된 시간. 이값을 사용하여 토큰의 age가 얼마나되었는지 판단가능.
jti: jwt의 고유식별자. 중복처리방지용으로 자주사용. 일회용토큰에사용하기 유용함.

*/

/*

토큰의 public 클레임
public 클레임들은 충돌이되지않을 이름을 사용해야함.
주로 URI형식으로 지음.
예 ->
    {
        "https://example.com/check_users/is_admin": true
    }

*/


/*

토큰의 private 클레임
클라이언트와 서버간의 협의하에 사용하는 클레임.
이름이 중복되어 충돌할수도 있음.
예 ->
    {
        "username": "example"
    }

*/