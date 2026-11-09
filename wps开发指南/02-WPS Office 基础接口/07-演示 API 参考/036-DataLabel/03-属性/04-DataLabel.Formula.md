# DataLabel.Formula

使用 A1 样式表示法返回或设置对象的公式。可读写。



## 语法

express.**Formula**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置以 A1 样式表示的活动演示文稿的第一张幻灯片中第一张图表的第二个数据系列的第一个数据标签的公式。*/
function test() {
    let dataLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels(1)
    dataLabel.Formula = "example1"
}
```


```JavaScript
/*本示例显示以 A1 样式表示的第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第二个数据标签的公式。*/
function test() {
    let dataLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels(2)
    alert(dataLabel.Formula)
}
```
