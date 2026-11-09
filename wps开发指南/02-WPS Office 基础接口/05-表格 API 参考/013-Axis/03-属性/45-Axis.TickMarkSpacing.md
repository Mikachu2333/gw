# Axis.TickMarkSpacing

返回或设置刻度线之间的分类数或数据系列数。仅应用于分类轴和系列轴。可以是 1 到 31999 之间的一个数值。 **Long** 类型，可读写。



## 语法

express.**TickMarkSpacing**

express   一个代表 **Axis** 对象的变量。

## 类型

number（int4 精度）

## 说明


可用 **[MajorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MajorUnit)** 属性和 **[MinorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/MinorUnit)** 属性设置数值轴上的刻度线间距。



## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 中图表的分类轴上刻度线之间的分类数。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.TickMarkSpacing = 10
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的分类轴上刻度线之间的分类数是否为 5。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    alert(axis.TickMarkSpacing == 5)
}
```
