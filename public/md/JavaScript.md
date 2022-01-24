# JavaScript基础

## 数据类型
**面试：**
在面试中如果问到数据类型，需要答上一下几点：
1.数据类型有几种
2.如何判断数据类型
3.null为何使用typeof打印是一个Object 
    **会要求写一个方法用来判断数据类型**
	   *** 首先使用instanceof判断是基本数据类型还是引用类型
	   ***如果是基本数据类型，使用typeof判断属于哪种基本数据类型
	   ***如果是引用类型，使用tostring方法进一步判断是那种对象。
	   		****函数可以使用typeof来判断出来。
4.基本数据类型之间的转换

### 数据类型分类

JavaScript包括八种数据类型：Boolean，Number，String，undefined，null， Bigint，Symbol，Object

基本数据类型：Boolean，Number，String，undefined，null，Bigint，Symbol。

引用类型：Object（包括了普通Object、Function、Array、Date、RegExp、Math）

### 判断数据类型

基本数据类型使用：typeof

引用类型使用：instanceof

通用判断方法：toString.call()

使用typeof判断数据类型：

| 定义                |            打印            | 结果      |
| ------------------- | :------------------------: | --------- |
| var num=1           |  console.log(typeof num);  | number    |
| var flag=false      | console.log(typeof flag);  | boolean   |
| var str="wo"        |  console.log(typeof str);  | string    |
| var nu=null         |  console.log(typeof nu);   | object    |
| var under=undefined | console.log(typeof under); | undefined |
| var unde            | console.log(typeof unde);  | undefined |
| var syb= Symbol(1)  |  console.log(typeof syb);  | symbol    |
| var big=1234n       |  console.log(typeof big);  | bigint    |
| var fn=function(){} |  console.log(typeof fn);   | function  |
| var arr=[]          |  console.log(typeof arr);  | object    |
| var obj={}          |  console.log(typeof obj);  | object    |
| var map=new Map()   |  console.log(typeof map);  | object    |
| var set= new Set()  |  console.log(typeof set);  | object    |

使用instanceof判断数据类型

| 定义                     | 打印                                 | 结果  |
| ------------------------ | ------------------------------------ | ----- |
| var num=1                | console.log(num instanceof Number);  | false |
| var fn=function(){}      | console.log(fn instanceof Function); | true  |
| var fn = function () { } | console.log(fn instanceof Object);   | true  |
| var arr=[]               | console.log(arr instanceof Array);   | true  |
| var obj={}               | console.log(obj instanceof Object);  | true  |
| var map=new Map()        | console.log(map instanceof Map);     | true  |
| var set= new Set()       | console.log(set instanceof Set);     | true  |

可以看出，使用instanceof无法判断基本数据类型，判断引用类的的时候，需要尽量判断他属于哪个类下的属性而不是判断是否在超类下。

使用tostring.call()判断数据类型

```js
toString.call(()=>{})       // [object Function]
toString.call({})           // [object Object]
toString.call([])           // [object Array]
toString.call('')           // [object String]
toString.call(22)           // [object Number]
toString.call(undefined)    // [object undefined]
toString.call(null)         // [object null]
toString.call(new Date)     // [object Date]
toString.call(Math)         // [object Math]
toString.call(window)       // [object Window]
```

通过打印的字段判断是哪种数据类型

### 数据类型转换

#### 基本数据之间转换

其他数据类型转Number

​		方式：Number()函数     |    parseInt()	|	parseFloat()

```js
字符串转Number:空字符转为0,数值字符串转为对应数值,若过大,打印Infinity;非数值类型字符串转成NaN。
boolean转Number：true为1，false为0。
null转为0，underfined转为NaN。
对象转Number都为NaN
```

其他数据类型转String

​		方式：toString()方法	|	String函数

```
Number类型：转为对应数值字符串
boolean类型：true转为"true",flase转为flase
null和underfined没有toString方法，可使用String函数，打印字符串“null”和“undefined”
对象：打印[[object 对应对象类型]]
```

其他数据类型转boolean

​      方式：Boolean()函数

```
数字转布尔：除了0和NaN，其余的都是true
字符串转布尔：除了空串，其余的都是true
null和undefined都会转换为false
对象也会转换为true
```

#### 引用类型相互转化

数组和字符串相互转化

```
数组转字符串：join()
字符串转数组：split()
```

类数组转数组

```js
Array.from
Array.protoType.slice.call()
```

## 运算符

### ||和&&

||和&&有有中断功能,||左右true时，不在运行右判断；&&左为true时，不在运行右判断

### ==和===

