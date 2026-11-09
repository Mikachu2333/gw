# Trendline.Index

返回对象在其同类对象所组成的集合内的索引号。只读 **Long** 类型。



## 语法

express.**Index**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的第二个数据系列的第一条趋势线的索引。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    alert(trendline.Index)
}
```


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的最后一条趋势线的索引。*/
function test() {
    let trendlines = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines()
    alert(trendlines.Item(trendlines.Count).Index)
}
```
