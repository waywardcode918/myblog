# css

## ## 基础

### 1.css选择器

通配符，元素选择器，类选择器，id选择器

属性选择器：[属性名=属性值]，组合选择器，后代选择器，子元素选择器，相邻兄弟选择器，通用兄弟选择器，伪类与伪元素选择器。

### 2.css的优先级

css的优先级由css的特殊性决定，特殊性值表述为4个部分，分别用逗号隔开。

```JavaScript
对于选择器中给定的ID属性值，加 0,1,0,0
对于选择器中给定的各个类属性，属性选择，或伪类，加 0,0,1,0
对于选择器中的给定的各个元素和伪元素，加0,0,0,1
通配符选择器的特殊性为0,0,0,0
结合符对选择器特殊性没有一点贡献
内联声明的特殊性都是1,0,0,0
继承没有特殊性
```

特殊性不会进位，只能综合看特殊性越大的越占优势。

### 3.重要声明

重要声明 ! important，没有特殊性，但是超过其他的声明

## ## css盒子模型

css将页面中所有的元素都设置成一一个个的矩形的盒子。将盒子设置成一个个矩形盒子之后，对页面的布局就变成了将不同的盒子摆放在不同的位置。

### 盒子的构成：外边距+边框+内边距+内容区构成

$$
注意：边框要想样式生效，需要同时设置三个样式style，color，width
$$
### 盒子模型分为两种：标准盒子模型和低版本IE盒子模型

- 标准盒子模型：盒子的width属性表示的是内容区的宽度
- 低版本IE盒子模型：盒子的width属性表示的是盒子可见区域的宽度。

### box-sizing：指定width为何种盒子模型标准

- border-box：指定width为盒子可见区域宽度
- content-box：指定width为盒子内容区的宽度
- padding-box：火狐增加支持过，后来被移除了

### 1，垂直外边距重叠
垂直方向相邻的两个外边距会发生重叠的现象：
取值规则：同时为正数的时候，取最大值；一正一负取两者之和；都为负数的时候，取绝对值最大。

父子元素外边距重叠：设置子元素的外边距时，会传递给父元素，导致外边距重叠

解决父子元素外边距重叠的方法：

- 开启BFC
- 不用外边距
- 不让他们相邻
- 使用伪元素隔离

## ## css布局规范

### 1.块级元素布局

#### 水平布局的规范

一个元素的全部子元素的水平方向的属性，必须满足：

> margin-left+border-left+padding-left+width+padding-right+ border-right+margin-right=父元素内容区的width

#### 过渡约束

 如果不满足水平布局规范，浏览器会根据相对于的情况对该等式进行约束，叫做过渡约束。

水平布局规范中：width，margin-left，margin-right可以设置成auto

垂直布局规范：没有强制要求要遵守某种规范

#### 垂直方向布局

在父元素不设置高度的时候，父元素默认高度等于子元素高度。在父元素设置高度的时候，子元素高度大于父元素，会出现子元素样式溢出。

#### overflow：处理元素溢出

```javascript
visible :默认值，子元素出现溢出，则会在父元素外面显示
hidden:将子元素溢出部分给隐藏掉；
scroll:添加滚动条
auto：根据需要生成滚动条，水平方向出现溢出，就生成水平方向，垂直方向出现溢出，就生成垂直方向；
overflow-x:单独处理水平方向
overflow-y:单独处理垂直方向
```

### 2.行内元素布局规范

行内元素不支持设置宽度和高度，原因是行内元素的宽和高是由内容区的内容决定的，不可以直接通过设置宽高来设置内容区的宽高。

行内元素可以设置padding，border和margin，垂直方向的padding，border和margin不会影响页面的布局。

- 设置行内元素的宽高：宽度：设置font-size间接设置其宽高。
- line-height属性设置行高

## ##盒子属性

### 1.转换元素类型

display：

> inline:将元素转换为行内元素
> block：将元素转换为块元素
> inline-block：将元素设置成行内块元素，既可以设置宽高又不独占一行（能不用尽量不用）
> table：将元素设置成一个表格，表格的主体是不占位置的。
> none：将元素不显示在页面中，位置也不会占了;

