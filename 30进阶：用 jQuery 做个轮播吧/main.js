var allButtons = $("#buttons>span") //获取全部按钮
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {//for循环给每个button添加对应点击事件
        $('.images').css({
            transform: "translate(" + i * -300 + "px)"//设置轮播图CSS
        })
        n = i;
        activeButton(allButtons.eq(n % size)) //设置按钮高亮
    })
}
var n = 0;
var size = allButtons.length;

allButtons.eq(n % size).trigger('click')//初始化设置按钮高亮

var timerId = setTimer()

function setTimer() {
    return setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
    }, 1000)
}

function activeButton($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}

$('.images').on('mouseenter', function (e) {
    clearInterval(timerId)
}).on('mouseleave', function (e) {
    timerId = setTimer()
})