# Workbook.Charts

返回一个 **[Charts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/obj)** 集合，它代表指定工作簿中的所有图表工作表。



## 语法

express.**Charts**

express   一个代表 **Workbook** 对象的变量。

## 类型

Sheets

## 示例


```JavaScript
/*此示例删除活动工作簿中所有的图表工作表。若要使示例能够正常运行，则活动工作簿中必须存在图表工作表。*/
function test() {
    ActiveWorkbook.Charts.Delete()
}
```


```JavaScript
/*本示例显示第一张工作簿上图表工作表 Chart1 的图例，然后将图例的字体颜色设为蓝色。*/
function test() {
    let chart = Workbooks.Item(1).Charts.Item("Chart1")
    chart.HasLegend = true
    chart.Legend.Font.ColorIndex = 5
}
```