==：比较数值是否相等，不比较数据类型，有隐性数据类型转化功能。

===：严格等号，比较值和数据类型是否相等，不会对数据类型进行转化。

# JavaScript对象

JavaScript对象可以分为：内置对象，寄主对象，自定义对象。

内置对象：例如String,Number，Date，Math等对象。

寄主对象：浏览器内置对象，JavaScript可以直接使用的，例如window

## 自定义对象

### delete关键词

用于删除对象的属性

```
var obj={
	name:"xiaozhi",
	age:12
}
delete obj.name
console.log(obj);
```

使用delete会比较消耗性能，尽量少用，

### 中括号读写对象

对于不知道对象属性和值得情况，可以使用中括号表达式，实现对对象进行添加删除赋值等操作

赋值：

```
obj[proprtisName]=proprtisValue
```

取值：

```
obj[proprtisName]
```

删除：

```
delete obj[proprtisName]
```

### in运算

用于判断某个属性是否属于对象

> “属性名” in obj

```
var obj={
	name:"xiaozhi",
	age:12
		}
console.log('name' in obj);
```

## 函数

函数是一个特殊的对象

### 函数的参数
​      函数的参数可以是任意值，而且js不会去检查函数参数个数，如果行数参数个数多了，会忽略不合适的参数，如果函数参数少了，会返回一个Nan，而没有对应实参的形参会变成undefined。
### 返回值
​        返回值表示函数的执行结果。return不写任何值，会返回一个undefined，如果不写return，也会返回一个undefined。放回值可以是任意对象。

### this关键词

> + 默认绑定: 非严格模式下 this 指向全局对象，严格模式下 this 会绑定为 undefined
> + 隐式绑定: 满足 XXX.fn() 格式，fn 的 this 指向 XXX。如果存在链式调用， this 永远指向最后调用它的那个对象
>   隐式绑定丢失：起函数别名，通过别名运行；函数作为参数会造成隐式绑定丢失。
> + 显式绑定: 通过 call/apply/bind 修改 this 指向
> + new绑定: 通过 new 来调用构造函数，会生成一个新对象，并且把这个新对象绑定为调用函数的 this 。
> + 箭头函数绑定: 箭头函数没有 this ，它的 this 是通过作用域链查到外层作用域的 this ，且指向函数定义时的 this 而非执行时

### 构造方法

构造方法是一个特殊的函数，构造方法的创建通过“new”关键词实现。

#### 构造方法执行过程

> - 立刻创建一个新的对象
> - 将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
> - 逐行执行函数中的代码
> - 将新建的对象作为返回值返回

### 原型对象

所创建的每一个函数，解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是我们所谓的原型对象。

#### 添加

```
MyClass.prototype.name = "名字";
```

#### 读取

```
MyClass.__proto__.name
```

#### 查询某属性是否在原型对象上

hasOwnProperty()

```
mc.hasOwnProperty("age")
```

# JavaScript常用对象

## 数组Array

https://www.cnblogs.com/waywordcode/p/15472070.html

## Object对象

Object.assign()：通过复制一个或多个对象来创建一个新的对象。

Object.create()：使用指定的原型对象和属性创建一个新对象。

Object.defineProperty()：给对象添加一个属性并指定该属性的配置。

Object.defineProperties()：给对象添加多个属性并分别指定它们的配置。

Object.entries()：返回给定对象自身可枚举属性的 `[key, value]` 数组。

Object.freeze()：冻结对象：其他代码不能删除或更改任何属性。

Object.is()：比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。

Object.keys()：返回一个包含所有给定对象**自身**可枚举属性名称的数组。

Object.values()：返回给定对象自身可枚举值的数组。

## String

String.prototype.charAt()：通过索引，获取字符
String.prototype.concat()：字符串拼接
String.prototype.endsWith()：获取以字符串结尾的字符
String.prototype.includes()：是否包含字符串
String.prototype.indexOf()：通过字符获取再字符串第一次出现的索引
String.prototype.lastIndexOf()：通过字符获取再字符串最后一次出现的索引
String.prototype.replace()：代替第一次出现的字符
String.prototype.replaceAll()：全部代替
String.prototype.search()：索引字符串
String.prototype.slice()：字符串截取
String.prototype.split()：以某种字符把字符串切割，返回一个数组
String.prototype.startsWith()：是否以什么开头
String.prototype.substring()：字符截取
String.prototype.toLocaleLowerCase()
String.prototype.toLocaleUpperCase()
String.prototype.toLowerCase()
String.prototype.toString()
String.prototype.toUpperCase()
String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()

