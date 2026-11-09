# DataLabels.Orientation

返回或设置文本方向。可读/写 **Long** 类型。



## 语法

express.**Orientation**

express   一个代表 **DataLabels** 对象的变量。

## 类型

any

## 说明


该属性的值可以是介于 –90 至 90 度之间的整数或 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/XlOrientation)** 常量之一。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的数据标签的文本方向是否为水平排列。*/
function test() {
    let dataLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels()
    alert(dataLabels.Orientation == xlHorizontal)
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的数据标签的文本方向。*/
function test() {
    let dataLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    dataLabels.Orientation = 30
}
```
