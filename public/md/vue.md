# 基础

## 指令

vue中的指令有：v-text、v-html、v-show、v-if、v-else、v-else-if、v-for、v-on、v-bind、v-model、v-slot、v-pre、v-cloak、v-once 。

v-pre：用于跳过大量没有指令的节点会加快编译。

v-cloak：解决屏幕闪动。网络满的时候，屏幕会出现模板、变量等问题，可以使用这个指令解决。

v-once 指令：能执行一次性地插值，当数据改变时，插值处的内容不会更新。

注意：

> v-if支持<template>元素；v-show` 不支持 `<template>` 元素，也不支持 `v-else。

使用v-if和v-else作用两个相同的元素的时候，元素不会被替换掉而是换掉他们的元素相关属性，已达到高效复用的目的。如果希望达到替换元素的效果，可以绑定key属性来属性

```vue
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

以上代码绑定了可以之后，可以实现两个input标签之间的替换，而label为绑定key，仍然被高效复用。

### v-model修饰符

- .lazy：将input事件转为change` 事件_之后_进行同步

- ### .number

- ### .trim

组件上使用一个v-model，将会向组件内部传递一个props默认为value的属性（可以名为为v-modle绑定的属性名）同时向组件绑定一个input事件。

### v-if和v-show的局别

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- `v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- 相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

### v-if和v-for一起使用

**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。**

v-for的优先级比v-if的高，如果放在同一个标签上，会先渲染列表，在列表渲染过程中执行v-if，这会导致如果在列表渲染过程中出现DOM重新渲染，特别是列表的最后项的v-if为false的时候，将直接重新渲染整个列表，导致运行变慢。

#### 解决v-if和v-for的在一起的方案

> - 将v-if提到v-for的父元素或者将列表渲染套在<template/>标签上并在<template/>上使用v-if。
> - 不使用v-if，使用计算属性过滤掉列表为false的项再使用v-for进行渲染

```vue
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

### 动态参数

在绑定指令的时候，可以使用方括号实现动态绑定动态参数

```vue
<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>

```

### 事件修饰符

.prevent：阻止事件默认行为

.stop:阻止事件冒泡

.once：执行一次

```vue
<form v-on:submit.prevent="onSubmit">...</form>
```

### v-for列表渲染

使用v-for渲染列表，一定要绑定key，可以的值最好是数据中唯一值，尽量不要用index，如果使用index，如果要对列表进行增加和删除操作，会导致数据和列表不对应。

`v-for` 可以用来循环渲染`<template>` 中的一段包含多个元素的内容

```vue
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

组件使用v-for：尽量在组件内部使用而不是在组件上使用



## 模板语法

### 插值

{{}}：双大括号表达式。大括号表达式内只支持单个语句而不支持多个语法。

## 计算属性和监听器

computed和watch的区别和联系

联系：都是基于watcher实现的，computed能实现的，watch一定能事项

区别：

- computed是多对一的关系，多个值得变化作用于一个值，watch是一对多的关系，
- computed有缓存功能而watch没有。
- watch能够监听对象内部的变化而computed不能。

## 绑定class和style

### 绑定class

```vue
//对象方式
<div v-bind:class="{ active: isActive }"></div>
//数组方式
<div v-bind:class="[activeClass, errorClass]"></div>


```

### 绑定style

```vue
//内联方式
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
//对象方式
<div v-bind:style="styleObject"></div>
    styleObject: {
        color: 'red',
        fontSize: '13px'
      }
//数组方式
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

多重值

```vue
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

## 数组更新检测

vue无法检测对象内部的变化，因此vue封装了数组的方法，用于实现其响应式。

## 事件处理

使用向方法传入一个$event就可以使用event事件的方法和属性。

# 组件

## 模板组件

```vue
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

组件的data必须是一个函数，因为组件的data是一个对象的话，由于对象是引用，指向的都是同一个地址，这会导致组件的data会指向vue实例的data，导致命名污染，定义一个函数的时候，放回的是一个对象，也就是每个实例组件都有自己的data，这样不会导致组件之间相互影响，便于组件的复用。

## 父组件向子组件传值

### props属性

props用于子组件接收父组件传入的值。

### attrs属性

如果向子组件上绑定属性，如果没有使用props接收，将会挂载在attrs实例上。

### refs

获取元素实例

### provide：注入

父：

```js
provide() {
        return { provideName: provideValue };
    },
```

子：

```
inject: ['provideName'],
```



## 子组件向父组件转值

### $emit 

表示出发子组件上的方法，该方法定义在父组件内

v-model的实质是$emit和props的组合，v-model的值表示向组件内传入的值，v-model会渲染出一个input事件挂载在组组件上，通过该input可以出发input方法，同时将v-model的值作为参数即可。

### 

### $parent

子组件获取父组件的实例

获取子组件的实例

## 兄弟之间，祖先后代之间

### eventBus

main.js

```
Vue.prototype.$bus=new Vue()
```

任意组件

```
this.$bus.$on('changeBus', function() {
           console.log('bus');
            });
```

使用

```js
this.$bus.$emit('changeBus');
```

## 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

vue不建议直接修改子组件的props值，可以使用计算属性或者在data中将props赋值给别的变量。当父组件转入子组件的是一个对象或者数组的时候，修改子组件的props值，直接影响到父组件的数据（浅克隆）

### 组件继承

inheritAttrs: false

### 同步更新.sync

vue 修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定。注意带有 `.sync` 修饰符的 `v-bind` **不能**和表达式一起使用 .

### 缓存

<keep-alive>：用于动态组件和路由组件的缓存

# 重点API

## 全局API

### Vue.extend( options )

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。`data` 选项是特例，需要注意 - 在 `Vue.extend()` 中它必须是函数

```vue
<div id="mount-point"></div>
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
```

### Vue.nextTick( [callback, context\] )

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

```js
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick()
  .then(function () {
    // DOM 更新了
  })
```

### Vue.set( target, propertyName/index, value )

用于对象新增属性

注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。

# vue2风格

style使用scope之后，尽量别用元素选择器。

# 重点总结



## 组件间通信

### 父组件向子组件传值：

props / v-slot / $parent / provide / inject

### 子组件向父组件传值：

$refs  / $emit / $children / $root / $attrs / $listener / eventBus

### 跨级别传值：

eventBus / vuex / $root





