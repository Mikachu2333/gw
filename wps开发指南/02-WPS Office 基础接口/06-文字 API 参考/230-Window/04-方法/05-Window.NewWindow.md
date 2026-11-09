# Window.NewWindow

打开一个新窗口，该窗口与指定窗口显示同一个文档。返回一个 **Window** 对象。



## 语法

express.**NewWindow()**

express   一个代表 **Window** 对象的变量。

## 返回值

Window

## 说明


当多个窗口打开同一个文档时，将在窗口标题中显示一个冒号（:）和一个数字。`ActiveDocument.ActiveWindow.NewWindow()` 和 `Application.NewWindow()`在功能上是等效的。



## 示例


```JavaScript
/*本示例在为 Document1 打开一个新窗口之前和之后各发布一条消息，以指示现存窗口的数目。*/
function test() {
    alert(`${Windows.Count} windows open`)
    Windows.Item("Document1").NewWindow()
    alert(`${Windows.Count} windows open`)
}
```


```JavaScript
/*本示例打开一个新窗口并显示标题。*/
function test() {
    alert(ActiveDocument.ActiveWindow.NewWindow().Caption)
}
```
