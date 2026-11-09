# Workbook.ActiveChart

返回一个 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，它代表活动图表（嵌入式图表或图表工作表）。嵌入式图表在被选中或激活时被认为是活动的。当没有图表处于活动状态时，此属性返回 **null** 。



## 语法

express.**ActiveChart**

express   一个代表 **Workbook** 对象的变量。

## 类型

Chart

## 说明


如果不指定对象识别符，此属性返回活动工作簿中的活动图表。



## 示例


```JavaScript
/*此示例打开第一个窗口中活动图表的图例。*/
function test() {
    Windows.Item(1).ActiveChart.HasLegend = true
}
```


```JavaScript
/*本示例检查活动窗口中是否有图表被选中。*/
function test() {
    if (ActiveWindow.ActiveChart) {
        MsgBox(`活动图表名为 ${ActiveWindow.ActiveChart.Name}`)
    } else {
        MsgBox("活动窗口中未选中图表")
    }
}
```
