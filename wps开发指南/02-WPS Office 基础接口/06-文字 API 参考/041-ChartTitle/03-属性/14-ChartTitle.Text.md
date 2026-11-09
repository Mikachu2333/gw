# ChartTitle.Text

返回或设置指定对象中的文本。可读/写 **String** 类型。



## 语法

express.**Text**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的图表标题的文本。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.HasTitle = true
        inlineShape.Chart.ChartTitle.Text = "First Quarter Sales"
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表标题的文本。*/
function test() {
    let chartTitle = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Text)
}
```
