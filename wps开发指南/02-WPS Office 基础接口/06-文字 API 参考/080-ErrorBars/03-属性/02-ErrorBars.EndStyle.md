# ErrorBars.EndStyle

返回或设置误差线的末端样式。可读/写 **Long** 类型。



## 语法

express.**EndStyle**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

XlEndStyleCap

## 说明


该属性的值可以是下列 **[XlEndStyleCap](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlEndStyleCap)** 常量之一：

* **xlCap** 
* **xlNoCap** 



## 示例


```JavaScript
/*本示例设置活动文档中第一个图表的误差线的末端样式。应在第一个系列有 Y 误差线的二维折线图上运行该示例。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).ErrorBars.EndStyle = xlCap
    }
}
```


```JavaScript
/*本示例显示活动文档上第一个形状中图表的第一个系列的误差线的末端样式是否为 xlNoCap。*/
function test() {
    let errorBars = Application.ActiveDocument.Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    alert(errorBars.EndStyle == xlNoCap)
}
```
