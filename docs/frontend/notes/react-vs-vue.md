# React 和 Vue 的对比

其实react和vue大体上是相同的，比如都使用虚拟DOM高效的更新视图，都提倡组件化，都实现了数据驱动视图，都使用diff算法，也都对diff算法进行了优化，都有router库实现url到组件的映射，都有状态管理等等....

## 组件化

##### 概念

-   组件是独立和可复用的代码组织单元

##### 优势

-   组件化可提高开发效率、复用性、提高可维护性

##### react和vue的不同

-   React推荐的做法是JSX + inline style, 也就是把 HTML 和 CSS 全都写进 JavaScript 中,即 all in js;
-   Vue 推荐的做法是 template 的单文件组件格式(简单易懂，从传统前端转过来易于理解),即 html,css,JS 写在同一个文件(vue也支持JSX写法)

## 虚拟DOM

##### 概念

-   虚拟dom是一个js对象，存储在内存之中
-   虚拟dom能够描述真实dom（存在一个对应关系）
-   当数据变化的时候，生成新的DOM，对比新旧虚拟DOM的差异，将差异更新到真实DOM上

##### 优势

-   减少 DOM 操作：虚拟 DOM 可以将多次 DOM 操作合并为一次操作
-   虚拟 DOM 是对真实渲染内容的一层抽象，同一套虚拟 DOM，可以对接不同平台的渲染逻辑，从而实现“一次编码，多端运行”

##### react和vue的不同

-   在react中，当状态发生改变时，组件树就会自顶向下的全diff, 重新render页面， 重新生成新的虚拟dom tree, 新旧dom tree进行比较， 进行patch打补丁方式，局部更新dom。所以react为了避免父组件更新而引起不必要的子组件更新， 可以在shouldComponentUpdate做逻辑判断，减少没必要的render， 以及重新生成虚拟dom，做差量对比过程。
-   在vue中， 通过代理(Object.defineProperty / Proxy) data。同时watcher实例对象会在组件渲染时，将属性记录为dep, 当dep 项中的 setter被调用时，通知watch重新计算，使得关联组件更新。

## 数据驱动视图

##### 概念

数据变化的时候，相应的视图会得到更新。开发者只需要关注数据的变化而不用再去手动的操作DOM。

##### react和vue的不同

-   Vuejs的数据驱动是通过MVVM这种框架来实现的。MVVM框架主要包含3个部分:model、view和 viewModel。ViewModel是实现数据驱动视图的核心，当数据变化的时候，ViewModel能够监听到这种变化，并及时的通知view做出修改。同样的，当页面有事件触发时，ViewModel也能够监听到事件，并通知model进行响应。ViewModel就相当于一个观察者，监控着双方的动作，并及时通知对方进行相应的操作。
-   React通过setState实现数据驱动视图，通过setState来引发一次组件的更新过程从而实现页面的重新渲染(除非shouldComponentUpdate返回false)。