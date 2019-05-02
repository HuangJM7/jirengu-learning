var APP_ID = 's2Y9liqQkomyL7qUPQHIH0Jr-gzGzoHsz';
var APP_KEY = 'gfgn7EMprjYIumLOtHTRv7X9';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
var view = document.querySelector('#postMessageForm')

var query = new AV.Query('Message');
updateMessage()



function updateMessage() {
    messageList.innerHTML = ""
    query.find().then(function (Message) {
        Message.forEach(element => {
            let li = document.createElement('li')
            li.innerText = element.attributes.name + ':' + element.attributes.content
            let messageList = document.querySelector('#messageList')
            messageList.append(li)
        });

    })
}


view.addEventListener('submit', function (e) {
    e.preventDefault();
    let content = view.querySelector('input[name=content]').value
    let name = view.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        'content': content,
        'name': name,
    }).then(function (object) {
        console.log('post');
        console.log(object);
        let li = document.createElement('li')
        li.innerText = name + ':' + content
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        view.querySelector('input[name=content]').value = ""

    })
})