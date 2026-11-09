# Shape.RelativeVerticalPosition

指定形状的相对垂直位置。可读写 **WdRelativeVerticalPosition** 类型。



## 语法

express.**RelativeVerticalPosition**

express   一个代表 **Shape** 对象的变量。

## 类型

WdRelativeVerticalPosition

## 示例


```JavaScript
/*本示例重新定位活动文档中第一个形状对象。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.Left = InchesToPoints(0.6)
    shape.RelativeHorizontalPosition = wdRelativeHorizontalPositionPage
    shape.Top = InchesToPoints(1)
    shape.RelativeVerticalPosition = wdRelativeVerticalPositionParagraph
}
```


```JavaScript
/*本示例显示第一个文档中第三个形状相对垂直位置是否为 wdRelativeVerticalPositionLine。*/
function test() {
    alert(Documents.Item(1).Shapes.Item(3).RelativeVerticalPosition == wdRelativeVerticalPositionLine)
}
```
