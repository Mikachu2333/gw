# DisplayUnitLabel.Caption

返回或设置坐标轴的显示单位标签文本。可读/写 **String** 类型。



## 语法

express.**Caption**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表中数值轴的单位标签的标题设置为“example”。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Caption = "example"
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表中数值轴的单位标签的标题。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Caption)
}
```
