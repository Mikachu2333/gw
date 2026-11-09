# View.ShowTextBoundaries

如果在页面视图中显示页边距、文本列、对象和框架周围的虚线，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowTextBoundaries**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动窗口切换到页面视图，并显示文本边界线。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.ShowTextBoundaries = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否展示页边距、文本列、对象和框架周围的虚线。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowTextBoundaries)
}
```
