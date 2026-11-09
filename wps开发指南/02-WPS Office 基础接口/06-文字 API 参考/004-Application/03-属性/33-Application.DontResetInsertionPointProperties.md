# Application.DontResetInsertionPointProperties

返回或设置一个 **Boolean** 类型的值，该值代表 WPS 在运行其他代码后是否保持位于插入点位置的文本的格式属性。可读写。



## 语法

express.**DontResetInsertionPointProperties**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


有时，在运行其他 JavaScript 代码后，WPS 会丢失插入点的格式。如果发生这样的情况，则会给依赖屏幕读取器应用程序的用户造成困难。当用户的辅助应用程序执行看起来不相关的任务时，他们会丢失格式。当运行包含 WPS 对象模型中的属性或方法的其他代码时，此属性可防止 WPS 丢失或更改位于插入点位置的文本的格式。

除非明确需要使用此属性来纠正解决方案功能，否则不要使用此属性。



## 示例


```JavaScript
/*本示例设置 WPS 在运行其他代码后保持位于插入点位置的文本的格式属性。*/
function test() {
    Application.DontResetInsertionPointProperties = true
}
```


```JavaScript
/*本示例判断 WPS 在运行其他代码后是否保持位于插入点位置的文本的格式属性，并通知用户。*/
function test() {
    if (Application.DontResetInsertionPointProperties) {
        alert("保持位于插入点位置的文本的格式属性")
    } else {
        alert("未保持位于插入点位置的文本的格式属性")
    }
}
```
