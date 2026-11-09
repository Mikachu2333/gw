# ControlFormat.DropDownLines

返回或设置组合框中下拉区域中显示的列表行的数目。 **Long** 类型，可读写。



## 语法

express.**DropDownLines**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例创建一个组合框，并将其下拉部分设置为 10 行。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.AddFormControl(xlDropDown, 10, 10, 100, 10)
    shape.ControlFormat.DropDownLines = 10
}
```


```JavaScript
/*本示例显示活动工作表的第二个形状（组合框）中下拉区域中显示的列表行的数目。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ControlFormat.DropDownLines)
}
```
