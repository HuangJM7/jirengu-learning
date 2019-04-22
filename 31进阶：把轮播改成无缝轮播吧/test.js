(function () {
    var oImgList = document.getElementsByClassName("img-list")[0],
        aButton = document.getElementsByClassName("btn"),
        aImgLi = document.querySelectorAll(".img-list li"),
        oWidth = parseFloat(getComputedStyle(aImgLi[0]).width),
        oWrap = document.getElementsByClassName("wrap")[0],
        aTab = document.querySelectorAll(".tab-list li");
    len = aImgLi.length,
        index = 0;

    function throttle(fn, time) {
        var startTime = new Date();
        return function () {
            var time_ = (new Date() - startTime) >= time;
            if (time_) {
                fn.apply(this);
                startTime = new Date();
            }
        }
    }

    function btnTab() {
        var t = new Date();
        for (var i = 0, tabLen = aTab.length; i < tabLen; i++) {
            (function (i) {
                aTab[i].onclick = function () {
                    if (new Date() - t >= 1000) {
                        aTab[index].className = "";
                        if ((i - index) === (tabLen - 1)) {
                            oImgList.style.transition = 0 + "s";
                            oImgList.style.left = -oWidth * (len - 1) + "px";
                            index = len - 2;
                            setTimeout(function () {
                                oImgList.style.transition = 1 + "s";
                                oImgList.style.left = -oWidth * (index) + "px";
                            }, 1000 / 60);
                        } else if ((i - index) === (1 - tabLen)) {
                            oImgList.style.left = -oWidth * (len - 1) + "px";
                            index = 0;
                            setTimeout(function () {
                                oImgList.style.transition = 0 + "s";
                                oImgList.style.left = index + "px";
                            }, 1000);
                        } else {
                            oImgList.style.left = -oWidth * (i) + "px";
                            oImgList.style.transition = 1 + "s";
                        }
                        index = i;
                        this.className = "on";
                        t = new Date();
                    }
                }
            })(i);
        }
    }

    function btnPre() {
        index--;
        if (index < 0) {
            oImgList.style.transition = 0 + "s";
            oImgList.style.left = -oWidth * (len - 1) + "px";
            aTab[0].className = "";
            index = len - 2;
            aTab[index].className = "on";
            setTimeout(function () {
                oImgList.style.transition = 1 + "s";
                oImgList.style.left = -oWidth * (index) + "px";
            }, 1000 / 60);
        } else {
            oImgList.style.transition = 1 + "s";
            oImgList.style.left = -oWidth * (index) + "px";
            aTab[index + 1].className = "";
            aTab[index].className = "on";
        }
    }

    function btnNext() {
        index++;
        oImgList.style.transition = 1 + "s";
        if (index === len - 1) {
            oImgList.style.left = -oWidth * index + "px";
            aTab[len - 2].className = "";
            index = 0;
            aTab[index].className = "on";
            setTimeout(function () {
                oImgList.style.transition = 0 + "s";
                oImgList.style.left = index + "px";
            }, 1000);
        } else {
            oImgList.style.left = -oWidth * index + "px";
            aTab[index - 1].className = "";
            aTab[index].className = "on";
        }
    }
    aButton[0].onclick = throttle(btnPre, 1000);
    aButton[1].onclick = throttle(btnNext, 1000);
    btnTab();
    var timer = setInterval(btnNext, 5000);
    oWrap.onmouseover = function () {
        clearInterval(timer);
    }
    oWrap.onmouseout = function () {
        timer = setInterval(btnNext, 5000);
    }
})();