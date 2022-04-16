# react
## react-hello world

第一个react程序hello world

```html
<body>
	<div id="test"></div><!--表示视图  -->
	<script src="./js/react.development.js"></script>
	<script src="./js/react-dom.development.js"></script>
	<script src="./js/babel.min.js"></script>
	<script type="text/babel">
		//创建虚拟DOM
		let vDom=<h1>hello world</h1>
		//建虚拟DOM渲染到视图层
		ReactDOM.render(vDom,document.getElementById("test"))
	</script>
</body>
```

### 虚拟DOM创建方式

react虚拟DOM有两种创建方式：

第一种：创建单级虚拟DOM

```js
let vDom=<h1>hello world</h1>
```

第二种：创建有子节点的虚拟DOM

```js
let vDom=(
	<h1 id="title">
		<span>你好！世界</span>
	</h1>
)
```

### 认识虚拟DOM

在控制台打印虚拟DOM

![捕获](\img\捕获.PNG)

可以看出虚拟DOM是个一般的object对象，其属性会比真实DOM多，因为虚拟DOM被react所使用，无需过多的属性，虚拟DOM最后也会被渲染成真实DOM。

**虚拟DOM注释**

使用{}将需要注释的代码包起来，在{}内部使用js注释

```js
let vDom=(
	<div>
		<h1 id="title">
			{/*<span>你好！世界</span>*/}
		</h1>
		<div id='div1'></div>
	</div>
)
```



## JSX语法糖

**创建虚拟DOM不能使用引号**

```js
let vDom=(
	<div>
		<h1 id="title">
			<span>你好！世界</span>
		</h1>
		<div id='div1'></div>
	</div>
)
```

**虚拟DOM混入js代码需要使用大括号：{js代码}**

```js
<script type="text/babel">
		//创建虚拟DOM
		let vID='title'
		let vDom=(
			<div>
				<h1 id={vID}>
					<span>你好！世界</span>
				</h1>
				<div id='div1'></div>
			</div>
		)
		//建虚拟DOM渲染到视图层
		ReactDOM.render(vDom,document.getElementById("test"))
	</script>
```

虚拟DOM添加class需要使用属性名className

```js
	<style>
		.div1{
			height: 100px;
			width: 100px;
			background-color: red;
		}
	</style>
	<script type="text/babel">
		//创建虚拟DOM
		let vID='title'
		let vDom=(
			<div>
				<h1 id={vID}>
					<span>你好！世界</span>
				</h1>
				<div id='div1' className="div1"></div>
			</div>
		)
		//建虚拟DOM渲染到视图层
		ReactDOM.render(vDom,document.getElementById("test"))
		console.log(vDom)
	</script>
```

**虚拟DOM使用内联样式需要将样式定义成对象，{{key:value}}：key采用小驼峰命名规则，value是字符串**

```html
<div style={{ backgroundColor:'blue',height:100+'px', width:200+'px'}}></div>
```

**虚拟DOM只能有一个根标签，同时每个标签必须要有结束标签，包括单标签。**

**虚拟DOM首字符为小写的时候，react将会将其渲染成对应的html同名标签，如果没有对应的同名标签，将会报错；虚拟DOM首字母为大写的时候，react将会渲染其对应的组件，如果没有定义对应的组将，将会报错。**

## react面向组件编程

组件化编程：将页面拆分成一个个功能模块，每个功能模块表示一个组件。每个组件都有自己的html(虚拟DOM),css以及js代码。（包括页面部分功能全部代码和资源的集合，就是组件）

### 函数式组件：适用于简单组件

函数式组件，定义一个函数，首字母大写，返回一个虚拟DOM，通过render函数将其函数通过组件的方式渲染到页面上。

注意：函数式组件的this指向的是underfined，因为react开启了严格模式。

```js
<script type="text/babel">
let vID = 'title'
function Compon() {//函数组件，必须是首字母大写
	return (
		<div>
			<h1 id={vID}>
				<span>你好！世界</span>
			</h1>
			<div id='div1' className="div1"></div>
			<div style={{ backgroundColor: 'blue', height: 100 + 'px', width: 200 + 'px' }}></div>
	</div>
	)
}
			//渲染组件标签，一定要有结束符号
ReactDOM.render(<Compon />, document.getElementById("test"))
</script>
```

注意：函数组件无法使用state和refs，但是可以使用props

#### 函数组件使用props

提示：先到类组件中看props相关知识在来这里

函数组件的属性都会通过参数的形式传到函数组件内部，相关约束不能先类组件用于定义在组件内部只能定义在外部

```js
<script type="text/babel">
	function Person(props) {
		let {name,age}= props
		return (<h1>{name}+{age}</h1>)
		}
	Person.propTypes = {
		name: PropTypes.string.isRequired,
		age: PropTypes.number,
		}
	Person.defaultProps = {
		name: 'XXX'
	}
ReactDOM.render(<Person name='xiaozhi'  age={12}/>, document.getElementById("test"))
</script>
```



### 类组件：适用于复杂组件

需要继承React.Component类

