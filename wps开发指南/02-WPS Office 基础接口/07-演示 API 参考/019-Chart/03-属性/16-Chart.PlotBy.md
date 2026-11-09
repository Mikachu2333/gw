# Chart.PlotBy

返回或设置列或行在图表中作为数据系列使用的方式。可读/写 **Long** 类型。



## 语法

express.**PlotBy**

express   一个代表 **Chart** 对象的变量。

## 类型

XlRowCol

## 说明


该属性的值可以是下列 **[XlRowCol](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlRowCol)** 常量之一：

* **xlColumns** 
* **xlRows** 

对于数据透视图，该属性是只读的，并且始终返回 **xlColumns** 。



## 示例


```JavaScript
/*本示例使活动演示文稿的第一张幻灯片的第一个图表按列绘制数据。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.PlotBy = xlColumns
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二张图表是否按行绘制数据。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    alert(chart.PlotBy == xlRows)
}
```
