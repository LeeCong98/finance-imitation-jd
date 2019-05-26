# 基于Vue + Webpack的金融Demo

## 技术介绍

### 历史介绍

- 其实最早诞生的库，是Angular，他在12年发布并且占领了主流
- WebComponent是以后Web发展的主流

#### 组件化的思维方式

- 组件化不仅仅局限于JavaScript的的模块化，以及html的组件化

### 环境搭建

- 运行环境
  - Node 8.9
  - 你也可以使用nvm对Node的版本进行管理
- Git

- Chrome V62+

### NVM的安装

- 在安装NVM你需要卸载一切全局安装的包
- 卸载安装的Node.js
- 卸载NPM工具

- 安装教程
  - `<https://www.jianshu.com/p/d0e0935b150a>`
  - `<https://github.com/coreybutler/nvm-windows>`
- `这里没有安装`，但是需要这种切换Node开发版本的需求，你可以利用这点

### Babel

- babel文档
  - `https://babeljs.cn/docs/usage/polyfill/`
  - `https://www.imooc/com/article/21866`

#### 编辑器

- Amot
  - `https://atom.com`
- ESlint
  - `https://eslint.cn/docs/user-guide/configuring`

#### ES6

- `https://es6-features/org/#Constants`

#### Sass

- `https://sass.bootcss.com`

 #### Vue

- 直接官网

### 构造工具的对比

- webpack
  - webpack任务是作编译和打包
- gulp和grunt
  - gulp和grunt不做编译和打包
  - gulp和grunt本身编译还是调用Webpack
  - 主要是做任务管理的
- prepack
- rollup

#### 为什么需要构造工具

- 资源压缩
- 静态资源管理
- 模块化处理
  - ES6模块
  - common
  - require
- 编译处理
  - ES6语法

#### npm script

- npm scripts可以进行任务管理

#### MVVM对比

- Vue作者对于Vue的技术更新有更大的热情
- 使用Vue也是为了在前后端之间做平衡

#### 代码维护性和复用性的设计

- 需求变更
- 产品迭代
- Bug定位
- 新功能开发

### 技术选型分析

- 构造工具
  - webpack、grunt、gulp
- MVVM框架
  - Vue、React、angular
- 模块设计
- 自适应方案设计

- 代码维护以及复用性设计的思考

#### 工程构建安装

```git
git clone git@github.com:icongL/JDFinance-Project-init.git
```

### 项目初始化

```npm
npm install
```

- 安装调试
  - `cd Finance`
  - `npm i `
  - `git checkout Finance`
  - `npm start`
- 调试
  - 测试Eslint是否能够检测代码格式
    - 使用VScode打开并且安装了Eslint
    - 或者其他安装了Eslint格式检测编辑器的插件
  - 是否安装正确
    - 虽然有报错，但是不影响项目的运行(版本问题)
  - 是不是能编译检测代码
  - 修改后浏览器能不能更新
  - css模块化是不是正确
- CSS模块化
  - css module需要增加css-loader配置才能生效，具体可看文档的实现。
- 如果你使用的是style-loader，如果想让配置生效需要更换到文档所述的vue-style-loader（是vue-loader的一个依赖，无需单独安装）。

## CSS模块化设计

### 设计原则

- 可复用能继承可复用
- 周期迭代
  - 三个概念
    - 优秀的代码时模仿出来的
    - 优秀的代码时设计出来的
    - 优秀的代码时重构出来的
- CSS模块化设计方法
  - 布局  -> 页面 -> 功能 -> 业务

### 设计方法

- 先整体后部分颗粒化
- 先抽象后具体

### 在Vue中开启CSS模块

- ```scss
  <style module> // 需要vue-loader支持
  .header {
     color: black;
  }
  </style>
  // 如果你需要在页面中使用它，你应当从$style去取得一个类名
  <div class="$style.header"></div>
  ```

#### 注意问题

- scoped会使**标签选择器**渲染变慢很多倍

- css module前期进行不麻烦的配置，实现的效果比scoped css更优，这里推荐使用css module。

