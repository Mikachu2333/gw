# ControlFormat.ListIndex

返回或设置列表框或组合框中当前选定项的索引号。 **Long** 类型，可读写。



## 语法

express.**ListIndex**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


不能将该属性应用于多选列表框。



## 示例


```JavaScript
/*本示例删除列表框中选定的数据项。如果 `Shapes.Item(2)` 代表的不是列表框，则本示例将无效。*/
function test() {
    let controlFormat = Worksheets.Item(1).Shapes.Item(2).ControlFormat
    controlFormat.RemoveItem(controlFormat.ListIndex)
}
```


```JavaScript
/*本示例显示活动工作表的第一个形状（列表框）当前选定项的索引号。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    alert(shape.ControlFormat.ListIndex)
}
```
