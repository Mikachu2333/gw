# ChartTitle.Orientation

返回或设置文本方向。可读/写 **Long** 类型。



## 语法

express.**Orientation**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

any

## 说明


该属性的值可以是介于 –90 至 90 度之间的整数或 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/XlOrientation)** 常量之一。



## 示例


```JavaScript
/*本示例将活动文档中第一张图表的标题文本方向值设置为45度。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartTitle.Orientation = 45
}
```


```JavaScript
/*本示例将活动文档中第一张图表的标题文本方向设置为 xlDownward，并显示。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartTitle.Orientation = xlDownward
    alert("图表标题的文本方向值为：" + chart.ChartTitle.Orientation)
}
```
