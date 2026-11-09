# DisplayUnitLabel.Caption

返回或设置显示单位标签文本。可读/写 **String** 类型。



## 语法

express.**Caption**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动文档上第一个内嵌图表数值轴中单位标签的标题设置为“example”。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Caption = "example"
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表数值轴上单位标签的标题。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Caption)
}
```
