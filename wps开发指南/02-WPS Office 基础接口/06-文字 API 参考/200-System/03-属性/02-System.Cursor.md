# System.Cursor

返回或设置指针的状态（形状）。可以是下列 **WdCursorType** 常量之一： **wdCursorIBeam** 、 **wdCursorNormal** 、 **wdCursorNorthwestArrow** 或 **wdCursorWait** 。 **Long** 类型，可读写。



## 语法

express.**Cursor**

express   一个代表 **System** 对象的变量。

## 类型

WdCursorType

## 示例


```JavaScript
/*此示例显示一条消息，然后将指针形状改变正在执行任务的形状。*/
function test() {
    alert("Please wait...")
    for (let i = 1; i <= 1000; i++) {
        Application.System.Cursor = wdCursorWait
    }
    alert("Task completed")
    Application.System.Cursor = wdCursorNormal
}
```


```JavaScript
/*本示例设置指针的状态。*/
function test() {
    Application.System.Cursor = wdCursorIBeam
}
```
