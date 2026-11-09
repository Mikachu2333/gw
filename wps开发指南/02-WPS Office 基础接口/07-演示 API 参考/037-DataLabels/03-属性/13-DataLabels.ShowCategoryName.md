# DataLabels.ShowCategoryName

如果为 **True** ，则在图表中显示数据标签的分类名称。如果为 **False** ，则隐藏该名称。可读/写 **Boolean** 类型。



## 语法

express.**ShowCategoryName**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表上第一个数据系列的数据标签的分类名称设置为可见。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shapes.HasChart) {
        shapes.Chart.SeriesCollection(1).DataLabels().ShowCategoryName = true
    }
}
```


```JavaScript
/*本示例判断第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的数据标签的分类名称是否可见，并通知用户。*/
function test() {
    let dataLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).DataLabels()
    if (dataLabels.ShowCategoryName) {
        alert("数据标签的分类名称可见")
    } else {
        alert("数据标签的分类名称不可见")
    }
}
```
