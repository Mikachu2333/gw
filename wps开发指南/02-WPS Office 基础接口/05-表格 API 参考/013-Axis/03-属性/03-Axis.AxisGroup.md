# Axis.AxisGroup

返回指定轴的组。只读



## 语法

express.**AxisGroup**

express   一个代表 **Axis** 对象的变量。

## 类型

XlAxisGroup

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 的类别轴是否为主轴组。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    alert(axis.AxisGroup == xlPrimary)
}
```


```JavaScript
/*本示例判断工作表 Sheet1 中第一张图表的类别轴是否为主轴组，并通知用户。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    if (axis.AxisGroup == xlPrimary) {
        alert("类别轴是主轴组")
    } else if (axis.AxisGroup == xlSecondary) {
        alert("类别轴是辅助轴组")
    }
}
```