### 2.设置元素的显示状态

visibility：

> hidden：元素在页面隐藏不显示，但是占位置。
> visible:默认值，表示元素在页面正常显示。

### 3.盒子的尺寸

box-sizing用来设置盒子尺寸的计算方式

> content-box默认值，宽度和高度用来设置内容区的大小
> border-box：宽度和高度用来设置整个盒子可见框的大小

### 4.盒子的阴影和圆角

#### 阴影

  box-shadow用来设置元素的阴影效果，阴影不会影响页面布局。

        第一个值：水平偏移量 设置阴影的水平位置 正值向左偏移 负值向右偏移
    
        第二个值：垂直偏移量 设置阴影的垂直位置 正值向下偏移 负值向上偏移
    
        第三个值：模糊的模糊半径
    
        第四个值：背景颜色

#### 轮廓线

        outline：用于设置元素的轮廓线，用法和border一样。

#### 圆角

        border-radius：用于设置圆角，圆角设置的圆的半径大小
#### 层级关系

z-index:整数，值越大，层级越高。

## ##字体

### 字体相关样式

```
color：字体颜色
font-size：字体的大小
font-family：字体族（这是字体格式）
font-weight 字重 字体的加粗
font-style 字体的风格
```

> font：字重 字体的风格 字体大小/行高 字体族;(行高可以不写)

### 文字样式

#### text-align 文本的水平对齐
可选值：

```
left 文字左侧对齐
right 文字右对齐
center 文字居中对齐
justify 文字两端对齐
```


#### vertical-align 定义行内元素的基线相对于该元素所在行的基线的垂直对齐
可选值： 

```
   baseline 默认值 文字基线对齐
   top 顶部对齐
   bottom 底部对齐
   middle 居中对齐   
```

例如使用图片的时候，会和父元素有个缝，是因为img标签是行内标签，按照基线对齐。如果想要去掉这个缝，只要设置成不是基线对齐就可以了。   

#### text-decoration 设置文本修饰

```
可选值：
            none 什么都没有
            underline 下划线
            line-through 删除线
            overline 上划线
```

#### white-space 设置网页如何处理空白
 可选值：       

```
   normal 正常
   nowrap 不换行
   pre 保留空白
```

​            width: 200px;
​            white-space: nowrap;
​            overflow: hidden;
​            text-overflow: ellipsis;
​            必须设置以上者四个值，要不然 white-space会失效。

## ## 浮动 float

```
none：默认值，不浮动；
left：左浮动；
right：右浮动；
```

### 浮动布局

开启浮动之后，水平方向等式不在强制要求，开启浮动之后，如果父元素宽度不够容纳所有的浮动元素，容纳不了的子元素将不会浮动。

### 浮动的特点

        1）浮动元素会完全脱离文档流，不会占据文档流中的位置
        2）设置浮动以后元素会向父元素的左侧或者右侧移动
        3）浮动元素默认不会从父元素中移出（溢出时会溢出父元素）
        4）浮动元素中先左或者向右移动时，不会超过它前边的其他浮动元素
        5）如果浮动元素的上边是一个没有浮动的块元素，浮动元素就无法上移。
        6）当浏览器窗口调小，浮动一行无法容纳浮动元素时，会自动将浮动元素下移，
        7）浮动元素不会超过它上边浮动兄弟元素的高度，最多就是和他一样高（和他在一行）
### 浮动导致的问题：高度塌陷

导致高度塌陷的原因：父元素的高度默认被子元素高度撑开，父元素如果不设置高度而开启浮动，导致子元素脱离文档流，导致父元素高度丢失。

### 解决高度塌陷

        1）设置父元素的高度
        2）不使用浮动而是使用行内元素代替
        3）BFC（块级格式化环境或格式化上下文）：隐含元素
                ——开启BFC的元素不会被浮动元素所覆盖
               ——开启BFC的元素子元素外边距不会重叠
               ——开启BFC的元素可以包含浮动的子元素
        4)使用clear属性（最终方式）
