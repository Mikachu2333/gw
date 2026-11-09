# ChartTitle.Formula

获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**Formula**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 说明


有关 A1 样式表示法的详细信息，请参阅操作方法：使用 A1 表示法引用单元格和区域。



## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表以 A1 样式表示标题的公式。*/
function test() {
    let chartTitle = ActiveDocument.InlineShapes(1).Chart.ChartTitle
    chartTitle.Formula = "example"
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表使用 A1 样式表示标题的公式。*/
function test() {
    let chartTitle = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Formula)
}
```
