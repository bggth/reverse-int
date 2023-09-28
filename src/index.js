module.exports = function reverse (n) {
    let result = 0;
    let d = Math.abs(n);
    while (d != 0) {
        o = d % 10;
        d = (d - o) / 10;
        result = result * 10 + o;
    }
    return result;
}