```js
<style>
	.div1 {
		height: 100px;
		width: 100px;
		background-color: red;
    }
</style>
<script type="text/babel">
let vID = 'title'
class MyComponent extends React.Component {
	render() {
		return (
          <div>
			<h1 id={vID}>
				<span>你好！世界</span>
			</h1>
			<div id='div1' className="div1"></div>
			<div style={{ backgroundColor: 'blue', height: 100 + 'px', width: 200 + 'px' }}></div>
		</div>
		)
		}
}
ReactDOM.render(<MyComponent />, document.getElementById("test"))
console.log(vDom)
</script>
```

类组件中的this指向类的实例对象

### **类组件实例的三大属性**

#### **state**

state：类组件实例的状态管理器，用于存放类中的状态（变量）

**借助构造器初始化state**

在构造器中，通过this.state设置类组件的状态，状态默认是null，在老版本的react默认是一个空对象。

```js
<script type="text/babel">
	//创建虚拟DOM
	let vID = 'title'
	class MyComponent extends React.Component {
		constructor(props){
			super(props)
			this.state={gender:0}
		}
	render() {
        //读取状态
        let {gender}=this.state
		return (
			<h1 id={vID}>
				<span>你好！你的性别是{gender==0?'女':'男'}</span>
			</h1>
			)
	}
}
ReactDOM.render(<MyComponent />, document.getElementById("test"))
</script>
```

**小拓展：react事件绑定**

react将原始的JavaScript事件进行一层封装，其名称为小驼峰命名法与原生的JavaScript进行区别

例如onclick封装成onClick

```js
			class MyComponent extends React.Component {
				constructor(props) {
					super(props)
					this.state = {
						gender: 0
					}
					this.changeGender = this.changeGender.bind(this)
				}
				changeGender() {
					console.log("aa",this);
				}
				render() {
					return (
						<h1 id={vID} onClick={this.changeGender()}>//会自启动一次
							<span>你好！你的性别是{this.state.gender == 0 ? '女' : '男'}</span>
						</h1>
					)
				}
			}
```

以上代码的方法有两个问题：

问题一：方法会在页面启动的时候执行一次，原因是**onClick={this.changeGender()}**在{...}内的代码相当于JavaScript代码，this.changeGender()表示的是调用该函数。

需要改成：

```html
<h1 id={vID} onClick={this.changeGender}>
```

问题二：函数changeGender的this指向underfined，原因是因为在类组件中定义方法，在方法内部开启了严格模式，所以会指向underf

解决：初始化时，通过bind将this指向类组件的实例

```
constructor(props) {
	super(props)
	this.changeGender = this.changeGender.bind(this)
}
```

**setState**

react是不允许直接修改state，而是需要使用setState来修改状态

```js
class MyComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {gender: 0}
		this.changeGender = this.changeGender.bind(this)
		}
		changeGender() {
			this.setState({gender: !this.state.gender})
		}
		render() {
			return (
				<h1 id={vID} onClick={this.changeGender}>
					<span>你好！你的性别是{this.state.gender == 0 ? '女' : '男'}</span>
				</h1>
			)
		}
}
```

注意：setState不会覆盖state而是通过合并的方式修改state，如果没有该值，将会添加到state但是无法响应到页面。

**类组件简写**

state可以写在类的构造函数外面，自定义的方法通过箭头函数的方式可以实现this查找

```js
class MyComponent extends React.Component {
	state = {gender: 0}//提取出来
	changeGender=()=> {//使用箭头函数，可先外出查找到this
		this.setState({gender: !this.state.gender})
	}
	render() {
		return (
			<h1 id={vID} onClick={this.changeGender}>
				<span>你好！你的性别是{this.state.gender == 0 ? '女' : '男'}</span>
				<span>{this.state.genders}</span>
			</h1>
			)
		}
}
```

#### **props**

props表示的是组件属性的实例对象

```js
ReactDOM.render(<MyComponent name='xiaozhi' age='18'/>, document.getElementById("test"))
```

例如以上代码，其props的值则为：

```
{
    "name": "xiaozhi",
    "age": "18"
}
```

我们可以在组件中，通过this.props来获取其属性和属性值

```JavaScript
<script type="text/babel">
	//创建虚拟DOM
	let vID = 'title'
	class MyComponent extends React.Component {
		state = { gender: 0 }
		render() {
			let name=this.props.name	
			return (
				<h1 id={vID} >
					<span>{name}</span>
				</h1>
				)
			}
	}
ReactDOM.render(<MyComponent name='xiaozhi' age={18} />, document.getElementById("test"))
</script>
```

我们也可以通过批量进行传值

```js
<script type="text/babel">
	//创建虚拟DOM
	let vID = 'title'
	class MyComponent extends React.Component {
		state = { gender: 0 }
		render() {
		let name=this.props.name	
		return (
			<h1 id={vID} >
				<span>{name}</span>
			</h1>
			)
		}
}
let p={name:'小智',age:18}
ReactDOM.render(<MyComponent {...p} />, document.getElementById("test"))
</script>
```

**对props进行限制**

在组件实例上有个属性propsType可以对其进行类型限制以及必要性约束（需要引props-type包）

