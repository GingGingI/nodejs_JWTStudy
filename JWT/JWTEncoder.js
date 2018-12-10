module.exports = function (payload) {
    return new Buffer.from(JSON.stringify(payload))
    .toString('base64')
    .replace('=', '');
    // 받은 JSON데이터를 base64형태로 =를 제거한 뒤 인코딩.
}