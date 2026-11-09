# AxisTitle.Text

返回或设置指定对象中的文本。 **String** 类型，可读/写。



## 语法

express.**Text**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动文档中第一张内嵌图表的分类轴标题文本。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlCategory)
        axis.HasTitle = true
        axis.AxisTitle.Text = "Month"
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴标题的文本。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Text)
}
```
