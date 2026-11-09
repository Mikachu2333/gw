# AxisTitle.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **AxisTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一个图表的分类轴标题。*/
function test() {
    let axisTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.Select()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第二个图表的数值轴标题的文本方向为90度，则选中该数值轴标题。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    if (axisTitle.Orientation == 90) {
        axisTitle.Select()
    }
}
```
