# AxisTitle.Width

返回对象的宽度（以磅为单位）。只读。



## 语法

express.**Width**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的分类轴标题的宽度。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    alert(`分类轴标题的宽度为 ${axistitle.Width} 磅`)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的数值轴标题的宽度是否为 55.6 磅。*/
function test() {
    let axistitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).AxisTitle
    alert(axistitle.Width == 55.6)
}
```
