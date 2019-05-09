//通过scrollY决定Nav吸顶栏样式
! function () {
    var view = document.querySelector('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents()
        },
        bindEvents: function () {
            window.addEventListener('scroll', (e) => {
                if (window.scrollY == 0) {
                    this.deactive()
                } else {
                    this.active()
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }

    controller.init(view)

}.call()

// 版本二,MVC
// var view = document.querySelector('#topNavBar')
// var controller = {
//     view: null,
//     init: function (view) {
//         this.view = view;
//         this.bindEvents()
//     },
//     bindEvents: function () {
//         var view = this.view;
//         window.addEventListener('scroll', function (e) {
//             if (window.scrollY == 0) {
//                 view.classList.remove('sticky')
//             } else {
//                 view.classList.add('sticky')
//             }
//         })
//     }
// }
// controller.init(view)


//  版本一,无MVC
//     var view = document.querySelector('#topNavBar')

//     window.addEventListener('scroll', function (e) {
//         if (window.scrollY == 0) {
//             view.classList.remove('sticky')
//         } else {
//             view.classList.add('sticky')
//         }

//     })