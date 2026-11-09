# Window.NewWindow

新建一个窗口或者创建指定窗口的副本。



## 语法

express.**NewWindow()**

express   一个代表 **Window** 对象的变量。

## 返回值

Window

## 示例


```JavaScript
/*此示例为当前窗口新建一个窗口副本。*/
function test() {
    Application.ActiveWindow.NewWindow()
}
```


```JavaScript
/*本示例新建一个当前窗口的窗口副本，并切换回到原窗口*/
function test() {
    let oldW = Application.ActiveWindow
    let newW = oldW.NewWindow()
    oldW.Activate()
}
```
