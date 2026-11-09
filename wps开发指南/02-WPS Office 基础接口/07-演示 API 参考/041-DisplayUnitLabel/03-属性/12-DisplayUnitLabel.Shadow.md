# DisplayUnitLabel.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中数值轴上的单位标签是否有阴影。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Shadow)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的阴影设置为可见。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Shadow = true
}
```
