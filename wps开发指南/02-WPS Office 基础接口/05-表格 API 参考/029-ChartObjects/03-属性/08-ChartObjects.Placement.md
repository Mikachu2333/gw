# ChartObjects.Placement

返回或设置一个包含 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 常量的 **Variant** 值，它代表对象附加到它所在的单元格的方式。



## 语法

express.**Placement**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例设置工作表 Sheet1 上所有图表大小固定，位置随单元格移动而变化。*/
function test() {
    let chartobjects = Application.Worksheets.Item("Sheet1").ChartObjects()
    chartobjects.Placement = xlMove
}
```


```JavaScript
/*本示例显示第一张工作表上所有图表是否大小和位置随单元格而变化。*/
function test() {
    let chartobjects = Application.Worksheets.Item(1).ChartObjects()
    alert(chartobjects.Placement == xlMoveAndSize)
}
```
