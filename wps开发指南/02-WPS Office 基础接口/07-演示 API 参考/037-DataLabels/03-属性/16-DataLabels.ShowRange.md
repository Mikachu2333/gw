# DataLabels.ShowRange

设置为 **True** 可显示指定图表的所有图表数据标签中的“ **单元格值** ”区域字段。设置为 **False** 可隐藏该字段。可读/写 **Boolean** 类型。



## 语法

express.**ShowRange**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表上第一个数据系列的数据标签的“来自单元格的值”区域字段设置为可见。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).DataLabels().ShowRange = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的数据标签的“来自单元格的值”区域字段是否可见。*/
function test() {
    let dataLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    alert(dataLabels.ShowRange)
}
```