- #### css module父子组件问题

  - 在使用scss并开启css module时发现一个问题

  - 使用module的父组件会在没有使用module的子组件的所有根类上增加hash改变其类名，可能会造成子组件样式应用不上。

  - 如下是没有开启css module子组件的样式：

    ```css
    .comp{
        color: palegoldenrod;
        p{
          color: black;
        }
      }
      .t {
        color: teal;
      }
      div {
        color: yellow;
      }
    // 编译后
    .comp_2tR6GNan {
      color: palegoldenrod;
    }
    .comp_2tR6GNan p {
      color: black;
    }
    .t_39GmF73s {
      color: teal;
    }
    div {
      color: yellow;
    } 
    ```

  - 可以看到comp和t类都被修改了类名，如果根样式是**标签选择器**不会受影响。

- 所以在使用css module的父组件中使用的子组件也要开启css module。

- 标签选择器时scoped会严重降低性能，而使用class或id则不会。

#### 使用css module在keyframes中的问题

- 使用CSS modules处理动画animation的关键帧keyframes，动画名称必须先写。

- 这就是说，你不能用`sass`的`@import`直接导入一个原始的`css`文件，因为`sass`会认为你想用`css`原生的`@import`。
- 但是，因为`sass`的语法完全兼容`css`，所以你可以把原始的`css`文件改名为`.scss`后缀，即可直接导入了。

## js模块设计

- 如果你没有学习过软件工程的话，建议你可以尝试看一下软件工程文档

### 设计原则

- 高内聚低耦合
- 周期性迭代

## 组件设计

- 先整体后颗粒化
- 尽量抽象

## Router

- 创建分支
  - `git checkout -b brachName`
- 有关Vue的路由原理请看文档

## 通用性组件的开发

- 扩展性类（由使用者传递）
- 对于不同的部分善用slot
- 善用css模块化（继承和混合器）
- 增强一定的解耦性
- 封装通过用性组件

### 第三方组件

- vue-awesome-swiper

## 组件引用的技巧

#### 局部导入以及按需导入组件

- 注意一点，

- 如果你的导入css时发现包名不存在

```scss
@import "~swiper/dist/css/swiper.css"; // 加入 ~前缀符号；
```

### v-on的格式问题

- v-on的格式问题

  ```vue
  // 传值
  <com :notTickMessage="20000"></com>
  // 接收
  props: ['notTickMessage'], // 使用驼峰声明一个组件名，然后在html中使用中划线进行分割
  data () {
      return {
  		
      }
  }
  ```
  - 其实这种问题在vue中普遍出现，包括v-model、v-on这些数据绑定指定，但是这仅仅是在html中，因为html是不区分大小写的，你应当了解在template中不会出现这种情况，但是建议你都这样声明

### 封装组件中需要遍历数据

- 了解过的人应该知道这应该使用v-for + key的方式，你应当有一个默认值，使得组件能够单独运行

- 注意
  - 如果是用到了第三方插件，不要使用slot这种形式，否则需要第二次引第三方的库

### Vue-Router

#### to属性

- 表示目标路由的链接。当被点击后，内部会立刻把 `to` 的值传到 `router.push()`，所以这个值可以是一个字符串或者是描述目标位置的对象。

### Vue使用组件名的注意

- 组件名不能和标签名相同，即使是进行了大写，了解的人都知道，**HTML是不区分大小写的！**

  - 例如Header，不能直接使用Header -> Heador

    ```html
    <header></header> // 等价于Header,当然还是那句话，如果你是在template，那么Vue会帮助你处理这些，但是从标准化出发，你应当使用这种方式
    ```

### Viewport处理适应方案

- 这里直接使用GitHup上的成型适配方案 -viewport.js

- 具体原理看源码
- 以及hotcss
- 此时你会发现你的所有的单位都换算成了rem

### 行内块的处理

- 行内块的对齐也和文字大小有密切关系，了解的人知道，行内块一般是以文字基线对齐，而文字基线水平又是基于文字大小

## 首页轮播图

- 注意，如果你需要使用Vue的CSS模块化，你应当在每个模块化类的前面进行数据的绑定，否则你将无法使用这些类样式
  - `class="$style.className"`
- 在组件的开发中，理应减少随意新建组件，造成组件文件的繁多

- 注意
  - awesome-swiper是其swiper的组件版
  - 很多参数参考swiper4的文档

- 如果你需要修改轮播图的样式，不要修改单独抽离组件的样式，你应该修改的是应用组件的样式
- 