### 开启BFC

    浮动元素，float 除 none 以外的值； 
    定位元素，position（absolute，fixed）； 
    display 为以下其中之一的值 inline-block，table-cell，table-caption； 
    overflow 除了 visible 以外的值（hidden，auto，scroll）；
### 清除浮动元素：clear

```
left：清除左边浮动元素对当前元素的影响        
right：清除右边元素对当前元素的影响
both：清除两侧元素中影响最大的元素的影响
```

设置清除浮动影响之后，浏览器会自动为元素指定一个上外边距，使其位置不受元素的影响。

```
.div1::after{
    /* 设置空内容，不占位置 */
    content: "";
    display: block;
    clear: both;
}
```

## ## 定位

### 定位的属性名为：position

    可选值为：
      -static：默认值，元素时静止的，没有开启定位
      -relative ：开启元素的相对定位   
      -absolute ：开启元素的绝对定位
      -fixed：开启元素的固定定位
      -sticky：开启元素的粘滞定位
开启定位之后，通过使用属性top，bottom，left以及right来实现对元素的位置摆放。

### 定位位置

relative ：相对与自身位置（左上角） 
absolute ：相对包含块；与最近开启定位的祖先元素，若都未开启定位，则相对与html进行定位
ixed：相对于视口定位
sticky：开启元素的粘滞定位

### 相对定位

相对定位的特点

    相对定位会提升元素的层级
    相对定位不会使得元素脱离文档流
    相对定位的定位元素原来的位置还存在。
    相对定位不会改变元素的性质，是块元素还是块元素，行内元素还是行内元素。
总结为一句话，开启相对定位，之后提高元素的层级，其自身的空间物理属性不变。

### 绝对定位

绝对定位的特点：

```
开启绝对定位的时候，元素会从文档流中脱离
绝对定位会改变元素属性，行内元素变成块元素，块的宽高被内容撑开。
绝对定位会使元素提高一个层级
```

脱离文档流，display变成block，提高层级

### 固定定位

特点和绝对定位一样

### 粘滞定位

特点和相对定位一样，只是达到某个值得时候，会固定住。

### 定位布局规范

开启定位之后，水平方向布局和垂直方向布局都需要遵循布局约束等式，而且水平方向多了left和right值。垂直方向多了top和bottom值

水平方向布局：

```
left+margin-left+border-left+padding-left+width+padding-right+ border-right+marginright+right=父元素内容区的width
```

垂直方向布局

```
top+margin-top+border-top+padding-top+height+padding-bottom+ border-bottom+margin-bottom+bottom=父元素内容区的height
```

## ## flex布局

​		中文名为弹性盒或者伸缩盒，是css的一种布局手段，主要是代替浮动来完成页面布局；flex可以使元素具有弹性，让元素可以跟页面的大小的改变而改变。设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

### flex基本概念

弹性容器（弹性盒）：开启了flex布局的元素叫做弹性容器

弹性项（弹性元素）：弹性容器的子元素（不是后代）

​		容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

主轴：弹性元素的子元素排列方向叫做主轴（由flex-direction属性决定）。

### 开启弹性布局

    disply：flex;设置块级元素为弹性容器。
    display：inline-flex：设置行内元素为弹性容器。
    Webkit 内核的浏览器，必须加上-webkit前缀。
    disply：-webkit-flex;设置块级元素为弹性容器。
    display：-webkit-inline-flex：设置行内元素为弹性容器。
### 弹性容器的属性

#### flex-direction：

​		元素的排列方向，同时水平的主轴方向是由该容器属性 flex-direction确定的。元素排列向那主轴就向那边指。

    row：元素从main start开始从左向右水平排列;
    row-reverse：元素从main star开始，从左向右水平排列开始，元素从右向左水平排列
    column：元素从cross start开始从上而下垂直排列;
    column-reverse：元素从cross start开始从下而上垂直排列;
#### flex-rawp

​		设置弹性元素是否在弹性容器中换行。

            nowrap:默认值，不换行。
    
            wrap:沿着主轴方向自动换行。
    
            wrap-reverse：沿着主轴的反方向自动换行。

