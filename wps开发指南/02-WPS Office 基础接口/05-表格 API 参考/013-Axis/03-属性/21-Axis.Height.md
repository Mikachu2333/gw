# Axis.Height

返回一个 **Double** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的数值坐标轴的高度。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axis.Height)
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的分类坐标轴的高度。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    alert(axis.Height)
}
```
