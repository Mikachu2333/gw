# Shape.Top

返回或设置指定形状或形状范围的垂直位置（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**Top**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


形状的位置是根据形状边框的左上角到形状锁定标记的相对距离进行计算的。 **RelativeVerticalPosition** 属性控制形状的锁定标记是沿行、段落、页边距还是页面边缘放置。

对于包含多个形状的 **ShapeRange** 对象， **Top** 属性设置每个形状的垂直位置。



## 示例


```JavaScript
/*本示例将活动文档中第一个形状的垂直位置设置为距页面顶部 1 英寸*/
function test() {
    let shape = Application.ActiveDocument.Shapes.Item(1)
    shape.RelativeVerticalPosition = wdRelativeVerticalPositionPage
    shape.Top = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示活动文档中第二个形状的垂直位置到页面顶部的距离（以磅为单位）。*/
function test() {
    let shape = Application.ActiveDocument.Shapes.Item(2)
    alert(shape.Top)
}
```
