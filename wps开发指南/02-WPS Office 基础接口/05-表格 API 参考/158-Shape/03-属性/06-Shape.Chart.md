# Shape.Chart

返回 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，该对象代表形状中包含的图表。只读。



## 语法

express.**Chart**

express   一个代表 **Shape** 对象的变量。

## 类型

Chart

## 示例


```JavaScript
/*本示例将活动工作表上第一个形状的标题设置为"销售数据"。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    let chart = shape.Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "销售数据"
}
```


```JavaScript
/*本示例将第一张工作表上的第一个形状的X轴标题设置为"月份"。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    let chart = shape.Chart
    chart.Axes(xlCategory).HasTitle = true
    chart.Axes(xlCategory).AxisTitle.Text = "月份"
}
```
