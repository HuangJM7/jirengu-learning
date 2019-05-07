function writeCss(prefix, code, fn) {
    let domCode = document.querySelector('#cssContent')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 20)
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 35)
}




var css1 = `
/*  
动态加载样式与内容,
将预先定义好的多行字符串渐进添加到pre标签与style标签中
首先编写CSS代码
*/

*{
    transition:all 1s;
}

html{
    background: #eee;
}
/* CSS编辑区 */
#cssContent{
    position: fixed;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
    padding:40px;
    overflow:auto;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: red; }
.token.function{ color: rgb(42,161,152); }
.token.number{ color: #905; }

/*Markdown编辑区 */
#code-wrapper{
  width: 50%; left: 0;top:0; position: fixed; 
  height: 100%;
}
#paper > .content {
 display: block;
}
`
var css2 = `
/* 
 * 使用 marked.js
 * 把 Markdown代码 转换为HTML
 */
`
var md = `
# mrakdown内容编写
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
let css3 = `
/*
 * end
 * 谢谢观看
 */
`

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}

function convertMarkdownToHtml(fn) {
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}

writeCss('', css1, () => { // writeCss call the function
    createPaper(() => {
        writeMarkdown(md, () => {
            writeCss(css1, css2, () => {
                convertMarkdownToHtml(() => {
                    writeCss(css1 + css2, css3, () => {
                        console.log('完成')
                    })
                })
            })
        })
    })
})