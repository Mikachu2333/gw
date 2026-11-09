# Axis.MinorTickMark

返回或设置指定坐标轴的次要刻度线类型。可读/写 **[XlTickMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickMark)** 。



## 语法

express.**MinorTickMark**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTickMark

## 说明


 **MinorTickMark** 可以是下列 **XlTickMark** 常量之一：

* **xlTickMarkInside** 
* **xlTickMarkOutside** 
* **xlTickMarkCross** 
* **xlTickMarkNone** 



## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的数值轴的次要刻度线设置为在轴内。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlValue).MinorTickMark = xlTickMarkInside
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的分类轴的次要刻度线是否在轴外。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.MinorTickMark == xlTickMarkOutside)
}
```