## JSON

JSON.parse()：字符串转JSON

解析JSON字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性, 在返回之前进行某些修改。

JSON.stringify():JSON转字符串

返回与指定值对应的JSON字符串，可以通过额外的参数, 控制仅包含某些属性, 或者以自定义方法来替换某些key对应的属性值。

# 正则表达式

## 创建正则表达式

```
var patt1=new RegExp(pattern, attributes);
var 变量 = /pattern/attributes
```

pattern：表示正则表达式

attributes：表示匹配模式，包含属性 "g"（全局匹配）、"i"（区分大小写） 和 "m"（多行匹配）。

## 正则表达式的方法

compile：编译正则表达式。

exec：检索字符串中指定的值。返回找到的值，并确定其位置。

test：检索字符串中指定的值。返回 true 或 false。

```
var reg = new RegExp("ab","i");
var str = "a";
var result = reg.test(str);
console.log(reg.test("Ac"));
```

## 字符串中支持正则的方法

### split()

可以将一个字符串拆分为一个数组，方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串，这个方法即使不指定全局匹配，也会全都插分。

```
var str = "1a2b3c4d5e6f7";
var result = str.split(/[A-z]/);
```

### search()

可以搜索字符串中是否含有指定内容；如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1；它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串；serach()只会查找第一个，即使设置全局匹配也没用。

```
str = "hello abc hello aec afc";
result = str.search(/a[bef]c/);
```

### match()

可以根据正则表达式，从一个字符串中将符合条件的内容提取出来； 默认情况下我们的match只会找到第一个符合要求的内容，找到以后就停止检索；我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容；可以为一个正则表达式设置多个匹配模式，且顺序无所谓；match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果。

```
str = "1a2a3a4a5e6f7A8B9C";
result = str.match(/[a-z]/ig);
```

### replace()

可以将字符串中指定内容替换为新的内容
               - 参数：
                      1.被替换的内容，可以接受一个正则表达式作为参数
                      2.新的内容
                              - 默认只会替换第一个

```
var str = "1a2a3a4a5e6f7A8B9C";
var result = str.replace(/[a-z]/gi , "");
```

# DOM对象

- 文档节点：整个HTML文档 
- 元素节点：HTML文档中的HTML标签
- 属性节点：元素的属性
- 文本节点：HTML标签中的文本内容

## Document 对象：元素节点对象

### 获取节点方法

