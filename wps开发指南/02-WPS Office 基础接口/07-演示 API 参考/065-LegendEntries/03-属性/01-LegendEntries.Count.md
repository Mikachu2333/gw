# LegendEntries.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **LegendEntries** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的图例项数目。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries().Count)
}
```
