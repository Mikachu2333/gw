# ShapeRange.SoftEdge

返回指定形状区域的 **SoftEdgeFormat** 对象，该对象包含形状区域的柔化边缘格式设置属性。只读。



## 语法

express.**SoftEdge**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

SoftEdgeFormat

## 示例


```JavaScript
/*本示例先在第一张工作表创建shpRange对象，然后将对象的柔化边缘效果设置为5磅。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.SoftEdge.Radius = 5
}
```


```JavaScript
/*本示例将活动工作表的所有形状的柔化边缘效果设置为10磅。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.SoftEdge.Radius = 10
}
```