| [getElementById()](https://blog.csdn.net/qq_31539817/article/details/met_doc_getelementbyid.asp) | 返回对拥有指定 id 的第一个对象的引用。   |
| ------------------------------------------------------------ | ---------------------------------------- |
| [getElementsByName()](https://blog.csdn.net/qq_31539817/article/details/met_doc_getelementsbyname.asp) | 返回带有指定名称（name属性）的对象集合。 |
| [getElementsByTagName()](https://blog.csdn.net/qq_31539817/article/details/met_doc_getelementsbytagname.asp) | 返回带有指定标签名的对象集合。           |

### 获取元素节点的子节点

- getElementsByTagName() 方法，返回当前节点的指定标签名后代节点
- childNodes 属性，表示当前节点的所有子节点 （注意有空格时会有空白文本节点）
- firstChild属性，表示当前节点的第一个子节点（包括空白文本节点）
- lastChild属性，表示当前节点的最后一个子节点
- firstElemenChild：获取非空白子节点，只是兼容性差，ie8及以下不支持该属性。

### 获取父节点和兄弟节点

- parentNode属性，表示当前节点的父节点
- previousSibling属性，表示当前节点的前一个兄弟节点
- nextSibling属性，表示当前节点的后一个兄弟节点

### Document 对象的其他属性和方法

document.body：获取body标签
document.documentElement：获取html根标签
document.all：获取所有的元素对象
getElementsByClassName()：根据元素的class属性值查询一组元素节点对象（不支持ie8以及以下版本）
document.querySelector()：根据一个选择器查找元素对象（ie8以及以上支持）。
document.querySelectorAll()：该方法和querySelector()用法类似，不同的是它会将符合条件的元素封装到一个数组中返回，即使符合条件的元素只有一个，它也会返回数组。
注意：虽然IE8中没有getElementsByClassName()但是可以使用querySelector()代替，使用querySelector，只查一个，只查一个，如果满足条件的元素有多个，那么它只会返回第一个。

### DOM增删改查

| getAttribute() | 返回指定的属性值。               |
| -------------- | -------------------------------- |
| setAttribute() | 把指定属性设置或修改为指定的值。 |

## JavaScript获取并修改css样式

### 内联样式（style属性）

> - 读取语法：元素对象.style.样式名（读取的样式只能是内联样式）
> - 修改语法：元素对象.style.样式名=样式

### 获取元素的当前显示的样式（只读）

> 元素.currentStyle.样式名 （只有IE支持）
>
> window.getComputedStyle(元素,null):IE不支持，其他浏览器支持

### 其他样式

| element.clientHeight | 返回元素的可见高度。 |
| -------------------- | -------------------- |
| element.clientWidth  | 返回元素的可见宽度。 |

| element.offsetHeight | 返回元素的高度。 |
| -------------------- | ---------------- |
| element.offsetWidth  | 返回元素的宽度。 |

| element.offsetParent | 返回元素的偏移容器。 |
| -------------------- | -------------------- |

| element.offsetLeft | 返回元素的水平偏移位置。 |
| ------------------ | ------------------------ |
| element.offsetTop  | 返回元素的垂直偏移位置。 |

| element.scrollHeight | 返回元素的整体高度。             |
| -------------------- | -------------------------------- |
| element.scrollLeft   | 返回元素左边缘与视图之间的距离。 |
| element.scrollTop    | 返回元素上边缘与视图之间的距离。 |
| element.scrollWidth  | 返回元素的整体宽度。             |

当满足scrollWidth - scrollLeft == clientWidth：说明水平滚动条滚动到底

# 事件对象

## 事件冒泡

所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发

## 事件委派

指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素。从而通过祖先元素的响应函数来处理事件。事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能。

## 事件绑定

```
addEventListener(eventName,callback,isTouch)
```

eventName：事件的字符串，不要on
callback：回调函数，当事件触发时该函数会被调用
isTouch：是否在捕获阶段触发事件，需要一个布尔值，一般都传false

IE8以及以下版本不支持

### IE8实现事件绑定

```
attachEvent(evetName,callBack)
```

evetName：事件的字符串，要on
callBack：回调函数

## 事件传播



关于事件的传播网景公司和微软公司有不同的理解

### 微软

微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。

### 网景

网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，

然后在向内传播给后代元素

### W3C

W3C综合了两个公司的方案，将事件传播分成了三个阶段

- 捕获阶段：在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
- 目标阶段：事件捕获到目标元素，捕获结束开始在目标元素上触发事件
- 冒泡阶段：事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件

如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true，一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false

IE8及以下的浏览器中没有捕获阶段

## 拖拽

拖拽的流程

- 当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown
- 当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
- 当鼠标松开时，被拖拽元素固定在当前位置	onmouseup

## 键盘事件

onkeydown：按键被按下，对于onkeydown来说如果一直按着某个按键不松手，则事件会一直触发，当onkeydown连续触发时，第一次和第二次之间会间隔稍微长一点，其他的会非常的快，这种设计是为了防止误操作的发生。
onkeyup：按键被松开

# JavaScript进阶

## es6

### 模块化

模块化就是将一些具有相同功能的代码提出出来写在一个js文件中，其的数据和实现功能是私有的，只向外提供一个公共的访问接口（变量/函数等）

#### 模块化的进程

将功能封装成一个个方法（容易造成变量命名污染）>>将功能写成一个个对象（对象不安全，会被随意调用功能）>>匿名闭包，通过window向外暴露功能（请求多，依赖多，维护起来麻烦）>>es6模块化（解决命名冲突，对外导出变量和对象，便于维护）

#### es模块化

export关键词：表示向外暴露的接口（变量/函数/对象）。默认暴露 export default

```js
const num = 12
const fun = function () { console.log("模块化导出");}
const obj = {name:"xiaozhi"}
export {num,fun,obj}
```



```js
export default function () { 
	console.log("默认暴露模块化");
}
```

import 关键词：用于引入导出的模块

> import moduleName from 'module'

```js
import modelD from './model/model'
import { num, fun, obj } from './model/model2'
modelD()
console.log(num, obj);
fun()
```

由于使用模块化需要使用label便于成es6，所以在浏览器中是无法验证的。

#### namespce

模块命名空间，通过对象调用功能，一般挂载到window或者使用es6模块化导出

```js
var NameSpace = window.NameSpace || {};
NameSpace.Hello = new function() {
  var self = this;
  var name = 'world';
  self.sayHello = function(_name) {
    return 'Hello ' + (_name || name);
  };
};
NameSpace.Hello.sayHello();
```

### let和const

let和const都是用于声明变量的关键词

#### let

特点:可以不赋值（underfined），不能重复声明，块级作用域生效，不能变量提升，不影响作用域。

#### const

特点：一定要赋值；为常量，不可重复赋值；块级作用域生效；不能变量提升；不影响作用域。

const一般用来定义常量

### 变量结构赋值

结构赋值是，定义变量的时候，可以将对象内的同名变量赋值给该同名变量，该同名变量需要使用“{}”包起来

```js
let obj ={
	name:"xiaozhi",
	age:18
}
let {name,age}=obj
```

### 模板字符串

模板字符串多用在字符串拼接的时候获取变量。

模板格式：

```
`..${变量}..`      反单引号

```

```
let a="12"
let str=`今天小米${a}岁了 `
console.log(str);
```

### 对象简写

es6运行对象直接写变量

```
let name='小米'
		let fn=function(){
			console.log("你好");
		}
		const obj={
			name,
			fn
		}
		obj.fn()
		console.log(obj.name,);
```

对象内部定义方法不需要function关键词

```js
const obj={
	show(){console.log("showshouw",this.name);}
}
obj.show()
```

### 箭头函数

语法：

```
（[params]）=>{....}
```

箭头函数的this

箭头函数本身没有this，它的this指向其作用域的this，如果其所在作用域没有this，将会向上查找，最终知道window。

```js
let fn=() => onsole.log(this);}		
let obj={fn}
obj.fn()//this指向window
function Person(){
	name:12,
	(()=>{
		console.log(this);//this直线Person
	})()
let p=new Person()
```

箭头函数不能作为构造函数进行实例化

```
let Person=()=>{}
let p =new Person()
```

箭头函数没有arguments

### 形参默认值

es6可以指定形参的默认值，如果不入参，则该参数的值为设置的默认值

```js
function  fn(a=100,b=12){
	console.log(a,b);
}
fn()
```

可以通过对象结构实现传参

```js
function func({a=23,b=23}){
	console.log(a,b);
}
let obj={
	a:12,
	b:13,
	c:14
}
func(obj)
```

### reset参数

reast参数用来代替arguments，主要是因为arguments是一个类数组，而reast参数是一个数组

```js
<script>
	function fn(...args){
		console.log(args);
	}
	fn('q','w','e')
</script>
```

reast参数不是唯一的，但必须放在最后面，用于接收剩余的参数

```js
<script>
	function fn(a,b,...args){
		console.log(args);
		console.log(a,b);
	}
	fn('q','w','e',1,2)
</script>
```

注意：args是自定义的

### 扩展运算符

扩展运算符用于对有序对象展开

格式：

```
...           就是三个点
```

```
let arr=[12,23,34]
console.log(...arr);
```

必须有序，例如普通对象是无法使用的。

### Symbol

Symbol是es6引入的一个新的基本数据类型，表示的是独一无二的变量

#### 创建Symbol

方式一：创建独一无二的Symbol变量

> let a =Symbol([args])

传入参数打印结构为其本身，表示的是这个Symbol变量的标志，该标志相同的时候，Symbol变量也是不同的变量。

```js
<script>
	let a=Symbol("12")
	let b = Symbol("12")
	a='13'
	console.log(a===b);//false
</script>
```

方式二：创建标志相同且为相同的Symbol变量

> let a =Symbol.for([args])

```js
<script>
    let c =Symbol.for("13")
    let d= Symbol.for("13")
    console.log(c===d);//true
</script>
```

Symbol的特点：值是唯一的；值不能参加运算；使用Symbol变量的对象不能进行for...in循环,但是可以使用Reflect.ownKeys()来获取对象所有的键名。

实例：先对象添加同名方法

```js
let obj={
	name:"xiaozhi",
	up(){
		console.log("你好，不是symbol");
	}
}
let methods={
	up:Symbol()
}
obj[methods.up]=function(){
	console.log("你好,我是symbol");
}
onsole.log(obj);
```

#### symbole的内置属性

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol

### 迭代器

迭代器是JavaScript为不同数据类型提供统一的访问机制。任何数据类型只要实现了iterator接口，就可以实现遍历操作。

es6提供了新的变量方式for...of用于遍历对象的值，而iterator就是为了提供for...of消费

#### 工作原理

首先会创建一个指针对象指向当前数据结构的起始位置。

调用next方法，指针指向数据结构的第一个成员。

再次调用next方法，指针自动指向下一个成员，直到直线最后一个成员

每次调用next方法会返回一个对象{value,done},done为true表示没有成员。

#### 自定义迭代器

和工作原理一样：

首先添加一个迭代器，每次调用都会返回一个next方法。

```js
	<script>
		let obj ={
			name:'hh',
			age:12
		}
		obj[Symbol.iterator]=function(){
			let _this=this
			let index=0
			let objKeys=Object.keys(this)
			return {
				next:function(){
					if(index<objKeys.length){
						let res={
							value: _this[objKeys[index]],
							done:false
						}
						index++
						return res
					}else{
						return{
							value:undefined,
							done:true
						}
					}
				}
			}
		}
		for(let a of obj){
			console.log(a);
		}
	</script>
```

### 生成器

#### 原理

生成器是es6提供的一种新的解决异步调用的思路，生成器本身是一个函数，定义的时候在函数名之前有一个星号，函数内部使用yield用于将函数内部代码分割成一个个成员，yield的值作为next方法返回值对象value的值。生成器的返回值是一个具有iterator迭代器的对象。

```js
<script>
	//定义生成器
	function * gone(){
		console.log("成员一业务代码");
		yield "成员一";
		console.log("成员二业务代码");
		yield "成员二";
		console.log("成员三业务代码");
		yield "成员三";
	}
	let itera=gone()
	//itera.next()
	for(let v of itera){
		//console.log(v);
		itera.next()
	}
</script>
```

#### 生成器next方法的参数

生成器的next()方法传入的参数会作为上一个yield的返回值

```js
	<script>
		//定义生成器
		function * gone(aa){
			console.log(aa);
			let a=yield "成员一";
			console.log(a);
			let b=yield "成员二";
			console.log(b);
			let c=yield "成员三";
			console.log(c);
		}
		let itera=gone("aabbcc")
		itera.next("1")//没有上一个，不打印
		itera.next("2")
		itera.next("3")
		itera.next("4")
	</script>
```

### es6新增集合

#### set

set集合是用于存贮不可重复的值得集合

四个方法：size,add,delete,has。

#### map

五个方法：size，set，get，has，clear。

### 类

具体可看typescript中，对类的讲解

https://www.cnblogs.com/waywordcode/p/15476502.html

## es7

es7主要新增两个功能

Array.prototype.includes:检查数组是否含有有个元素

**：幂运算符，效果和Math.pow一样

本来还有一个，用来回调promise的，es8增强了，es7没必要看了。

## es8

### async&await

异步代码同步化，可以让同步代码执行起来如同异步代码一样

缺点：如果请求过多，容易阻塞，导致加载时间过长

#### async函数

如果返回的不是一个promise对象，则返回结果是一个状态为已完成的promise对象，其值为promise的value

如果返回值是一个promise对象，返回结果是一个状态和返回的promise对象状态一样的一个promise对象。

```js
	<script>
		async function fn(){
			return "你好"
		}
		async function func() {
            return new Promise((res,rej)=>{
                res('OK')
		})
		}
		let b=fn()
		let c=func()
		console.log(b);
		console.log(c);
	</script>
	<script>
		let p = new Promise((res, rej) => {
			let ok = "ok"
				res(ok)
			}).then(res => {
				console.log(res);
			})
	</script>
```

await：将异步代码同步会，当代码执行到await处，会等待异步代码执行完成后才能执行下面的代码。

使用await修饰的异步代码的返回值，是promise的成功的result值。如果是失败的状态使用try...catch进行捕捉。

```js
<script>
	async function fun(){
		try {
			let d=await new Promise((res, rej) => {
				let ok = "no"
				rej(ok)
			})
	} catch (e) {
			console.log(e);
		}
	}
fun()
</script>
```

### 对象扩展

#### getOwnPropertyDescriptor

```js
Object.getOwnPropertyDescriptor(obj, prop)
```

方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

#### Object.valus && Object.entries() 

## es9

### reast参数和扩展运算符增强

es6只是针对数组，到se9之后增加到对对象的使用

### 正则

#### 正则命名分组

格式：?<ItemName>

```js
<script>
	let str='<a href="www.baidu.com">你好</a>'
	let p=/<a href="(.*)">(.*)<\/a>/
	let a=p.exec(str)
	console.log(a);
	//分组
	let c = /<a href="(?<url>.*)">(?<name>.*)<\/a>/
	let s = c.exec(str)
	console.log(s);
</script>
```

#### 正则反向断言

通过需要匹配的字符串的前面的字符进行判断

```js
<script>
	let str ='js1232hh哈哈555妮妮'
	//通过哈子来判断需要截取的部分
	let ep=/(?<=哈)\d+/
	//表示之前必须要有‘哈’
	let a=ep.exec(str)
	console.log(a);
</script>
```

## es10

### Object.fromEntries() 

将二维数组转对象

### String.trimStart()&&String.trimEnd()

清除前面/后面的空字符

### Array.flat()和Array.flatMap()

Array.flat():数组偏平化，参数为一个整数，表示的是偏平化到第几层，为Infinity表示无论多少层，都偏平化数组。

Array.flatMap():将map（）方法的返回值为一个数组，返回值应该是一个二维数组，flatMap循环遍历会使其变成一维数组

### Symbol.prototype.description

description是一个只读属性，它会返回 Symbol对象的可选描述的字符串。

## es11 

### 私有属性

修饰符：#      和private类似

```js
class Person{
	name='12'
	#name="123"
}
let p=new Person()
console.log(p.name);
console.log(p.#name);
```

### Promise.allSettled

Promise.allSettled([p1,p2,....])：获取全部promise系列的结果

Promise.all([p1,p2,....])：表示全部promise系列状态都为已完成的结果

### 可选链操作符

修饰符：？.

和&&符号有点类似，表示签名的字符有了才会读取后面的字符

```js
<script>
	function fn(conf){
	//表示先判断conf是否存在，存在，在执行conf.con,再次判断conf.con是否存在，存在获取，不存在为undefined，下面再次判断
		let b= conf?.con?.a
		console.log(b);
	}
fn({
	con:{
	a:100
	}
	})
</script>
```

### 动态import

格式：import (url).then(model=>{....})

model:含有暴露出来的接口，直接通过model调用

### BigInt：大数值

> let i=BigInt(num)

### 全局this

globalThis

# JavaScript进阶二

## 闭包

什么是闭包：函数发生嵌套，且内部函数引用外部函数的变量时，形成闭包

闭包的特点：函数调用结束后，该变量仍然存在；当函数作为返回值的时候，该函数仍然存在。

结束闭包：变量赋值为null即可

## 作用域

作用域:就是变量的作用范围，作用域可以分为全局作用域和局部作用域，es6新增的块级作用域。

作用域的作用：最大的作用是用于隔离变量，不同的作用域的同名变量不会启冲突。

### 全局作用域

在代码的任何地方都可以访问的变量和对象拥有作用域，异步作用域有一下几种情况：

- 最外层函数和在最外层函数定义的变量拥有全局作用域
- 所有为定义直接赋值的变量自动声明拥有全局作用域
- 所有window对象的属性拥有全局作用域

全局作用域的缺点：容易发生命名冲突

局部作用域（函数作用域）

局部作用域表示声明在函数内部的变量

### 作用域链

变量执行的过程中，会由当前作用域向外查找该变量，查找路径就构成一个作用域链。

变量执行的时候，首先在当前作用域查找变量，如果没有，先父级作用域查找，如果没有，会进一步向上查找，知道查找到全局作用域为止，如果全局作用域没有该变量则会报变量未定义的错误

### 自由变量

当前作用域没有定义的变量就叫自由变量

```
let a
function fn(){
console.log(a)
}
```

## 变量提升和函数提升

变量提升：变量的使用在变量声明之前，变量仍然可以执行，这种现象就叫变量提升。此时的变量为underfined

函数提升：函数调用在函数声明执行就函数提升。函数调用结果为其本身，函数内部的代码不会执行

### 导致变量提升和函数提升的原因

浏览器解析JavaScript代码的时候，有个过程叫预处理阶段。预处理会有两个阶段：全局预处理和局部预处理

### 全局预处理

-   var定义的全局变量==>undefined, 添加为window的属性
-   function声明的全局函数==>赋值(fun), 添加为window的方法
-   this==>赋值(window)

### 局部预处理

- 形参变量==>赋值(实参)==>添加为执行上下文的属性
- arguments==>赋值(实参列表), 添加为执行上下文的属性
- var定义的局部变量==>undefined, 添加为执行上下文的属性
- function声明的函数 ==>赋值(fun), 添加为执行上下文的方法
- this==>赋值(调用函数的对象)

## 继承

### 原型链基础

核心：子对象的原型指向父对象的实例对象，子对象的构造函数指向其实例

注意：父类的方法要添加到原型上才能访问到，子元素向原型添加方法的操作，必须在核心两个点之后操作

```js
	<script>
		function Super(){
			this.name='12'
		}
		Super.prototype.spuerFn=function(){
			console.log("父元素", this.name);//此处的this.name的为子元素的name，因为this为sub
		}
		function Sub(){
			this.name="23"
		}
		Sub.prototype=new Super()
		Sub.prototype.constructor=Sub
		Sub.prototype.subFn=function(){
			console.log("子类",this.name);
		}
		let s=new Sub()
		console.log(s.name);
		s.subFn()
		s.spuerFn()
	</script>
```

### 构造函数继承

核心：子对象通过call调用父对象的构造函数（不算真的继承）

```js
function Fu(name,age){
		this.name=name
		this.age=age
}
function Zi(name,age){
		Fu.call(this,name,age)
}
let zi=new Zi('xiaohiz',24)
console.log(zi.name,zi.age);
```

### 组合基础

组合基础通过原型链基础访问父类的方法，通过构造函数继承获取属性

```js
<script>
	function Fu(name, age) {
		this.name = name
		this.age = age
	}
	function Zi(name, age) {
		Fu.call(this, name, age)
	}
	Zi.prototype = new Fu()
	Zi.prototype.constructor = Zi
	Fu.prototype.getNameAndAge = function () {
		return this.name + this.age
	}
	let zi = new Zi("小智", 24)
	let a = zi.getNameAndAge()
	console.log(a);
</script>
```

### es6继承

关键词：extends

## 事件流

分两种：事件的捕获和冒泡

## 原型对象和原型链

### prototype属性

任何构造函数都有自己的prototype属性，这个prototype属性默认指向一个object空对象，这个空对象称为原型对象。但是JavaScript中的大部分内置的引用类型的prototype属性指向的Object对象不是空的，而是有很多的方法和属性，这是JavaScript自己添加的，例如Date,Math,Array，Object等的原型对象上有很多的对象和属性。

原型对象有constructor属性，该属性指向函数对象（就是构造方法或者叫构造函数）

```js
<script>
	let a=new Object()
	function Fn(){}
	let fn=new Fn()
	console.log(Object.prototype.constructor=== Object);
	console.log(Fn.prototype.constructor === Fn);
</script>
```

总结：prototype属性是构造函数或者构造方法固有的属性，prototype属性默认指向一个Object空对象，这个对象叫做原型对象，在原型对象中有个constructor属性，该属性指向其函数对象。

### 原型的作用

为对象添加方法，避免和内部定义的方法发生冲突

###  显式原型和隐式原型

每一个构造函数或者构造方法都会有一个prototype属性，即为显式原型。

每个实例对象都会有一个\_\_proto\_\_属性，即为隐式原型。

隐式原型是在实例对象创建的时候，自动添加的，其中指向该实例对象的构造函数（构造方法）的prototype。

显示原型是在构造函数（构造方法）创建的时候自动添加的（内置对象自己自带），其值默认指向一个空的Object对象。

创建实例对象的时候。

注意：prototype一般用于添加属性；\_\_proto\_\_一般用于读取属性（es6后可以添加），所以读取过程会构成一条链路，叫隐式原型链。

### 原型链

原型链就是访问一个对象属性的过程。

#### 原型链访问过程

访问一个对象的属性的时候，首先在自身找，如果有该属性就读取，如果没有该属性，则到该对象的\__proto\__

属性去找，找到，则返回，找不到继续往上找；由于\__proto\__值指向其原型对象的prototype属性，此时将会向其构造函数（构造方法）的对象的\__proto\__属性上找，一致会找到Object的\__proto\__属性上，没有，才会给undefined。

这个过程也叫隐式原型链

原型链的尽头为Object对象的原型

备注：说真的，如果讲原型链，有点难以理解，如果引入面向对象的继承思想就好理解了。

就是先在自身找，找不到，再到父类找，父类找不到，再到父类的父类找，一直找到超类Object

## 严格模式

 开启严格模式

```js
"use strict";
```

## 执行上下文和执行上下文栈(又叫执行栈)

https://juejin.cn/post/6844903682283143181

执行上下文是JavaScript的运行环境的一个抽象概念，每个JavaScript都会在执行上下文执行，执行上下文主要有两种情况：

全局执行上下文：全局执行上下文会创建一个window的全局执行上下文，在执行过程中，有两个阶段：预处理阶段和执行阶段。预处理阶段将this指向window，变量发生提示函数也会提升。

函数执行上下文：函数在执行的时候会创建函数执行上下文，处理阶段可看上面的函数提升部分。

### 执行栈

执行栈也叫调用栈，是一种先进后出的数据结构模型，第一次执行JavaScript的时候会创建一个全局执行上下文并压入栈。当js引擎遇到一个函数的时候，会创建一个函数执行上下文压入栈，.......，JavaScript引擎会指向这些函数执行上下文，函数执行结束后，函数执行上下文弹栈，再次执行当前下一个函数执行上下文，直到全局执行上下文弹栈。

## 并发模型与事件循环













