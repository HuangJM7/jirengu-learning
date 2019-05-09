//点击nav滚动到对应页面
let scrollSwitch = true; //滚动开关
let aTags = document.querySelectorAll('nav.menu>ul>li>a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (e) {
    e.preventDefault();
    let a = e.currentTarget;
    let href = a.getAttribute('href')
    let element = document.querySelector(href)

    let top = element.offsetTop;
    // window.scrollTo(0, top)     //1.直接滚到到指定位置

    //5.  tween.js 的简化版,animation.js
    let animationScroll = function () {
      let T = Math.abs(top - 80 - window.scrollY) / 2;
      if (T < 500) T = 300;
      Math.animation(window.scrollY, top - 80, function (value) {
        window.scrollTo(0, value)
      }, 'Quad.easeOut', T);
    }
    animationScroll();





    //4.即插即用的缓动 张鑫旭
    // requestAnimationFrame的兼容处理
    if (!window.requestAnimationFrame) {
      requestAnimationFrame = function (fn) {
        setTimeout(fn, 17);
      };
    }
    // 滚动缓动函数定义
    // rate表示缓动速率，默认是2
    var scrollNav = function (rate) {
      var scroll = function () {
        let way = top - 80 - window.scrollY;
        // scrollTop = scrollTop + (0 - scrollTop) / (rate || 2);
        let step = window.scrollY + (top - 80 - window.scrollY) / (rate || 2)
        // 临界判断，终止动画
        if (Math.abs(way) < 7) {
          window.scrollTo(0, top - 80);
          scrollSwitch = true;
          return;
        }
        window.scrollTo(0, step)
        // 动画gogogo!
        requestAnimationFrame(scroll);
      };
      scroll();
    };
    //使用函数4
    // if (scrollSwitch) {
    //   scrollSwitch = false;
    //   scrollNav(8);
    // }





    // 3. 根据距离决定滚动时间与次数
    // let way = top - 80 - window.scrollY;
    // let t = Math.floor(Math.abs(way) / 20) // 1000px 1秒 50次
    // if (t > 50) t = 50;
    // console.log(t);
    // let step = way / t;
    // let m = 0;
    // let id = setInterval(() => {
    //   if (m == t) {
    //     clearInterval(id)
    //     return
    //   }
    //   m++
    //   window.scrollTo(0, window.scrollY + step)
    // }, 10)


    // let n = 25;//次数      2.定总时间
    // let t = 500 / n;//总时间5毫秒,每次滚动时间
    // let currentTop=window.scrollY;//当前Y轴距离
    // let step = (top-80 - currentTop) / n  //
    // let m = 0;
    // let id = setInterval(() => {
    //   if (m == n) {
    //     clearInterval(id)
    //     return
    //   }
    //   m++
    //   window.scrollTo(0, currentTop + step * m)
    // }, t);






  }
}