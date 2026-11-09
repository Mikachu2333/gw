# DisplayUnitLabel.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Delete()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的标题为“百”，则删除该单位标签。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    if (displayUnitLabel.Caption == "百") {
        displayUnitLabel.Delete()
    }
}
```
