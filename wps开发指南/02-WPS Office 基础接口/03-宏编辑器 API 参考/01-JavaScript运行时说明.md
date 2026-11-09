# JavaScript运行时说明 

---

 WPS宏编辑器集成了一个V8 引擎的 JavaScript 运行时，支持大部分ES6语法，因此宏编辑器支持JavaScript 标准内置对象，**注意**，JS内置对象和浏览器的内置对象是不同的，WPS宏编辑器集成的是JavaScript 运行时，而不是浏览器，因此WPS宏编辑器不支持浏览器的内置对象。具体API参见[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global%5FObjects) 。如以下代码输出圆周率，可以在WPS宏编辑器中执行： 

```javascript
function abcd()
{
	Console.log(Math.PI);
}
```

 使用过程中遇到的编译错误和语法错误具体原因和细节可以在 [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors) 上查看。
