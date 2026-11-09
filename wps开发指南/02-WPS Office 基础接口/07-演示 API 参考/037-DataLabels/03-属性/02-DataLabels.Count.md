# DataLabels.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **DataLabels** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片中第一张图表的第一个数据系列的数据标签的数量。*/
function test() {
    let dataLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels()
    alert(dataLabels.Count)
}
```
