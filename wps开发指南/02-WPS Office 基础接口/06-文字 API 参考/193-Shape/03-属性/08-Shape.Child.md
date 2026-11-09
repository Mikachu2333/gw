# Shape.Child

如果图形是子图形或位于图形区域的所有图形都是同一父图形的子图形，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。



## 语法

express.**Child**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例选择绘图画布中的第一个图形，并且如果所选图形是一个子图形，用指定颜色填充图形。本示例假定活动文档中的第一个图形是包含多个图形的绘图画布。*/
function test() {
    //Select the first shape in the drawing canvas
    let shape = ActiveDocument.Shapes.Item(1).CanvasItems.Item(1)

    //Fill selected shape if it is a child shape
    if (shape.Child == msoTrue) {
        shape.Fill.ForeColor.RGB = RGB(100, 0, 200)
    } else {
        alert("This shape is not a child shape.")
    }
}
```


```JavaScript
/*本示例判断第一个文档的第二个形状的第二项单个图形是否为子形状。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(2).GroupItems.Item(2)
    alert(shape.Child == msoTrue)
}
```
