# ErrorBars.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **ErrorBars** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片中第一个图表的第一个系列的误差线的名称为“S1E”，则选中该误差线。*/
function test() {
    let errorBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    if (errorBars.Name == "S1E") {
        errorBars.Select()
    }
}
```


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一个图表的第二个系列的误差线。*/
function test() {
    let errorBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).ErrorBars
    errorBars.Select()
}
```
