# ControlFormat.ListCount

返回列表框或者组合框中数据项的数目。如果列表中没有数据项，则返回 0（零）。 **Long** 类型，只读。



## 语法

express.**ListCount**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例对组合框进行调整，使其可以显示列表中的所有数据项。如果第一个形状不代表组合框，则本示例无效。*/
function test() {
    let controlFormat = Worksheets.Item(1).Shapes.Item(1).ControlFormat
    controlFormat.DropDownLines = controlFormat.ListCount
}
```


```JavaScript
/*本示例显示活动工作表的第二个形状（列表框）数据项的数目。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ControlFormat.ListCount)
}
```
