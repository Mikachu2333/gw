# ErrorBars.EndStyle

返回或设置误差线的末端样式。可读/写 **XlEndStyleCap** 类型。



## 语法

express.**EndStyle**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

XlEndStyleCap

## 说明


该属性的值可以是以下 **[XlEndStyleCap](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlEndStyleCap)** 常量之一：

* **xlCap** 
* **xlNoCap** 



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的第一个系列的误差线的末端样式。应在第一个系列有 Y 误差线的二维折线图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).ErrorBars.EndStyle = xlCap
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个系列的误差线的末端样式是否为 xlNoCap。*/
function test() {
    let errorBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).ErrorBars
    alert(errorBars.EndStyle == xlNoCap)
}
```
