# ChartFont.Name

返回或设置对象的名称。可读/写 **String** 类型。



## 语法

express.**Name**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的分类轴标题的字体名称。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes(1)
    if (shape.HasChart) {
        alert(shape.Chart.Axes(xlCategory).AxisTitle.Font.Name)
    }
}
```


```JavaScript
/*本示例设置第一篇演示文稿的第一张幻灯片上第一个图表的第二个图例项的字体名称。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    shape.Chart.Legend.LegendEntries(2).Font.Name = "黑体"
}
```
