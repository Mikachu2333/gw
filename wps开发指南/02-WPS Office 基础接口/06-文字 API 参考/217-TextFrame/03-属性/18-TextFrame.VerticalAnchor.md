# TextFrame.VerticalAnchor

返回或设置一个 **MsoVerticalAnchor** 常量，该常量代表形状内文本的垂直对齐方式。可读写。



## 语法

express.**VerticalAnchor**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoVerticalAnchor

## 示例


```JavaScript
/*本示例设置所选形状中文本框的文本的垂直对齐方式。*/
function test() {
    let textFrame = Selection.ShapeRange.TextFrame
    textFrame.VerticalAnchor = msoAnchorMiddle
}
```


```JavaScript
/*本示例显示活动文档的第一个形状中文本框的文本的垂直对齐方式是否为msoAnchorTop。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(1).TextFrame
    alert(textFrame.VerticalAnchor == msoAnchorTop)
}
```
