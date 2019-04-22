let n, size, timerInterval, timerClick
initialize()
setInterval(() => {
    if (!timerInterval) {
        makeLeave(getImage(n))
            .one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
        makeCurrent(getImage(n + 1))
        n += 1
    }
}, 3000)

right.addEventListener('click', function (e) {
    if (!timerClick) {
        makeLeave(getImage(n))
            .one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
        makeCurrent(getImage(n + 1))
        n += 1

        clearTimeout(timerInterval)//自动轮播防抖
        timerInterval = setTimeout(() => {
            timerInterval = null
        }, 3000);

        timerClick = setTimeout(() => {//节流
            timerClick = null;
        }, 1500);
    }



})



function getImage(n) {
    return $(`.wrap > img:nth-child(${setN(n)})`)
}

function setN(n) {
    if (n > size) {
        n = n % size
        if (n === 0) {
            n = size
        }
    }
    return n
}

function initialize() {
    n = 1
    size = $('.wrap>img').length
    $(`.wrap > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')
}

function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}