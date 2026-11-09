# Legend.LegendEntries

返回图例中的图例项集合。



## 语法

express.**LegendEntries(Index)**

express   一个代表 **Legend** 对象的变量。

## 返回值

一个代表图例中图例项的 **[LegendEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LegendEntries/obj)** 对象。

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的第一个图例项的字体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).Font.Name = "Arial"
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的图例的图例项的数量。*/
function test() {
    let legend = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend
    alert(legend.LegendEntries().Count)
}
```