```JavaScript
<script type="text/babel">
	//创建虚拟DOM
	let vID = 'title'
	class MyComponent extends React.Component {
		state = { gender: 0 }
		render() {
			let name = this.props.name
			return (
				<h1 id={vID} >
					<span>{name}</span>
				</h1>
				)
	}
}
	MyComponent.propTypes = {
		name: PropTypes.string.isRequired,//name的数据类型是string，必传
		age: PropTypes.number,//age的数据类型为number，可不传
		fn: PropTypes.func////age的数据类型为函数，可不传
	}
	let p = { name: '13', age: 18 }
	ReactDOM.render(<MyComponent {...p} fn={fn} />, document.getElementById("test"))
	function fn() {
		console.log('111');
	}
</script>
```

**props默认值**

同理，在组件实例上有个属性defaultProps可以设置props的默认值

```js
<script type="text/babel">
	class MyComponent extends React.Component {
		state = { gender: 0 }
		render() {
			let {name, sex} = this.props
			return (
				<h1>
					<span>{name}--{sex}</span>
				</h1>
			)
		}
	}
MyComponent.defaultProps={
		sex:'男'
	}
let p = { name: '13', age: 18 }
ReactDOM.render(<MyComponent {...p} fn={fn} />, document.getElementById("test"))
</script>
```

**props约束简写**

给类添加一个静态属性即可：static

```js
class MyComponent extends React.Component {
	state = { gender: 0 }
	static propTypes = {
		name: PropTypes.string.isRequired,
		age: PropTypes.number,
		fn: PropTypes.func
	}
	static defaultProps = {
		sex: '男'
	}
	render() {
		let { name, sex } = this.props
		return (
			<h1 id={vID} >
				<span>{name}--{sex}</span>
			</h1>
		)
	}
}
```

注意：props是不允许被修改的

**关于constructor中props必传给super的问题**

```js
constructor(props){
	super(props)
    console.log(this.props)//如果不传，这里将会报undefined
}
```

官网说明

https://zh-hans.reactjs.org/docs/react-component.html#constructor

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前调用 `super(props)`。否则，`this.props` 在构造函数中可能会出现未定义的 bug。

通常，在 React 中，构造函数仅用于以下两种情况：

- 通过给 `this.state` 赋值对象来初始化[内部 state。

- 为事件处理函数]绑定实例

  ```js
  constructor(props) {
  	super(props)
      //初始化[内部 state
  	this.state = {gender: 0}
      //事件处理函数]绑定实例
  	this.changeGender = this.changeGender.bind(this)
  }
  ```

  

