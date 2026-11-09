# Chart.ClearToMatchColorStyle

清除指定图表上不遵循应用于图表的颜色样式的所有颜色。



## 语法

express.**ClearToMatchColorStyle()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 说明


使用此方法将所有图表颜色格式重置为应用于图表的颜色样式。



## 示例


```JavaScript
/*本示例重置第一个文档上第一张图表的所有颜色元素格式。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    chart.ClearToMatchColorStyle()
}
```


```JavaScript
/*本示例重置活动文档上第一张图表的所有颜色元素格式。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes(1).Chart
    chart.ClearToMatchColorStyle()
}
```
