# ChartFont.Italic

如果字体样式为倾斜，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Italic**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的标题的字体设置为斜体。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.ChartTitle.Font.Italic = true
    }
}
```


```JavaScript
/*本示例显示活动文档上第一张图表的模拟运算表的字体是否为斜体。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes(1).Chart
    alert(chart.DataTable.Font.Italic)
}
```
