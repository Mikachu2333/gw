# Shape.Chart

返回当前 Shape 对象的 Chart 对象。只读。



## 语法

express.**Chart**

express   一个代表 **Shape** 对象的变量。

## 类型

Chart

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个形状中图表的标题设置为“销售数据”。*/
function test() {
    let shape = ActivePresentation.Slides(1).Shapes.Item(1)
    let chart = shape.Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "销售数据"
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上的第二个形状中的图表删除。*/
function test() {
    let shape = ActivePresentation.Slides(1).Shapes.Item(2)
    shape.Chart.Delete()
}
```