在 `constructor()` 函数中不要调用 `setState()` 方法。如果你的组件需要使用内部 state，请直接在构造函数中为 this.state` 赋值初始 state

避免将 props 的值复制给 state！这是一个常见的错误.

#### **refs**

refs表示标签的唯一属性，用于获取元素节点实例，refs属性挂载在组件实例上。

**string类型的refs**

```js
class MyComponent extends React.Component {
	getInput = () => {
		let { input1 } = this.refs
		console.log(input1.value)
	}
	getInput2 = () => {
		let { input2 } = this.refs
		console.log(input2.value)
	}
	render() {
		return (
			<div>
				<input ref='input1' type="text" placeholder="输入" />
				<input type="button" onClick={this.getInput} value="请输入" />
				<input type="text" ref='input2' onBlur={this.getInput2} placeholder="点击输入" />
			</div>
		)
	}
}
```

注意：使用字符串形式的ref会有效率问题，不建议大量使用。

**回调函数形式的refs**

```js
class MyComponent extends React.Component {
	getInput = () => {
		let { input1 } = this
		console.log(input1.value)
	}
	getInput2 = () => {
		let { input2 } = this
		console.log(input2.value)
	}
	render() {
		return (
			<div>
				<input ref={(a)=>{this.input1=a}} type="text" placeholder="输入" />
				<input type="button" onClick={this.getInput} value="请输入" />
				<input type="text" ref={(c=>this.input2=c)} onBlur={this.getInput2} placeholder="点击输入" />
			</div>
		)
	}
}
```

解析：

```html
<input ref={(a)=>{this.input1=a}} type="text" placeholder="输入" />
```

ref={(a)=>{this.input1=a}}这段代码中，参数a表示的是节点的实例对象，this.input1=a表示的是将节点的实例对象挂载到组件实例上，名字取为input1。获取不在使用refs获取而是直接通过取的昵称获取到实例。

注意：关于调用次数问题，回调函数在初始化的时候会执行一次，当组件更新的时候，将执行两次。

> 如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

**使用refs容器**

react提供createRef来创建一个用于存储ref实例的一个容器，创建的容器只能存储一个ref实例，如果需要多个refshilling，则需要创建多个容器。使用current可以获取其实例

```js
class MyComponent extends React.Component {
	inputRef = React.createRef();
	inputRef2 = React.createRef();
	getInput = () => {
		console.log(this.inputRef)
	}
	getInput2 = () => {
		let { input2 } = this
		console.log(this.inputRef2.current)
	}
	render() {
		return (
			<div>
				<input ref={this.inputRef} type="text" placeholder="输入" />
				<input type="button" onClick={this.getInput} value="请输入" />
				<input type="text" ref={this.inputRef2} onBlur={this.getInput2} />
			</div>
		)
	}
}
```

注意：低版本不支持该API

### 受控组件和非受控组件

受控组件：输入类型的标签，收集其值得时候，会随着值得变化而进行收集（类似vue的自动收集变量）

非受控组件：输入类型的标签，只有在使用数据的时候才会收集。

### react事件处理

react的事件封装了原生的JavaScript事件（为了兼容）,react事件使用了事件委托的方式绑定了事件，会将事件绑定到最外层的元素，可以通过target获取到操作的属性实例对象。

 #### 函数柯里化

```js
class MyComponent extends React.Component {
	state = {
		name: '',
		pass: ''
	}
	submit = () => {
		console.log("@", this.state);
	}
	getData(types) {
		return (event) => {
			this.setState({ [types]: event.target.value })
			console.log(this.state);
		}
	}
	render() {
		return (
			<form>
				<input type="text" onChange={this.getData('name')} placeholder="用户名" /><br />
				<input type="password" onChange={this.getData('pass')} placeholder="密码" /><br />
				<input type="button" value="提交" onClick={this.submit} />
			</form>
		)
	}
}
```

如以上代码，在无法实现同时接收多个参数的时候，可以使用高接函数-柯里化函数。

```js
function fn(a){
	return(b)=>{
		return(c)=>{
			return a+b+c
			}
		}
}
console.log(fn(1)(2)(3));
```

这种方式就是函数柯里化

**不使用函数柯里化自动收集变量**

```js
class MyComponent extends React.Component {
	state = {
		name: '',
		pass: ''
	}
	submit = () => {
		console.log("@", this.state);
	}
	getData(types,event) {
			this.setState({ [types]: event.target.value })
			console.log(this.state);	
	}
render() {
	return (
	<form>
	  <input type="text" onChange={(event)=>{this.getData('name', event)}} placeholder="用户名"/><br/>
	  <input type="password" onChange={(event)=>this.getData('pass', event)} placeholder="密码"/<br/>
	  <input type="button" value="提交" onClick={this.submit} />
	</form>
		)
	}
}
```

这种方式就是在内联定义一个函数，在函数内调用组件内的方法。

## react生命周期

![12](\img\12.PNG)

react的生命周期主要有两个方面：组件挂载卸载，组件更新（父组件调render函数，调用serState函数，调用forceUpdate函数）。

### 组件挂载和卸载

constructor()：构造器

componentWillMount():组件即将挂载

render():初始化调用一次，用于初始化数据

componentDidMount():组件已挂载

componentWillUnmount():组件即将卸载

componentDidUnmount():卸载组件（编程人员也可主动卸载）

执行顺序自上而下

**注意：**

> render()函数在使用定时器的时候，不要进行状态修改，因为状态修改之后，会有调用render函数，这会导致进入递归死循环。
>
> 卸载组件的时候，一定要及时清理定时器，一般在componentWillUnmount()函数内清理

### 组件更新：

#### this.setState()

shouldComponentUpdate():控制组件是否进行更新，默认放回ture，放回false的时候，往后相关的生命周期函数将不执行

componentWillUpdate():组件即将更新

render():更新

componentDidUpdate（）：组件更新完毕

#### this.forceUpdata()

表示强制更新，一般使用场景是在不更新状态的情况下，进行页面更新。

componentWillUpdate():组件即将更新

render():更新

componentDidUpdate（）：组件更新完毕

#### 父组件调用render()

- componentWillReceiveProps:表示接收父组件传入的props属性时调用，参数为props，注意：第一次转入不算，只有从第二次props发生改变时才会调用。
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

这个是v16.3版本以前的声明周期函数，v16.3对react的声明周期函数进行了更新和弃用，并在v17版本正式启用。

### 17版本新的声明周期函数

![12](\img\1.PNG)

componentWillMount，componentWillUpdate，componentWillReceiveProps三个生命周期函数改名了，如果需要使用这三个声明周期，需要加前缀`UNSAFE_`

原因官网给出的介绍为：

> 这些生命周期方法经常被误解和滥用；此外，我们预计，在异步渲染中，它们潜在的误用问题可能更大。我们将在即将发布的版本中为这些生命周期添加 “UNSAFE_” 前缀。（这里的 “unsafe” 不是指安全性，而是表示使用这些生命周期的代码在 React 的未来版本中更有可能出现 bug，尤其是在启用异步渲染之后。）

**static getDerivedStateFromProps(props, state)**

`getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

```js
static getDerivedStateFromProps(props, state){
	return {
		name: props.name,
		age:props.age
	}
}
```

此方法适用于[罕见的用例](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)，即 state 的值在任何时候都取决于 props。

派生状态会导致代码冗余，并使组件难以维护。即没啥大的意义！

**getSnapshotBeforeUpdate(prevProps, prevState)**

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。

此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。

应返回 snapshot 的值（任意非null值都是快照值）（或 `null`）。

常用的三个声明周期钩子函数：

render，componentDidUpdate，componentWillUnmount。

## react脚手架

全局安装脚手架

 npm install -g create-react-app

创建脚手架

> npx create-react-app my-app
> cd my-app
> npm start

如果发现无法安装，是因为以前可能全局安装了低版本的create-react-app，卸载掉即可

或者忽略全局的脚手架：执行

```javascript
npx --ignore-existing create-react-app my-app
```

还有问题，请移步该博客

https://blog.csdn.net/ah_ching/article/details/121554223

### 使用脚手架创建第一个react组件



![component](img\component.PNG)

