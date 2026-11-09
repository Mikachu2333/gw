# DisplayUnitLabel.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片上第一个图表中数值轴上的单位标签。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Select()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的名称为“DispUnitLabel ”，则选中该单位标签。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    if (displayUnitLabel.Name == "DispUnitLabel ") {
        displayUnitLabel.Select()
    }
}
```
