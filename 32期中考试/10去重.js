function unique(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) == -1) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

function unique(arr) {
    return arr.filter(function (element, index, self) {
        return self.indexOf(element) === index;
    })
}

function unique(arr) {
    return [...new Set(arr)]
}