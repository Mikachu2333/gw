# Trendline.InterceptIsAuto

如果趋势线与数值轴的交叉点由回归分析自动确定，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**InterceptIsAuto**

express   一个代表 **Trendline** 对象的变量。

## 类型

boolean

## 说明


设置 **[Intercept](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Trendline/member/Intercept)** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的第一个系列的第一条趋势线与数值轴的交叉点由回归分析自动确定。应在包含具有趋势线的单个序列的 2D 柱形图上运行示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Trendlines(1).InterceptIsAuto = true
    }
}
```


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的第一条趋势线与数值轴的交叉点是否由回归分析自动确定。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Trendlines(1)
    alert(trendline.InterceptIsAuto)
}
```
