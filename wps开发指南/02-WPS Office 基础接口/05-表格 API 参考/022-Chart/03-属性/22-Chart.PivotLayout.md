# Chart.PivotLayout

返回一个 **[PivotLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLayout/obj)** 对象，该对象表示数据透视表中字段的位置以及数据透视图中坐标轴的位置。只读。



## 语法

express.**PivotLayout**

express   一个代表 **Chart** 对象的变量。

## 类型

PivotLayout

## 说明


如果指定图表不是一个数据透视图，则该属性值为 null。



## 示例


```JavaScript
/*本示例新建一个工作表，并在该表中创建数据透视图Chart1中使用的所有数据透视表字段的名称列表。*/
function test() {
    let sheet = Application.Worksheets.Add()
    sheet.Activate()
    let intRow = 1
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    for (let i = 1; i <= chart.PivotLayout.PivotFields().Count; i++) {
        sheet.Cells.Item(intRow, 1).Value2 = chart.PivotLayout.PivotFields(i).Caption
        intRow++
    }
}
```


```JavaScript
/*本示例将名为 x 的字段作为图表工作表 Chart1 上数据透视图的行字段。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.PivotLayout.PivotFields("x").Orientation = xlRowField
}
```
