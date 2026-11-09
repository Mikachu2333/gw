# DataLabel.Width

返回或设置对象的宽度（以磅为单位）。可读写。



## 语法

express.**Width**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的第一张图表中第二个系列的第一个数据标签的宽度。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).DataLabels(1).Width)
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一张图表中第一个系列的第二个数据标签的宽度为20磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Chart.SeriesCollection(1).DataLabels(2).Width = 20
}
```
