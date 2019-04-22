var allImg = $('.wrap>img')

for (let i = 1; i < allImg.length; i++) {
    $(allImg[i]).addClass('enter')
}
$('.wrap > img:nth-child(1)').addClass('current').removeClass('enter')


let n = 1
let size = $('.wrap>img').length

right.addEventListener('click', function () {
    $(`.wrap > img:nth-child(${setN(n)})`)
        .removeClass('current').addClass('leave')
        .one('transitionend', (e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.wrap > img:nth-child(${setN(n+1)})`)
        .removeClass('enter').addClass('current')
    n += 1
})

setInterval(() => {
    console.log(n);
    $(`.wrap > img:nth-child(${setN(n)})`)
        .removeClass('current').addClass('leave')
        .one('transitionend', (e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.wrap > img:nth-child(${setN(n+1)})`)
        .removeClass('enter').addClass('current')
    n += 1
}, 3000)

function setN(n) {
    if (n > size) {
        n = n % size
        if (n === 0) {
            n = size
        }
    } // n = 1 2 3
    return n
}