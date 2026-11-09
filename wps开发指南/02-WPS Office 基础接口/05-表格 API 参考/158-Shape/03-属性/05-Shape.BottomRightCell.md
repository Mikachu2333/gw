# Shape.BottomRightCell

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于该对象右下角下方的单元格。只读。



## 语法

express.**BottomRightCell**

express   一个代表 **Shape** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示第一张工作表中第一个形状右下角下的单元格的值。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    alert(shapes.Item(1).BottomRightCell.Value2)
}
```


```JavaScript
/*本示例显示活动工作表中第一个形状右下角下的单元格的地址，将形状高度缩小至一半，并再次显示形状右下角下的单元格的地址。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let range = shapes.Item(1).BottomRightCell
    alert(range.Address())
    shapes.Item(1).Height = shapes.Item(1).Height / 2
    let newRange = shapes.Item(1).BottomRightCell
    alert(newRange.Address())
}
```
