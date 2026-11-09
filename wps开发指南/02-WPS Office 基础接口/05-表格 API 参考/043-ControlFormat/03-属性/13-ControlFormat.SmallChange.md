# ControlFormat.SmallChange

返回或设置滚动条或微调框在滚动一行（当用户单击箭头）时的增量或减量。 **Long** 类型，可读写。



## 语法

express.**SmallChange**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例创建一个滚动条，并设置其链接单元格、最大值、最小值、大步长值和小步长值。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.AddFormControl(xlScrollBar, 10, 10, 10, 200)
    let controlFormat = shape.ControlFormat
    controlFormat.LinkedCell = "D1"
    controlFormat.Max = 100
    controlFormat.Min = 0
    controlFormat.LargeChange = 10
    controlFormat.SmallChange = 2
}
```


```JavaScript
/*本示例显示活动工作表的第三个形状（滚动条）的小步长值。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ControlFormat.SmallChange)
}
```
