# ShapeRange.Chart

返回 **Chart** 对象，该对象代表形状区域中包含的图表。只读。



## 语法

express.**Chart**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

Chart

## 示例


```JavaScript
/*本示例将第一张工作表中新建的ShapeRange对象的图表标题设置为“销售数量”。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1])
    let chart = shpRange.Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "销售数量"
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象的图表类别坐标轴标题设置为“月份”。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([2])
    let chart = shpRange.Chart
    chart.Axes(xlCategory).HasTitle = true
    chart.Axes(xlCategory).AxisTitle.Text = "月份"
}
```
