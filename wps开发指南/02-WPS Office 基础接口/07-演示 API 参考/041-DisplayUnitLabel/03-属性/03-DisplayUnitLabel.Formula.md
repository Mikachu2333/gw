# DisplayUnitLabel.Formula

使用 A1 样式表示法返回或设置对象的公式。可读写。



## 语法

express.**Formula**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的公式（以 A1 样式表示）。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Formula = "example1"
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的公式（以 A1 样式表示）。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Formula)
}
```
