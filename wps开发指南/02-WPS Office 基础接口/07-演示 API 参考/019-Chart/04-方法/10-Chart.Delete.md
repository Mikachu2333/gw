# Chart.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片上第一个形状为图表，则删除该图表。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Delete()
    }
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片的第二个图表。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.Delete()
}
```
