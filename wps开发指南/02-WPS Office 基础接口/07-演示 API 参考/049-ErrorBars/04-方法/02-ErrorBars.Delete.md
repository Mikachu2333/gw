# ErrorBars.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **ErrorBars** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的第二个系列的误差线。*/
function test() {
    let errorBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).ErrorBars
    errorBars.Delete()
}
```


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片中第一张图表的第一个系列的误差线边框的粗细为 xlMedium，则删除该误差线。*/
function test() {
    let errorBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    if (errorBars.Border.Weight == xlMedium) {
        errorBars.Delete()
    }
}
```
