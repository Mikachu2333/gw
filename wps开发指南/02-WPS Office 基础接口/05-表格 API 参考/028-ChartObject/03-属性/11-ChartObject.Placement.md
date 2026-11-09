# ChartObject.Placement

返回或设置一个包含 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 常量的 **Variant** 值，它代表对象附加到它所在的单元格的方式。



## 语法

express.**Placement**

express   一个代表 **ChartObject** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例设置工作表 Sheet1 上第一个图表为可自由浮动（既不随下方单元格移动，也不随其改变大小）。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects(1)
    chartobject.Placement = xlFreeFloating
}
```


```JavaScript
/*本示例显示第一张工作表上图表 Chart 2 是否随单元格移动和调整大小而变化。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects("Chart 2")
    alert(chartobject.Placement == xlMoveAndSize)
}
```
