# AxisTitle.Height

返回对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一张图表的分类轴标题的高度。*/
function test() {
    let axisTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    alert(`分类轴标题的高度：${axisTitle.Height} 磅`)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第二个图表的数值轴标题的高度是否为 14.8 磅。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Height == 14.8)
}
```
