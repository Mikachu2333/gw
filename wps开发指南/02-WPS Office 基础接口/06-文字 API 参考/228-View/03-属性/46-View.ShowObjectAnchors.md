# View.ShowObjectAnchors

如果在可在页面视图中定位的项目附近显示对象锁定标记，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowObjectAnchors**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例给选定内容添加一个框架，将活动窗口切换到页面视图，并显示框架对象的锁定标记。*/
function test() {
    Selection.Frames.Add(Selection.Range).LockAnchor = true
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.ShowObjectAnchors = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格的页面视图中定位的项目附近是否展示对象锁定标记。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowObjectAnchors)
}
```
