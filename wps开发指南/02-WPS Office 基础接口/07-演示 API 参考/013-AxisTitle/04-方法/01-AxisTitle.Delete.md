# AxisTitle.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **AxisTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片中第一个图表的分类轴标题为可见，则删除该分类轴标题。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    if (axis.HasTitle) {
        axis.AxisTitle.Delete()
    }
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第二个图表的数值轴标题为“test”，则删除该标题。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    if (axisTitle.Caption == "test") {
        axisTitle.Delete()
    }
}
```
