# DisplayUnitLabel.Left

以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中数值轴上的单位标签左边缘到图表区左边缘的距离。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Left)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签左边缘到图表区左边缘的距离设置为10磅。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Left = 10
}
```
