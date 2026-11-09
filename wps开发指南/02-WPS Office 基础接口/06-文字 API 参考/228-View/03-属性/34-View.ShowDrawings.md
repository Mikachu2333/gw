# View.ShowDrawings

如果在页面视图中显示由绘图工具创建的对象，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowDrawings**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动窗口切换到页面视图，并显示由绘图工具创建的对象。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.ShowDrawings = true
}
```


```JavaScript
/*本示例显示是否在第一个窗口的活动窗格的页面视图中展示由绘图工具创建的对象。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowDrawings)
}
```