创建一个文件夹component用于存放组件，style文件夹用于存放样式。

在MyComponent.jsx文件写代码

```js
import React from 'react'
//import '../style/index.css' 这种方式也可以
import style from '../style/index.css' //样式模块化，用的不多，一般都是用上面那种
class MyComponent extends React.Component { 
	render() { 
		return (
			<h1 className='style.title'>这是脚手架第一个组价</h1>
		)
	}
}
export { MyComponent}
```

index.css样式代码

```css
.title{
	color: red;
}
```

在App.js引入组件并渲染

```js
import {MyComponent} from './component/MyComponent'
function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}
export default App;
```

效果展示

![show](img\show.PNG)

## 组件间通信

### 父子组件通信

使用props进行通信，请移步至props知识点 

### 兄弟组件通信

**将需要操作的数据存放在父组件上，通过在父组件定义方法间接传递数据**

父组件

```js
class App extends React.Component {

  state = {
    itemList: ["吃饭", "喝酒", "看电视"]
  }
  addItem = (item) => {
    let newState = this.state.itemList.push(item)
    this.setState({
      itemList: newState
    })
  }
  render() {
    return (
      <div className="App">
        {/* 先子组件传方法间接修改数据 */}
        <Add addItem={this.addItem} />
         {/* 兄弟组件二：用于展示数据 */}
        <List {...this.state} />
      </div>
    )
  }

}
```

Add组件

```jsx
class Add extends React.Component {
	add = (event) => {
		if (event.keyCode === 13) {
		this.props.addItem(event.target.value)
		}
	}
	render() { 
		return (
			<div>
				<input type="text" placeholder='请输入内容' onKeyDown={ (event)=>this.add(event)}/>
			</div>
		)
	}
}
```

通过执行父组件的方法，间接父组件的数据，从而实现兄弟组件之间的数据通信。

**消息订阅与发布**(一般都通信都可以)

使用pubsub插件库

> npm i pubsub-js

发布消息：用于传递数据

```js
PubSub.publish('MY TOPIC', 'hello world!');
```

订阅消息：用于接收数据

```js
var mySubscriber = function (msg, data) {
    console.log( msg, data );
};
var token = PubSub.subscribe('MY TOPIC', mySubscriber);
```

取消订阅发布

```js
PubSub.unsubscribe(token);
```

### **子父之间的数据通信**

方式和兄弟之间通信类似，在父组件上定义一个 修改父组件数据的方法，传给子组件，子组件调用该方法，传入相关的参数即可实现子父之间的数据传输。

**祖先组件和后代组件通信：context**

创建context并获取到组件

```jsx
const MyContext = React.createContext()
const {Provider }=MyContext
```

Provider包裹组件并向下传值

```jsx
state = {
	person:{ 
		name:'小智'
	}
}
render() {
	let { person } = this.state
	return (
		<div className='a'>
			<Provider value={person}>
				<Parent></Parent>
			</Provider>
		</div>
	);
}
```

在后代组件声明接收并获取数据

```jsx
static contextType = MyContext
let person=this.context
```

**函数形式需要额外引入一个组件Consumer，其他地方不变**

```jsx
const MyContext = React.createContext()
const {Provider }=MyContext
```

获取值得方式

```jsx
<Consumer>
	{(value) => {
		return <div>{value.name}</div>
	}}
</Consumer>	
```

完整代码：

```jsx
import React, { Component } from 'react';
const MyContext = React.createContext()
const {Provider,Consumer }=MyContext
class Great extends Component {
	state = {
		person:{ 
			name:'小智'
		}
	}
	render() {
		let { person } = this.state
		return (
			<div className='a'>
				<Provider value={person}>
					<Parent></Parent>
				</Provider>
			</div>
		);
	}
}
class Parent extends Component {
	render() {
		return (
			<div className='b'>
				<Son></Son>
			</div>
		);
	}
}
class Son extends Component {
	render() {
		return (
			<div className='c'>
				<GreatSon></GreatSon>
			</div>
		);
	}
}
class GreatSon extends Component {
	static contextType = MyContext
	render() {
		let person=this.context
		return (
			<div className='d'>
				{person.name}
				<LittleGreatSon></LittleGreatSon>
			</div>
		);
	}
}
//函数式组件获取
function LittleGreatSon () {
		return (
			<div className='e'>
				<Consumer>
					{(value) => {
						return <div>{value.name}</div>
					}}
				</Consumer>	
			</div>
		);
}

export {Great} ;
```



## 网络请求

### 使用axios发送请求并封装axios

博主使用的技术栈是vue，之前自己封装过，就不浪费时间进行封装了，请移步axios官网：

http://axios-js.com/

```js
import axios from 'axios'

componentDidMount() { 
		axios.get('https://mock.apipost.cn/app/mock/project/fee3d514-9c37-4f69-9be0-ea185d142d90/getname').then(res => { 
			console.log(res);
		}).catch(error => { 
			console.log(error);
		})
	}
```

这是我用apiPost写的一个mock接口，模拟请求，想要实现可以到官网上下载apiPost

### fetch

fetch是一个内置的请求，只要promise过关，不难，所以就不对说了

https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

## react配置代理

**方式一： 在package.json中配置`“proxy”`选项**

