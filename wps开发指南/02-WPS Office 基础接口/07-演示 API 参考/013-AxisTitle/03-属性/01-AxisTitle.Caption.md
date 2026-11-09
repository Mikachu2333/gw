# AxisTitle.Caption

返回或设置一个代表坐标轴标题文本的 **String** 值。



## 语法

express.**Caption**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的数值轴标题设置为“example”。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    axis.HasTitle = true
    axis.AxisTitle.Caption = 'example'
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第二张图表的分类轴标题设置为“Month”，并且显示。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    axis.HasTitle = true
    axis.AxisTitle.Caption = 'Month'
    alert(axis.AxisTitle.Caption)
}
```
