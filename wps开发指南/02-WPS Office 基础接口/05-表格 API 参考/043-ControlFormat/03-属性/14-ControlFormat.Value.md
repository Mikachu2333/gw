# ControlFormat.Value

返回或设置一个 **Long** 值，它代表指定的控件格式的值。



## 语法

express.**Value**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将第一张工作表的第一个形状（组合框）的 Value 属性设置为1。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ControlFormat.Value = 1
}
```


```JavaScript
/*本示例显示活动工作表的第二个形状（列表框）选定的数据项的编号。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ControlFormat.Value)
}
```
