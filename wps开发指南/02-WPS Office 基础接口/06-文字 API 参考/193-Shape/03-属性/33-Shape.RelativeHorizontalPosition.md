# Shape.RelativeHorizontalPosition

指定形状的相对水平位置。可读写 **WdRelativeHorizontalPosition** 类型。



## 语法

express.**RelativeHorizontalPosition**

express   一个代表 **Shape** 对象的变量。

## 类型

WdRelativeHorizontalPosition

## 示例


```JavaScript
/*本示例重新定位活动文档中第二个形状对象。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(2)
    shape.Left = InchesToPoints(0.6)
    shape.RelativeHorizontalPosition = wdRelativeHorizontalPositionPage
}
```


```JavaScript
/*本示例显示第一个文档中第三个形状相对水平位置是否为 wdRelativeHorizontalPositionMargin。*/
function test() {
    alert(Documents.Item(1).Shapes.Item(3).RelativeHorizontalPosition == wdRelativeHorizontalPositionMargin)
}
```
