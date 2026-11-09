# ShapeRange.Child

如果图形是子图形或位于图形区域的所有图形都是同一父图形的子图形，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。



## 语法

express.**Child**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示显示活动文档上第一个形状组中第二个形状是否为子形状。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Item(1).GroupItems.Range(2)
    alert(shapeRange.Child == msoTrue)
}
```


```JavaScript
/*本示例显示选中的形状是否为子形状。*/
function test() {
    alert(Selection.ShapeRange.Child == msoTrue)
}
```
