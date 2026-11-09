# ShapeRange.Duplicate

复制对象，并返回对新复制对象的引用。



## 语法

express.**Duplicate()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

ShapeRange

## 示例


```JavaScript
/*本示例复制第一张工作表中新建的ShapeRange对象并设置填充格式的前景色。*/
function test() {
    let duplicate = Application.Worksheets.Item(1).Shapes.Range([1, 2]).Duplicate()
    duplicate.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例复制活动工作表的所有形状。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Duplicate()
}
```
