# Legend.Position

返回或设置图例在图表上的位置。可读/写 **[XlLegendPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlLegendPosition)** 。



## 语法

express.**Position**

express   一个代表 **Legend** 对象的变量。

## 类型

XlLegendPosition

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的图例移到图表的底部。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.Position = xlLegendPositionBottom
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的图例在图表上的位置是否为xlLegendPositionTop。*/
function test() {
    let legend = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend
    alert(legend.Position == xlLegendPositionTop)
}
```
