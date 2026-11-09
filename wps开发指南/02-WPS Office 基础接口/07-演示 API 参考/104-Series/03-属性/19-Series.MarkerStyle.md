# Series.MarkerStyle

返回或设置折线图、散点图或雷达图中数据点或系列的数据标记样式。可读/写 **[XlMarkerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlMarkerStyle)** 。



## 语法

express.**MarkerStyle**

express   一个代表 **Series** 对象的变量。

## 类型

XlMarkerStyle

## 说明


 **MarkerStyle** 可以是以下 **XlMarkerStyle** 常量之一：

* **xlMarkerStyleAutomatic** ：自动设置标记。
* **xlMarkerStyleCircle** ：圆形标记。
* **xlMarkerStyleDash** ：长条形标记。
* **xlMarkerStyleDiamond** ：菱形标记。
* **xlMarkerStyleDot** ：短条形标记。
* **xlMarkerStyleNone** ：无标记。
* **xlMarkerStylePicture** ：图片标记。
* **xlMarkerStylePlus** ：带加号的方形标记。
* **xlMarkerStyleSquare** ：方形标记。
* **xlMarkerStyleStar** ：带星号的方形标记。
* **xlMarkerStyleTriangle** ：三角形标记。
* **xlMarkerStyleX** ：带 X 记号的方形标记。



## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个图表的第一个系列的标记样式。应在二维折线图上运行该示例。*/
function test() {
    let inlineShape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).MarkerStyle = xlMarkerStyleCircle
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的数据标记样式是否为无标记。应在二维折线图上运行该示例*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(3).MarkerStyle == xlMarkerStyleNone)
}
```
