# 原型链和继承

首先来个两个构造函数 Parent，Child
```javascript
function Parent (a) {
    this.a = a
}

function Child (a, b) {
    this.a = a
    this.b = b
}

const child = new Child('aa', 'bb')
console.log(child) // {a: 'aa', b: 'bb'}
```
简单继承改造
```javascript
function Parent (a) {
    this.a = a
}

function Child (a, b) {
    Parent.call(this, a)
    this.b = b
}

const child = new Child('aa', 'bb')
console.log(child) // {a: 'aa', b: 'bb'}
```
但是给父的原型上添加方法，执行`child.fn()`会报错，说明原型上的值或方法没有被继承
```javascript
function Parent (a) {
    this.a = a
}

Parent.prototype.fn = function () {
    console.log('fn')
}

function Child (a, b) {
    Parent.call(this, a)
    this.b = b
}

const child = new Child('aa', 'bb')
console.log(child) // {a: 'aa', b: 'bb'}
child.fn() // Uncaught TypeError: child.fn is not a function
```
执行`child.fn()`的步骤：
1. 在`child`自己身上找`fn`方法，发现没有，再去`child.__proto__`上找，没有找到会依次找 `child.__proto__.__proto__`、`child.__proto__.__proto__.__proto__`、`...`，这就是所谓的原型链；
2. 我们再看`child.__proto__`是什么？其实`child.__proto__ === Child.prototype`；
3. `Child.prototype`这个上面也没有`fn`，`fn`存在`Parent.prototype`上，这样就好办了，我让`Child.prototype.__proto__ = Parent.prototype`那就可以找到`fn`了；

所以加上这行代码`Child.prototype.__proto__ = Parent.prototype`
```javascript
function Parent (a) {
    this.a = a
}

Parent.prototype.fn = function () {
    console.log('fn')
}

function Child (a, b) {
    Parent.call(this, a)
    this.b = b
}

Child.prototype.__proto__ = Parent.prototype

const child = new Child('aa', 'bb')
console.log(child) // {a: 'aa', b: 'bb'}
child.fn() // fn
```
这样就不报错了，可以找到`fn`执行了。

但是不推荐直接修改对象的`__proto__`属性，推荐用`Object.setPrototypeOf()`方法

改造代码
```javascript
function Parent (a) {
    this.a = a
}

Parent.prototype.fn = function () {
    console.log('fn')
}

function Child (a, b) {
    Parent.call(this, a)
    this.b = b
}

// Child.prototype.__proto__ = Parent.prototype
Object.setPrototypeOf(Child.prototype, Parent.prototype)

const child = new Child('aa', 'bb')
console.log(child) // {a: 'aa', b: 'bb'}
child.fn() // fn
```