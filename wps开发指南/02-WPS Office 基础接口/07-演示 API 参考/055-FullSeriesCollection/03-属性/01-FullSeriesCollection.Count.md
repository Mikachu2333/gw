# FullSeriesCollection.Count

返回一个 **Long** 类型的值，该值表示集合中的完整序列的数目。只读。



## 语法

express.**Count**

express   一个代表 **FullSeriesCollection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个图表中系列的数量。*/
function test() {
    let fullSeriesCollection = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.FullSeriesCollection()
    alert(fullSeriesCollection.Count)
}
```
