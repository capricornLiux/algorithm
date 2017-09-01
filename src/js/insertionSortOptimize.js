/**
 * Created by liuxin on 2017/8/31.
 */
function insertionSortOptimize (arr, arrlen) {
    for (var i = 1; i < arrlen; i++) {
        // debugger;
        // 将考察的元素放在一个新的变量中
        var e = arr[i];

        // 元素e应该插入的位置
        var j;
        for (j = i; j > 0 && arr[j-1] > e; j--) {
            // if (arr[j-1] > e) {
                arr[j] = arr[j-1];
            // }
        }
        arr[j] = e;
    }
    return arr;
}