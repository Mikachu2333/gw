# SeriesCollection.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **SeriesCollection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状的第一个图表中系列的数量。*/
function test() {
    let seriesCollection = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection()
    alert(seriesCollection.Count)
}
```
