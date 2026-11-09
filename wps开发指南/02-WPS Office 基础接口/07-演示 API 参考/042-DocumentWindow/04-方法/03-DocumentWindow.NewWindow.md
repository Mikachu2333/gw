# DocumentWindow.NewWindow

打开一个包含指定窗口中所显示文档的新窗口。返回一个代表新窗口的 **DocumentWindow** 对象。



## 语法

express.**NewWindow()**

express   一个代表 **DocumentWindow** 对象的变量。

## 返回值

DocumentWindow

## 示例


```JavaScript
/*本示例创建一个与当前窗口有相同内容的新窗口（同时激活新窗口），并返回到原窗口。*/
function test() {
    let oldW = Application.ActiveWindow
    let newW = oldW.NewWindow()
    oldW.Activate()
}
```


```JavaScript
/*本示例创建一个与第一文档窗口有相同内容的新窗口（同时激活新窗口），并将新窗口切换到幻灯片浏览视图。*/
function test() {
    let oldW = Application.Windows.Item(1)
    let newW = oldW.NewWindow()
    if (newW.ViewType == ppViewNormal) {
        newW.ViewType = ppViewSlideSorter
    }
}
```
