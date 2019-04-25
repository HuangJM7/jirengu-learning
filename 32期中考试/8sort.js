// 请说出至少三种排序的思路，这三种排序的时间复杂度分别为
// O(n*n)
// O(n log2 n)
// O(n + max)

//1. O(n*n)
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { //相邻元素两两对比
                var temp = arr[j + 1]; //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


//2. O(n log2 n)
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    //在数据集之中，选择一个元素作为"基准"（pivot）。
    var pivotIndex = Math.floor(arr.length / 2);
    //splice删除pivot值并返回数组,用[0]返回值,
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

//3. O(n + max)