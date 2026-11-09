# ShapeRange.TextFrame

返回一个 **TextFrame** 对象，它包含指定形状的对齐方式和定位属性。



## 语法

express.**TextFrame**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

TextFrame

## 示例


```JavaScript
/*本示例先在第一张工作表创建shpRange对象，将中文本框内的文本设置为两端对齐。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.TextFrame.HorizontalAlignment = xlHAlignJustify
}
```


```JavaScript
/*本示例重新设置活动工作表的所有文本框的边距。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.TextFrame.MarginBottom = 10
    Selection.ShapeRange.TextFrame.MarginLeft = 10
    Selection.ShapeRange.TextFrame.MarginRight = 10
    Selection.ShapeRange.TextFrame.MarginTop = 10
}
```
