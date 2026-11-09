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
/*本示例重置第一个演示文稿的第一张幻灯片上第一张图表的所有颜色元素格式。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    chart.ClearToMatchColorStyle()
}
```


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片的第二张图表标题为“test”，则重置图表的所有颜色元素格式。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(2).Chart
    if (chart.Title == "test") {
        chart.ClearToMatchColorStyle()
    }
}
```
