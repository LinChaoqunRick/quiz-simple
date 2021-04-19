# JS 使用和基本编程

## 写代码

请完成以下文件中的编码需求：

- [查看 `clone.js`](./clone.js)
- [查看 `get-host.js`](./get-host.js)
- [查看 `get-sum.js`](./get-sum.js)

## 方法论

如果你有一定的开发经验，并且追求代码的质量。  
那么你一定知道一些实践技巧，简答 3 ～ 10 条即可。

例如：

> 面向对象编程，代码逻辑可以内聚。
> 禁止使用 var，不可变数据用 const 声明，可变数据用 let 声明。

答：
> 使用高阶函数如filter、map、reduce
> 避免使用闭包函数
> 避免毫无意义的命名，如：a,b...
> 避免全局变量。
> 变量名应该为名词,函数名以动词开始
> 删除DOM元素时删除对应的事件，避免内存泄漏

## 请问以下代码做了什么事情

```js
const getLoglevel = () => {
  return localStorage.loglevel ?? 'INFO';
};
```

答：
如果localStorage.loglevel为null、undefined，返回'INFO',否则返回localStorage.loglevel
