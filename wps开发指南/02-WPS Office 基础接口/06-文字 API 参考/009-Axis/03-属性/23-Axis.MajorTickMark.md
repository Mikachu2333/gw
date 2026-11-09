# Axis.MajorTickMark

返回或设置指定坐标轴的主刻度线类型。可读/写 **[XlTickMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickMark)** 。



## 语法

express.**MajorTickMark**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTickMark

## 说明


 **MajorTickMark** 可以设置为下列 **XlTickMark** 常量之一：

* **xlTickMarkInside** 
* **xlTickMarkOutside** 
* **xlTickMarkCross** 
* **xlTickMarkNone** 



## 示例


```JavaScript
/*本示例将活动文档中的第一张内嵌图表的数值轴主要刻度线设置为在轴外侧。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlValue).MajorTickMark = xlTickMarkOutside
    }
}
```


```JavaScript
/*本示例判断第一个文档上第一个形状中图表的类别轴的主要刻度线的类型，并通知用户。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    switch (axis.MajorTickMark) {
        case xlTickMarkCross:
            alert("主要刻度线跨轴")
            break
        case xlTickMarkInside:
            alert("主要刻度线在轴内")
            break
        case xlTickMarkNone:
            alert("无主要刻度线")
            break
        case xlTickMarkOutside:
            alert("主要刻度线在轴外")
            break
    }
}
```
