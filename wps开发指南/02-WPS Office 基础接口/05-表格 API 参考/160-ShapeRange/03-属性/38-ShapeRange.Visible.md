# ShapeRange.Visible

返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例先在第一张工作表中创建shpRange对象，然后将该对象设置为不可见。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.Visible = msoFalse
}
```


```JavaScript
/*本示例将活动工作表中所有形状设置为可见。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Visible = msoTrue
}
```
