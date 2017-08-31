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
            }
        }
    }
    return arr;
}