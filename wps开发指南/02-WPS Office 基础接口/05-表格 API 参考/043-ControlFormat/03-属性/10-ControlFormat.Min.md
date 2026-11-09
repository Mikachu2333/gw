# ControlFormat.Min

返回或设置滚动条或微调控制项区域的最小值。滚动条或微调控制项的值不会小于指定的最小值。可读写 **Long** 类型。



## 语法

express.**Min**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **Min** 属性的值必须小于 **[Max](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ControlFormat/member/Max)** 属性的值。



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
/*本示例显示活动工作表的第三个形状（滚动条）的最小值。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ControlFormat.Min)
}
```