#### flex-flow

​		flex-direction和 flex-rawp的简写属性，没有顺序要求。       

#### justify-content

​		如何分配空白空间（弹性元素如何排列）         

        flex-start：默认值，沿着主轴main start排列
        flex-end：沿着主轴main end排列
        center：弹性元素水平居中排列
        space-between：空白分布到等量元素两侧。
        space-around：空白分布到等量元素单侧。（实现效果是，弹性元素之间的距离以及两侧弹性元素距离父元素边框距离）
        space-between：空白均匀分布到元素之间。

#### align-items

表示元素在侧轴如何对齐

    flex-start：沿着cross start（起轴）对齐，不会被拉伸。
    flex-end：沿着cross end（终轴）对齐，不会被拉伸。
    center：弹性元素垂直居中排列
    baseline：沿着基线对齐（用的不多）
    stretch：默认值，将元素的长度设置为等同高度，元素高度不够会被拉伸。
#### align-content

    lex-start：默认值，沿着侧轴main start排列
    flex-end：沿着侧轴main end排列
    center：弹性元素垂直居中排列
    space-between：空白分布到等量元素两侧。
    space-around：空白分布到等量元素单侧。
    space-between：空白均匀分布到元素之间。
### 弹性项的属性

#### flex-grow

指定弹性元素的伸缩系数（当弹性容器有空间时，弹性元素如何伸缩）

    默认值是0，意思是有剩余空间也不进行分配。父元素的剩余空间会按照比例进行分配：例如两个弹性元素分别为1和2，弹性容器剩余空间长度为150px;   按照1:2的比例，一个元素可分得50，另一个元素可分得100.

#### flex-shrink

弹性元素的收缩系数。默认值是1，表示等比例收缩，取为零时，表示弹性元素不收缩。值越大，收缩的就越多。

#### flex-basis

指定的是元素在主轴上的基础长度，一般设置成auto就可以了。

            如果主轴是横向的，该值指定的是元素的宽度。
    
            如果主轴是纵向的，该值指定的是元素的高度。
    
            默认为auto，表示参考元素自身的高度和宽度。
    
            如果设置成一个值，就以此值为准。

#### flex

以上三个属性得劲简写，有顺序要求

            flex：flex-grow flex-shrink flex-basis;
    
            可选值：none
    
                    auto：一般选这个

#### order

    属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
## ## 背景

### 背景相关的样式

#### background-color 

设置背景颜色
                

 #### background-image 

设置背景图片 

可以同时设置背景图片和背景颜色，这样背景颜色将会成为图片的背景色景图片会自动在元素中平铺将元素铺满

如果背景的图片大于元素，将会一个部分背景无法完全显示会直接正常显示            

#### background-repeat 

用来设置背景的重复方式，可选值：

> repeat 默认值 ， 背景会沿着x轴 y轴双方向重复
> repeat-x 沿着x轴方向重复
> repeat-y 沿着y轴方向重复
> no-repeat 背景图片不重复

#### background-position

 用来设置背景图片的位置，设置方式：
通过 top left right bottom center 几个表示方位的词来设置背景图片的位置，使用方位词时必须要同时指定两个值，如果只写一个则第二个默认就是center，通过偏移量来指定背景图片的位置：水平方向的偏移量 垂直方向变量  

### 设置背景的范围

#### background-clip 

> border-box 默认值，背景会出现在边框的下边
> padding-box 背景不会出现在边框，只出现在内容区和内边距
> content-box 背景只会出现在内容区

#### background-origin 

背景图片的偏移量计算的原点

>  padding-box 默认值，background-position从内边距处开始计算
>  content-box 背景图片的偏移量从内容区处计算
>  border-box 背景图片的变量从边框处开始计算


#### background-size

设置背景图片的大小
                第一个值表示宽度 
                第二个值表示高度

                        - 如果只写一个，则第二个值默认是 auto
    
    cover 图片的比例不变，将元素铺满
    contain 图片比例不变，将图片在元素中完整显示
