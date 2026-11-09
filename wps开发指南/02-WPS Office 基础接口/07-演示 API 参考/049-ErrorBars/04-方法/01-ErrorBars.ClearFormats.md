# ErrorBars.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **ErrorBars** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除第一个演示文稿的第一张幻灯片上第一个图表的第二个系列的误差线的格式设置。*/
function test() {
    let errorBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).ErrorBars
    errorBars.ClearFormats()
}
```


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片中第一张图表的第一个系列的误差线边框的粗细为 xlMedium，则清除误差线的样式。*/
function test() {
    let errorBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    if (errorBars.Border.Weight == xlMedium) {
        errorBars.ClearFormats()
    }
}
```
