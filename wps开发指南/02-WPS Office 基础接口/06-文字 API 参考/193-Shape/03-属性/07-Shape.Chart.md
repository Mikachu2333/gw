# Shape.Chart

返回一个 **Chart** 对象，该对象代表文档中形状集合内的图表。只读。



## 语法

express.**Chart**

express   一个代表 **Shape** 对象的变量。

## 类型

Chart

## 示例


```JavaScript
/*本示例将活动文档上第一个形状中图表的标题设置为“销售数据”。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    let chart = shape.Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "销售数据"
}
```


```JavaScript
/*本示例将活动文档上第一个形状中的图表删除。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.Chart.Delete()
}
```
