# Window.StyleAreaWidth

该属性返回或设置样式区的宽度，以磅为单位。 **Single** 类型，可读写。



## 语法

express.**StyleAreaWidth**

express   一个代表 **Window** 对象的变量。

## 类型

number（float 精度）

## 说明


如果 **StyleAreaWidth** 属性值大于 0（零），则样式名显示在文本的左侧。在页面视图或 Web 版式视图中不显示样式区。



## 示例


```JavaScript
/*本示例将活动窗口切换至普通视图，并设置样式区宽度为 1 英寸。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdNormalView
    ActiveDocument.ActiveWindow.StyleAreaWidth = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示第一个文档活动窗口样式区的宽度。*/
function test() {
    alert(Documents.Item(1).ActiveWindow.StyleAreaWidth)
}
```
