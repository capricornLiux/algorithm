/**
 * Created by liuxin on 2017/8/31.
 */
function insertionSort(arr, arrlen) {
    for (var i = 1; i < arrlen; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                var temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                // 每次一交换有三次赋值的操作, 改进思路, 在内层循环中只交换一次
            }
        }
    }
    return arr;
    // 插入排序的特点: 可以提前终止, 正常情况下, 比选择排序更快
}