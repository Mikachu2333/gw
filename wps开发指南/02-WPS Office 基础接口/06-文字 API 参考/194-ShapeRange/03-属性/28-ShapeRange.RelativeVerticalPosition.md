# ShapeRange.RelativeVerticalPosition

指定形状范围的相对垂直位置。可读写 **[WdRelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalPosition)** 类型。



## 语法

express.**RelativeVerticalPosition**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

WdRelativeVerticalPosition

## 示例


```JavaScript
/*本示例重新放置选定形状对象。*/
function test() {
    let shapeRange = Selection.ShapeRange
    shapeRange.Left = InchesToPoints(0.6)
    shapeRange.RelativeHorizontalPosition = wdRelativeHorizontalPositionPage
    shapeRange.Top = InchesToPoints(1)
    shapeRange.RelativeVerticalPosition = wdRelativeVerticalPositionParagraph
}
```


```JavaScript
/*本示例将活动文档上包含第一个和第二个形状的形状范围移动到距离内空白区顶部200磅的位置。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.Top = 200
    shapeRange.RelativeVerticalPosition = wdRelativeHorizontalPositionInnerMarginArea
}
```
