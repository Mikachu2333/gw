# AxisTitle.ReadingOrder

返回或设置指定对象的阅读次序。可为以下常量之一： **xlRTL** （从右到左）、 **xlLTR** （从左到右）或 **xlContext** 。 **Long** 类型，可读写。



## 语法

express.**ReadingOrder**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中图表的分类轴标题的阅读次序设置为从右到左。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.ReadingOrder = xlRTL
}
```


```JavaScript
/*本示例判断如果工作表 Sheet1 中第一张图表的数值轴标题为可见，则将该标题的阅读次序设置为从左到右。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    if (axis.HasTitle) {
        axis.AxisTitle.ReadingOrder = xlLTR
    }
}
```
