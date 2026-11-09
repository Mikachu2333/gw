# ChartGroup.SizeRepresents

返回或设置气泡图上气泡大小所代表的含义。可读/写 **Long** 类型。



## 语法

express.**SizeRepresents**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

XlSizeRepresents

## 说明


该属性可以为下列 **[XlSizeRepresents](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlSizeRepresents)** 常量之一：

* **xlSizeIsArea** 
* **xlSizeIsWidth** 



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个图表中第一个图表组中气泡的大小所表示的含义。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups(1).SizeRepresents = xlSizeIsWidth
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的气泡的大小是否表示为气泡的面积。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.SizeRepresents == xlSizeIsArea)
}
```
