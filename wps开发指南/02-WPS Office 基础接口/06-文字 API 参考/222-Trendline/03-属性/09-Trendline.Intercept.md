# Trendline.Intercept

返回或设置趋势线与数值轴的交叉点。可读/写 **Double** 类型。



## 语法

express.**Intercept**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **[InterceptIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/InterceptIsAuto)** 属性设置为 **False** 。



## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的第一个系列的第一条趋势线与数值轴相交于 5。应在包含具有趋势线的单个序列的 2D 柱形图上运行示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Trendlines(1).Intercept = 5
    }
}
```


```JavaScript
/*此示例显示第一个文档上的第一个形状中图表的第二个数据系列的第一条趋势线与数值轴的交叉点。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    alert(trendline.Intercept)
}
```
