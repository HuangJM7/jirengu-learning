补全下面的代码

function Human(options) {
    this.name = options.name
    this.city = options.city
} // 构造函数结束

Human.prototype.species = function () {}
Human.prototype.walk = function () {}
Human.prototype.useTools = function () {}

var human = new Human({
    name: 'Frank',
    city: 'Hangzhou'
})
var human2 = new Human({
    name: 'Jack',
    city: 'Hangzhou'
})

补全代码， 使得 human 对象满足以下条件：

human 这个对象本身具有属性 name 和 city
human.__proto__ 对应的对象（ 也就是原型） 具有物种（ species）、 走（ walk） 和使用工具（ useTools） 这几个属性
human.__proto__.constructor === Human 为 true
human2 和 human 类似。