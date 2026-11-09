# Shape.Left

返回或设置一个 **Single** 类型的值，该值代表指定形状或形状范围的水平位置（以磅为单位）。也可以是任何有效的 **WdShapePosition** 常量。可读写。



## 语法

express.**Left**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


形状的位置是根据形状边框的左上角到形状锁定标记的相对距离进行计算的。 **RelativeHorizontalPosition** 属性控制锁定标记是沿字符、文本栏、页边距还是页面边缘放置。



## 示例


```JavaScript
/*本示例将活动文档中第一个图形的水平位置设置为距页面的左边缘 1 英寸。*/
function test() {
    let shape = Application.ActiveDocument.Shapes.Item(1)
    shape.RelativeHorizontalPosition = wdRelativeHorizontalPositionPage
    shape.Left = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示选中形状的第一个形状的水平位置距页面的左边缘的距离，单位为磅。*/
function test() {
    let shape = Selection.ShapeRange.Item(1)
    shape.RelativeHorizontalPosition = wdRelativeHorizontalPositionPage
    alert(shape.Left)
}
```
