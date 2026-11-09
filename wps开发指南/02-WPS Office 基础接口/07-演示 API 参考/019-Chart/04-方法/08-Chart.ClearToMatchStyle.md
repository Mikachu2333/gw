# Chart.ClearToMatchStyle

清除图表元素格式以改为自动格式。



## 语法

express.**ClearToMatchStyle()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 说明


使用此方法将图表元素格式重置为自动格式。如果在图表上使用此方法，则将重置所有格式（包括替代项）。



## 示例


```JavaScript
/*本示例清除第一个演示文稿的第一张幻灯片上第一张图表的元素格式以改为自动格式。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes(1).Chart
    chart.ClearToMatchStyle()
}
```


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片上第二张图表的元素格式以改为自动格式。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(2).Chart
    chart.ClearToMatchStyle()
}
```