```
{
  "proxy":"http://localhost:3000"
}
```

这种方式只能配置一个代理

**方式二：新建setupProxy.js文件（命名必须是这个）**

```jsx
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}
```

该方式可以配置多个代理。

# Hooks

在16.8版本以前函数式组件不可以使用state、ref和无法获取到this（无法进行生命周期操作），而16.8只有react提供了Hooks,可以实现函数式组件对state和ref的操作。

## state hooks

使用React.useState（）设置state，得到一个数组，对象的第一个值是state的值，第二个值是一个函数，用于设置state。

```jsx
export default function () { 
	let [data, setNum] = React.useState({ nums: 12 })
	function add(){ 
		setNum((data) => { return { nums: 12+data.nums } })
		console.log();
	}
	return (
		<div>
			{data.nums}
			<input type="button" value="点击" onClick={add} />
		</div>
	)
}
```

## useEffect

该函数可以实现类似生命周期函数

useEffect（callback,[Array]）

callback:表示的是一个回调函数，在项目启动的时候调用一次。设置返回值的时候，相当于在组件卸载前执行，返回值是一个函数

Array：数组，可选，不选表示的是检测全部state的状态时候改变，写该参数表示的是检测某个某个state改变的时候，调用callback函数，空数组表示都不检测。

```jsx
export default function () { 
	let [data, setNum] = React.useState({ nums: 12 })
	React.useEffect(() => { 
		console.log("@");
        return () => { 
			console.log("组件卸载前执行")
		}
	},[data])
	function add(){ 
		setNum((data) => { return { nums: 12+data.nums } })
		console.log();
	}
	return (
		<div>
			{data.nums}
			<input type="button" value="点击" onClick={add} />
		</div>
	)
}
```

## refHooks

用于获取ref，使用方式**React.useRef()**

```JSX
export default function () { 
	let myref=React.useRef()
	function check(){ 
		console.log(myref.current.value);
	}
	return (
		<div>
			<input type='text' ref={ myref}></input>
			<input type="button" value="点击查看值" onClick={check} />
		</div>
	)
}
```



# react-router-dom

该库是专门为web设计的路由库，使用的版本是V5版本，和V6版本有所不同。

## 组件

```jsx
<BrowserRouter>:使用history模式，刷新页面会请求相关资源，会导致props丢失问题。
<HashRouter>：使用hash模式，刷新页面不会发请求
<Link>：路由入口
<NavLink>：<Link>组件的升级版，自带高亮效果，可设置activeClassName属性指定样式类名实现高亮效果
<Prompt>
<MemoryRouter>：
<Redirect>：重定向
<Route>：路由出口
<Router>
<StaticRouter>
<Switch>：注册路由(V5)，用于路由一一匹配
<Routes>：注册路由(V6)，替换用于<Switch>，这是新版本的内容<Route path="/A" element={<A/>}></Route>
```

### 组件封装：以封装NavLink为例

定义组件：MyComponent.jsx

```jsx
import {Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class List extends Component {
	render() { 
		console.log(this.props);
		return (
			<div className='my-link'>
				<NavLink {...this.props}>{ this.props.children}</NavLink>
			</div>
		)
		
	}
}
```

使用组件

```jsx
import MyComponent from './component/MyComponent'
<MyComponent to="/A" a="100">关于</MyComponent>
```

注意：可以使用this.props.children获取组件的标签体。

### Switch组件的使用

```JSX
<Route path="/A" component={A}></Route>
<Route path="/B" component={B }></Route>
<Route path="/B" component={C }></Route>
```

老版本这样是，进入/B路由都会渲染B和A路由组件，但是路由是需要一一对应的，所以可以使用   Switch对其进行注册，实现一一对应。

```JSX
        <Switch>
          <Route path="/A" component={A}></Route>
          <Route path="/B" component={B }></Route>
          <Route path="/B" component={C }></Route>
        </Switch>
```

使用Switch就可保证在进入/B路由的时候，只会渲染B组件。

### 关于使用BrowserRouter方式导致请求出错的问题

在index.html中引入样式

```html
<link rel="stylesheet" href="./style.css">
```

在组件中，使用相关样式规则

```jsx
<NavLink to="/A" activeClassName="active">进入A </Link>
<NavLink to="/B" activeClassName="active"> 进入B</Link>
```

当页面启动时，请求的样式资源路径为：

http://localhost:3000/style.css

此时，我们在路径新的访问接口为

```jsX
<NavLink to="/A/A" activeClassName="active">进入A </Link>
<NavLink to="/B/B" activeClassName="active"> 进入B</Link>
<Route path="/A/A" component={A}></Route>
<Route path="/B/B" component={B }></Route>
```

第一次请求的资源路径为：

http://localhost:3000/style.css

刷新页面后的请求资源路径为：

http://localhost:3000/A/style.css

这就导致样式未加载到，

**解决方式：**

引入资源使用相对路径

```jsx
<link rel="stylesheet" href="./style.css">
 改为
<link rel="stylesheet" href="/style.css">
 或者
 <link rel="stylesheet" href="style.css">
 或者
<link rel="stylesheet" href="%PUBLIC_URL%/style.css">
```

## 路由匹配

```jsx
<NavLink to="/A/B/C" activeClassName="active">进入A </Link>
<Route path="/A" component={A}></Route>
```

