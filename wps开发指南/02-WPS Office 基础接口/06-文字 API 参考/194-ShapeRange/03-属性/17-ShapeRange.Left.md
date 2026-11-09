# ShapeRange.Left

返回或设置一个 **Single** 类型的值，该值代表指定形状范围的水平位置，以磅为单位。也可以是任何有效的 [WdShapePosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShapePosition)常量。可读写。



## 语法

express.**Left**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 说明


形状的位置是根据形状边框的左上角到形状锁定标记的相对距离进行计算的。 **RelativeHorizontalPosition** 属性控制锁定标记是沿字符、文本栏、页边距还是页面边缘放置。

对于包含多个形状的 **ShapeRange** 对象， **Left** 属性设置每个形状的水平位置。



## 示例


```JavaScript
/*本示例将活动文档中第一、第二个形状的水平位置设置为距离文本栏的左边缘 1 英寸。*/
function test() {
    let shapeRange = Application.ActiveDocument.Shapes.Range([1, 2])
    shapeRange.RelativeHorizontalPosition = wdRelativeHorizontalPositionColumn
    shapeRange.Left = InchesToPoints(1)
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状的高度，然后显示该形状的水平位置。*/
function test() {
    let shapeRange = Documents.Item(1).Shapes.Range([1])
    shapeRange.Height = 40
    alert(`形状的水平位置：${shapeRange.Left} 磅`)
}
```
