# Window.ActivateNext

激活指定窗口，并将其移到窗口 z-次序的末尾。



## 语法

express.**ActivateNext()**

express   一个代表 **Window** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例将活动窗口移到窗口 z-次序的末尾。*/
function test() {
    Application.ActiveWindow.ActivateNext()
}
```


```JavaScript
/*本示例将第一个窗口移到窗口 z-次序的末尾。*/
function test() {
    Application.Windows.Item(1).ActivateNext()
}
```
