# Window.ActivatePrevious

激活指定窗口，并将其移到窗口 z-次序的末尾。



## 语法

express.**ActivatePrevious()**

express   一个代表 **Window** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例激活窗口 z-次序末尾的窗口。*/
function test() {
    ActiveWindow.ActivatePrevious()
}
```


```JavaScript
/*此示例激活第一个窗口 z-次序末尾的窗口。*/
function test() {
    Windows.Item(1).ActivatePrevious()
}
```