react路由匹配默认开启模糊匹配，在进入路径**/A/B/C**一般会匹配路由路径**/A/B/C**，如果没有将会匹配到含有该路径的路由，即匹配到**/A**

开启精准匹配

```jsx
<Route exact={true} path="/A" component={A}></Route>
```

精准匹配尽量别开启，因为在二级路由的时候，容易导致匹配不到。

## Redirect

```JSX
<Switch>
  <Route path="/A" component={A}></Route>
  <Route path="/B" component={B}></Route>
  <Redirect to="/B"></Redirect>
</Switch>
```

表示匹配不到时将会进B这个组件

## 路由嵌套

只需在该路由下再写入一个路由即可

如，我们为A路由嵌套一个路由

```jsx
render() {
    return (
      <div className="App">
        <Link to="/A">进入A </Link>
        <Link to="/B"> 进入B</Link>
      <Switch>
         <Route path="/A" component={A}></Route>
          <Route path="/B" component={B}></Route>
      </Switch>
      </div>
    )
  }
```

在A路由组件写入代码：

```jsx
render() { 
		return (
			<div>
				<Link to='/A/C'>点我</Link>
				<Switch>
					<Route path="/A/C" component={ C}></Route>
				</Switch>
			</div>
		)
	}
```

这样即可实现路由的嵌套。

## 路由传参

### params参数

```jsx
class A extends React.Component {
	state = {msg: [{id: 1,name:'小智'},{id: 2,name:'小红'}]}
render() { 
	let { msg}=this.state
	return (
		<div>{
                msg.map((item, index) => {
				return (<Link key={index} to={`/A/C/${item.id}/${item.name}`}>{ item.name}</Link>)
			   })
			}
			<Switch>
				<Route path="/A/C/:id/:name" component={ C}></Route>
			</Switch>
		</div>
	)}}
```

在入口Link将参数拼接到路由地址上，在出口Route使用占位符**：**来表示参数，在该路由路径所对应的组件的props属性就可以获取到路由参数

```jsx
return (
	<div>
		{this.props.match.params.id}+{ this.props.match.params.name}
	</div>
)
```

### search参数

该方式就是向路由地址拼接参数

```jsx
return (
	<div>
	{
		msg.map((item, index) => {
			return (
				<Link key={index} to={`/A/C?id=${item.id}&name=${item.name}`}>{ item.name}</Link>)
			})}
		<Switch>
				<Route path="/A/C" component={ C}></Route>
		</Switch>
	</div>
)
```

在props的localtoin有个属性叫search的就携带了该参数

**search**: "?id=1&name=小智"

我们先需要将？截取掉在将其转为对象，react提供了一个库叫qs（有的版本叫querystring），可以将其转成对象

```jsx
import qs from 'qs'
	class C extends React.Component {	
		render() { 
			let querys = qs.parse(this.props.location.search.slice(1))
	return (
		<div>
			{querys.id}+{ querys.name}
		</div>
	)
	}
}
```

### state参数

不同于组件的state属性。

```jsx
class A extends React.Component {
	state = {
		msg: [{id: 1,name:'小智'},{id: 2,name:'小红'}]
	}
render() { 
	let { msg}=this.state
	return (
		<div>
			{
			msg.map((item, index) => {
				return (
					<Link key={index} to={{ pathname: '/A/C', state: {id:item.id,name:item.name}}}>{ item.name}</Link>
				)
			})
			}
			<Switch>
				<Route path="/A/C" component={ C}></Route>
			</Switch>
		</div>
	)
}
}
```

传参形式

```jsx
<Link key={index} to={{ pathname: '/A/C', state: {id:item.id,name:item.name}}}>{ item.name}</Link>
```

在相对应的路由

```jsx
class C extends React.Component {	
	render() { 
		let querys = this.props.location.state
		console.log(this.props.location);
	return (
		<div>
			{querys.id}+{ querys.name}
		</div>
	)}}
```

这个方式参数不会在地址栏显示，刷新参数也不会丢失。

**三种形式使用频率自上而下变少**

### 参数模式

一共有两种模式，push和replace，默认push模式，即有浏览记录，replace表示的是通过路由地址替换，无法实现路由的前进和后退功能。

开启replace模式

```jsx
<Link replace key={index} to={{ pathname: '/A/C', state: {id:item.id,name:item.name}}}></Link>
```

## 编程式路由导航

this.props.history提供了两种路由跳转方式：push(path,state)和replace(path，state)

```jsx
class C extends React.Component {
	state = {
		person: {name: 'xiaozhi',age:18}
    }
	gotoD = (p) => { this.props.history.push("/D",p)}
render() { 
	return (
		<div>
			<input type="button" value="进入D页面" onClick={()=>this.gotoD(this.state.person)}/>
		</div>
	)
	}
}
```

这种方式传的参数是state，其他方式只有一个参数，即参数拼接在url上。注意，路由D一定要注册，我这注册的地址为：

```jsx
<Route path="/D" component={D}></Route>
```

在App.jsx文件注册的。

## HashRouter和BrowserRouter的区别

**底层原理不一样**
BrowserRouter调用的是H5 history API,低版本兼容性问题；HashRouter 使用的是URL哈希值