#### background-attachment
背景图片是否跟随元素移动，可选值：

> scroll 默认值 背景图片会跟随元素移动
> fixed 背景会固定在页面中，不会随元素移动

## 渐变

 线性渐变，颜色沿着一条直线发生变化

### linear-gradient()

linear-gradient(red,yellow) 红色在开头，黄色在结尾，中间是过渡区域

线性渐变的开头，我们可以指定一个渐变的方向

> to left
> to right
> to bottom
> to top
> deg deg表示度数
> turn 表示圈

渐变可以同时指定多个颜色，多个颜色默认情况下平均分布，也可以手动指定渐变的分布情况

### repeating-linear-gradient() 

可以平铺的线性渐变

>  background-image: linear-gradient(red,yellow,#bfa,orange); 
>  background-image: linear-gradient(red 50px,yellow 100px, green 120px, orange 200px); 
>  background-image: repeating-linear-gradient(to right ,red, yellow 50px);

径向渐变

radial-gradient() 径向渐变(放射性的效果) 
                 默认情况下径向渐变的形状根据元素的形状来计算的
                    正方形 --> 圆形
                    长方形 --> 椭圆形

我们也可以手动指定径向渐变的大小

> circle
> ellipse                    

也可以指定渐变的位置，语法：radial-gradient(大小 at 位置, 颜色 位置 ,颜色 位置 ,颜色 位置)
大小：

> circle 圆形
> ellipse 椭圆
> closest-side 近边    
> closest-corner 近角
> farthest-side 远边
> farthest-corner 远角

    位置：top right left center bottom    
## ## 动画

### 过渡

transition-property: 指定要执行过渡的属性

transition-duration: 指定过渡效果的持续时间

 transition-timing-function: 过渡的时序函数，指定过渡的执行的方式  
可选值：

> - ease 默认值，慢速开始，先加速，再减速
> - linear 匀速运动
> - ease-in 加速运动
> - ease-out 减速运动
> - ease-in-out 先加速 后减速
> - cubic-bezier() 来指定时序函数

 transition-delay: 过渡效果的延迟，等待一段时间后在执行过渡

transition： 可以同时设置过渡相关的所有属性，只有一个要求，如果要写延迟，则两个时间中第一个是持续时间，第二个是延迟

### 动画

设置动画效果，必须先要设置一个关键帧，关键帧设置了动画执行每一个步骤

关键帧设置：

```css
@keyframes test {
            /* from表示动画的开始位置 也可以使用 0% */
            from{
                margin-left: 0;
                background-color: orange;
            } 

            /* to动画的结束位置 也可以使用100%*/
            to{
                background-color: red;
                margin-left: 700px;
            }
        }
```

animation-name: 要对当前元素生效的关键帧的名字。

animation-duration: 动画的执行时间。

animation-delay:动画的延时

animation-iteration-count 动画执行的次数 
                可选值：

> - ​                    次数
> - ​                    infinite 无限执行

animation-direction：指定动画运行的方向，可选值：

> normal 默认值  从 from 向 to运行 每次都是这样 
>
> reverse 从 to 向 from 运行 每次都是这样 
>
> alternate 从 from 向 to运行 重复执行动画时反向执行
>
> alternate-reverse 从 to 向 from运行 重复执行动画时反向执行

animation-play-state: 设置动画的执行状态，可选值：

> running 默认值 动画执行
>
> paused 动画暂停

 animation-fill-mode: 动画的填充模式，可选值：

> none 默认值 动画执行完毕元素回到原来位置
>
> forwards 动画执行完毕元素会停止在动画结束的位置
>
> backwards 动画延时等待时，元素就会处于开始位置
>
> both 结合了forwards 和 backwards

 animation: 动画简写

```css
animation：test 2s 2 1s alternate;
```

## ## 变形

transform 用来设置元素的变形效果

transform-origin：形变原点，top，bottom，left，right

#### 平移：translate

- translateX() 沿着x轴方向平移
- translateY() 沿着y轴方向平移
- translateZ() 沿着z轴方向平移

```css
transform: translateY(-100px)
```

#### 旋转：rotate

- rotateX()：相对x轴旋转
- rotateY()：相对y轴旋转
- rotateZ()：相对z轴旋转

#### 缩放

- scaleX() 水平方向缩放
- scaleY() 垂直方向缩放
- scale() 双方向的缩放



## ## 重点难点

### 布局相关

圣杯布局和双飞翼布局

### BFC

BFC：块级格式化上下文，是一个独立的布局容器，决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用。

简单理解：BFC就是一个封闭的盒子，内部元素如何布局都不会影响到外部元素。

#### 开启BFC

```
根元素，即 html
float 的值不为none（默认）
overflow 的值不为 visible（默认）
display 的值为 inline-block、table-cell、table-caption
position 的值为 absolute 或 fixed
```

#### BFC 规定了内部的 Block Box 如何布局

- 内部的 Box 会在垂直方向上一个接一个放置。
- Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
- 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
- BFC 的区域不会与 float box 重叠。
- BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
- 计算 BFC 的高度时，浮动元素也会参与计算。

开启BFC的元素display为block

示例：

https://juejin.cn/post/6844903829931032589

### ### 样式继承

> 可继承的样式：font-size, font-family, color，ul，li，dl，dt，dd；
>
> 不可继承的样式：border, padding, margin, width, height

样式继承的规律：有关于自身属性的物理大小都不可以被继承，有关于自身内容属性可以被继承。

例如border是元素自身的边框，不可以被继承，color是元素内容文字的颜色，可以被继承。

### ### 水平垂直居中

#### 方式一：table-cell

```html
<div class="table-cell">
    <p>qq</p>
</div>
.table-cell {
	display: table-cell;
 	vertical-align: middle;
 	text-align: center;
 	width: 240px;
  	height: 180px;
  	border:1px solid #666;
}
```

#### 方式二：浮动元素

```html
<div class="outer">
    <span>我想居中显示</span>
</div>
<style>
    .outer{
        width:300px;
        height:300px;
        position:relative;
        background-color:#ccc;
    }
    span{
        float:left;
        position:absolute;
        backgroond-color:red;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
</style>

```

#### 方式三：绝对定位

```
border: 1px solid black;
position: absolute;
width: 200px;
height: 100px;
margin: auto;
left: 0;
right: 0; 
top:0;
bottom:0;
```

#### 水平垂直居中一个img标签

- 使用table-cell或者绝对定位（方式三）

### 画三角形的原理是什么？

元素的各个边框交汇的地方成一个斜线,通俗点就是元素的每个边框是一个梯形，要向画一个三角形，只需要将这个梯形的上底变成0就可以了。要想将每个上底变成0，只需要建width和height设置成0就可。

```css
div{
	height:0;
    width:0;
   	border-top: 40px solid transparent;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 40px solid #ff0000;	   	
}
```

### 满屏 品 字布局设计

#### 方式一

- 三块高宽是确定的；
- 上面那块用margin: 0 auto;居中；
- 下面两块用float或者inline-block不换行；
- 用margin调整位置使他们居中。

```html
<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
        html,body{
            height: 100%;/*此设置非常关键，因为默认的body，HTML高度为0，所以后面设置的div的高度无法用百分比显示*/
        }       
        .header{
            height:50%; /*此步结合html,body高度为100%，解决元素相对窗口的定位问题*/
            width: 50%;     
            background: orchid;           
            margin:0 auto;
        }
        .main{
            width: 100%;
            height: 50%;
        }
        .main .left,.main .right{
            float: left;/*采用float方式，对元素进行左右定位*/
            width:50%;/*此步解决元素相对窗口的定位问题*/
            height:100%;/*此步解决元素相对窗口的定位问题*/
            background: coral;
        }
        .main .right{
            background: mediumspringgreen;
        }
    </style>
</head>
<body>
    <div class="header"></div>
    <div class="main">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
</html>

```

#### 方式二

- 上面那块用margin: 0 auto;居中；
- 下面两块用position: relative不换行；
- 用position: absolute调整他们的位置；

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <title>满屏品字布局</title>
    <style type="text/css">
        body{  
          height: 100%;  
      }  
      .main {  
          position: fixed;  /*此步解决元素相对窗口的定位问题*/
          left: 0;  
          top: 0;  
          height: 100%;  
          width: 100%;  
      }  
      .wrapper-up {  
          height: 50%;  
      }  
      .wrapper-down {  
          height: 50%;  
          position: relative;  
      }  
      .div-square-up {  
          width: 50%;  
          margin: 0 auto;  
		  background-color: #DA70D6;
          height: 100%;  
          box-sizing: border-box;  
      }  
      .div-square-left {  
          position: absolute;  /*此步解决元素左右定位问题*/
          left: 0;  
          width: 50%;  
          height: 100%;  
          box-sizing: border-box;  
		  background-color: #00FA9A;
      }  
      .div-square-right {  
          position: absolute;   /*此步解决元素左右定位问题*/
          right: 0;  
          width: 50%;  
          height: 100%;  
          box-sizing: border-box; 
		  background-color: #FFC0CB;
      }  
    </style>
</head>
<body>
    <div class="main">  
         <div class="wrapper-up">  
           <div class="div-square-up"></div>  
         </div>  
         <div class="wrapper-down">  
           <div class="div-square-left"></div>  
           <div class="div-square-right"></div>  
         </div>  
    </div> 
</body>
</html>

```

### 为什么要初始化 CSS 样式

不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

css初始化的弊端：不利于SEO,因为不同的浏览器对标签的默认值可能不同，但设置成相同默认值的时候，浏览器解析会先按照自己的默认值解析，在解析初始化的样式，所以不利于SEO。

### visibility 的 collapse

#### visibility 属性 collaps 属性值是做什么

当一个元素的 `**visibility**` 属性被设置成 `**collapse**` 值后，对于一般的元素，它的表现跟 `**hidden**` 是一样的。但例外的是，如果这个元素是table相关的元素，例如table行，table group，table列，table column group，它的表现却跟 `**display: none**` 一样，也就是说，它们占用的空间也会释放。

#### visibility属性collaps属性在各个浏览器的效果

> - 在谷歌浏览器里，使用 `**collapse**` 值和使用 `**hidden**` 值没有什么区别。
> - 在火狐浏览器、Opera和IE11里，使用 `**collapse**` 值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。

### display:none 与 visibility:hidden 的区别是什么？

> - display : none， 隐藏对应的元素，在文档布局中不再分配空间（回流+重绘）
> - visibility:hideen， 隐藏对应的元素，在文档布局中仍保留原来的空间（重绘）

### css模块化

就是将页面的css样式进行拆分成不同的css文件，将公共样式统一存放在一个css文件，将不同的页面的css文件页拆分到不同的css文件，便于管理和维护。

### css优化



### 浏览器解析css

### 在网页中的应该使用奇数还是偶数的字体？为什么呢？

- 常用偶数号字体,但奇数号字体也没关系。
- UI设计师导出的设计稿一般都是偶数号字体。
- 偶数字号容易和页面其他标签的其他属性形成比例关系。
- Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px 时用的是小一号的点阵（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。

### margin和padding分别适合什么场景使用？

#### margin的使用场景

margin主要需要在border外侧添加空白时。空白处不需要背景（色）时，上下相连的两个盒子之间的空白以及调整两个盒子之间的距离。

#### padding的使用场景

- 需要在border内测添加空白时。
- 空白处需要背景（色）时。
- 上下相连的两个盒子之间的空白，希望等于两者之和时。如15px+20px的padding，将得到35px的空白。
- 调整子元素在父元素的位置

#### 兼容性问题

在IE5.x、IE6中，为float的盒子指定margin时，左侧margin可能会变成两倍的宽度。通过改用padding或指定盒子为display:inline可以解决。

### 元素竖向的百分比设定是相对于容器的高度吗？

当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

###  全屏滚动的原理是什么？用到了CSS的哪些属性？



### magin取负值的效果
https://www.cnblogs.com/xiaohuochai/p/5314289.html


