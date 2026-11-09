# AxisTitle.FormulaLocal

以用户语言使用 A1 样式引用返回或设置对象的公式。可读写。



## 语法

express.**FormulaLocal**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例以用户语言的 A1 样式设置活动演示文稿的第一张幻灯片中第一张图表的分类轴标题的公式。*/
function test() {
    let axisTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.FormulaLocal = "example"
}
```


```JavaScript
/*本示例显示以用户语言的 A1 样式表示的第一个演示文稿的第一张幻灯片上第二个图表的数值轴标题的公式。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.FormulaLocal)
}
```