**地址栏表现形式不一样**
BrowserRouter的路径不带#：localhost:3000/a；HashRouter的路径带#：localhost:3000/#/a

**刷新后对路由state参数的影响**
BrowserRouter没有任何影响，因为state保存在history对象中；HashRouter刷新后会导致路由state参数的丢失

# redux

redux是一个集中式状态管理功能，不是react的插件库，也可以使用在vue，angular等组件库，只是在react中使用比较多。

**redux的执行流程**

![redux](\img\redux.PNG)

Store：redux的核心库，用于管理reducers

reducers：状态管理，用于接收状态和处理状态。

Action：用于触发Store内的状态管理函数

## 使用redux

一般都是存在一个redux文件夹内

### 一般案例

![reduxDOME](\img\reduxDOME.PNG)

案例组件规则

**创建sotre**

新建文件store.js

```js
import { createStore } from 'redux'
export default createStore(reducer)
```

**创建reducers**

新建文件夹reducer.js

```js
export default function (repstate = 0, action) { 
	let { type,data } = state
	return repstate+data
}
```

action是一个对象

**使用store**

redux提供一个方法getstate()用于获取状态

**触发reducer：**

通过dispatch（action）触发函数

C组件

```jsx
import React from 'react'
import '../style/index.css'
import store from '../redux/store'
export default class C extends React.Component {
	updata() { 
		store.dispatch({
			type: 'up',
			data:1
		})
	}
render() { 
	return (
		<div className='c'>
			C组件
			<input type="button" value="加1" onClick={this.updata}/>
		</div>
	)
	}
}
```

B组件

```js
import React from 'react'
import '../style/index.css'
import store from '../redux/store'
export default class B extends React.Component {
	render() { 
		return (
			<div className='b'>
				B组件
			<h1>{ store.getState()}</h1>
				
			</div>
		)
	}
}
```

注意：redux只管管理状态，是不会管状态渲染的，想要让render渲染新数据，我们可以通过调动render函数实现，我们需要通过订阅（subscribe）到store发生变化在调用render函数（间接调用的方式）

只需要在需要更新数据的组件写入一下代码即可

```jsx
componentDidMount() { 
	store.subscribe(() => {
		this.setState({})
	})
}
```

整合：action一般我们需要单独写一个文件获取，同时type我们也会单独写一个文件存放（怕写错）

action.js

```js
import { UP } from './constants'
export let upAction = (data) => {
	return {
		type: UP,
		data: data
	}
}
```

constants.js

```js
export const UP = 'up'
```

随后在相关使用的部位进行引入即可。

## redux使用异步函数

异步一般需要在action上使用，需要借助redux-thunk库实现

在store.js中

```js
import { createStore, applyMiddleware } from 'redux'
import reducer from '../redux/reducer'
import thunk from 'redux-thunk'

export default createStore(reducer, applyMiddleware(thunk))
```

在action中

![](\img\async-redux.PNG)

后面在组件调用异步函数即可。

# react-redux

react-redux是react提供的插件库，用于管理redux库所开发的，它将redux和UI组件进行隔离，通过容器组件包裹UI组件先UI组件提供redux的状态以及状态操作。容器组件和UI组件属于父子组件的关系.





## react Hooks





## react扩展

### setState

setState更新状态的过程是一个异步操作（setstate本身是同步）

```js
state = {
		number:12
	}
	upNumber = () => { 
		this.setState({number:10}})
        console.log(this.state);
	}
```

这个代码打印结果是**12**，因为更新这个操作是一个异步操作，为了解决这个问题，setState还有第二个参数，是一个回调函数

```jsx
	state = {
		number:12
	}
	upNumber = () => { 
		this.setState({number:10}, () => { 
			console.log(this.state);
		})
		
	}
```

此时的打印结果就是**10**了

**setState更新状态还有一种写法，就是返回一个state状态对象的回调函数。**

```jsx
		upNumber = () => { 
			this.setState((state, props) => { 
				return {number:state.number+1}
			}, () => { 
			console.log(this.state);
		})
```

回调函数接收两个参数。

**一般：如果更新的状态不依赖state我们使用对象的形式，更新状态依赖state的时候使用函数的形式。**

### 懒加载

```jsx
const A = lazy(() =>{import('./component/A')})
```

因为路由懒加载可能会因为网络的原因加载慢的时候，，指定向跳到哪个组件（loading效果），使用Suspense组件将其路由包住。

```jsx
import Loading from './Loading'
<Suspense fallback={Loading}>
	<Route pach="/A" component={ A}></Route>
</Suspense>
```

### Fragment



```jsx
		<div>
			<input type='text' ref={ myref}></input>
			<input type="button" value="点击查看值" onClick={check} />
		</div>
```

这个虚拟dom的最外层div会被渲染到dom树上，为了如果没用，可以使用Fragment组件

```jsx
		<Fragment>
			<input type='text' ref={ myref}></input>
			<input type="button" value="点击查看值" onClick={check} />
		</Fragment>
```

这个组件可以写属性值，如果只是单纯先去掉外层div标签，可以使用空标签

```jsx
		<>
			<input type='text' ref={ myref}></input>
			<input type="button" value="点击查看值" onClick={check} />
		</>
```

空标签不可以写入任何属性。

### 

