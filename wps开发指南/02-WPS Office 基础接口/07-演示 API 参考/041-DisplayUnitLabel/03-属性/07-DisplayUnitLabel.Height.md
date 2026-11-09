# DisplayUnitLabel.Height

返回对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的高度。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Height)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的高度。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Height + " 磅")
}
```
