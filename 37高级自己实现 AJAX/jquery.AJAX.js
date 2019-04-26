jQuery.ajax = function (url, method, body, success, fail) {
    var request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                success()
            } else(request.status >= 400 && request.status < 500) {
                fail()
            }
        }
    }
    request.send(body)
}

//升级你的 jQuery.ajax 满足 Promise 规则
jQuery.ajax({
    url: '/xxx',
    method: 'get'
}).then(success, fail)

jQuery.ajax = function ({url,method,body}) {
    return new Promise((success, fail) {
        var request = new XMLHttpRequest()
        request.open(method, url)
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    success()
                } else(request.status >= 400 && request.status < 500) {
                    fail()
                }
            }
        }
        request.send(body)
    })
}

window.jQuery.ajax = function ({url,method,body}) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url) 
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}