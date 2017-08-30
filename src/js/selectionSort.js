/**数组选择排序函数
 * @param  {需要排序的数组}
 * @param  {数组的长度}
 * @return {排序后的数组}
 */
function selectionSort(arr, arrlen) {
    for (var i = 0; i < arrlen; i++) {
        // debugger;
        // 寻找[i, arrlen)中的最小值
        var minIndex = i;
        for (var j = i + 1; j < arrlen; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}