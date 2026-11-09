# DisplayUnitLabel.Text

返回或设置指定对象中的文本。可读/写 **String** 类型。



## 语法

express.**Text**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表中数值轴上的单位标签文本。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Text)
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的数值轴的单位标签的文本。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Text = "example"
}
```
