# Axis.Width

返回一个 **Double** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的数值轴的宽度。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axis.Width)
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的分类轴的宽度。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    alert(`分类轴的宽度：${axis.Width} 磅`)
}
```
