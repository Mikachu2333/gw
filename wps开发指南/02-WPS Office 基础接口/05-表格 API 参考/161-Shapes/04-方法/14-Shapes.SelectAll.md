# Shapes.SelectAll

选择指定的 **Shapes** 集合中的所有形状。



## 语法

express.**SelectAll()**

express   一个代表 **Shapes** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选择第一张工作表中的所有形状，并创建包含所有这些形状的 ShapeRange 集合。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.SelectAll()
    let sr = Application.Selection.ShapeRange
}
```


```JavaScript
/*本示例将活动工作表的所有形状的边框粗细设置为 8 磅，颜色为红色。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Line.Weight = 8
    Selection.ShapeRange.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
