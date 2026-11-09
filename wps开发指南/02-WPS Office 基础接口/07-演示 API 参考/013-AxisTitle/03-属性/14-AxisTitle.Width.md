# AxisTitle.Width

返回一个 **Double** 值，该值代表对象的宽度（以磅为单位）。只读。



## 语法

express.**Width**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的分类轴标题的宽度。*/
function test() {
    let axisTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    alert(`分类轴标题的宽度：${axisTitle.Width} 磅`)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第二个图表的数值轴标题的宽度是否大于 10 磅。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Width > 10)
}
```
