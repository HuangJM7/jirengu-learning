var result =
`/*
动态加载加载样式与内容,
将预先定义好的多行字符串渐进添加到pre标签与style标签中
*/
*{
    transition:all 0.4s;
}

html{
    font-size:16px;
}
body{
    
}
`

var n = 0
var id = setInterval(() => {
    n += 1;
    content.innerHTML = result.substring(0, n)
    styleTag.innerHTML = result.substring(0, n)
    hljs.initHighlightingOnLoad();
    if (n > result.length) {
        clearInterval(id)
        console.log('end');
    }
}, 50);