# DisplayUnitLabel.Format

返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象。只读。



## 语法

express.**Format**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中数值轴上的单位标签背景色设置为绿色。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Format.Fill.BackColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*下例将 Sheet1 上的第一个图表数值轴上的单位标签线条宽度设置为2。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Format.Line.Weight = 2
}
```
