# DisplayUnitLabel.Text

返回或设置指定对象中的文本。可读/写 **String** 类型。



## 语法

express.**Text**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中数值轴上的单位标签文本。*/
function test() {
    let displayUnitLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Text)
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的文本。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Text = "example"
}
```
