/**
 * Created by liuxin on 2017/8/31.
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomArray(len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(getRandomInt(0, len));
    }
    return arr;
}