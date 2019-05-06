var result =
`/*
动态加载样式与内容,
将预先定义好的多行字符串渐进添加到pre标签与style标签中
*/
*{
    transition:all 0.4s;
}

html{
    font-size:16px;
}

`

var n = 0
var id = setInterval(() => {
    n += 1;
    content.innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css, 'css')
    styleTag.innerHTML = result.substring(0, n)
    if (n > result.length) {
        clearInterval(id)
        console.log('end');
    }
}, 50);