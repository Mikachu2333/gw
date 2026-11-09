# Border.ColorIndex

返回或设置一个 **Variant** 值，它代表边框的颜色。



## 语法

express.**ColorIndex**

express   一个代表 **Border** 对象的变量。

## 类型

any

## 说明


颜色可指定为当前调色板中颜色的索引值，也可指定为下列 [XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex) 常量之一：

* **xlColorIndexAutomatic** 
* **xlColorIndexNone** 



## 示例


```JavaScript
/*本示例为 Chart1 中数值坐标轴的主要网格线设置颜色。*/
function test() {
    let axis = Application.Charts.Item("Chart1").Axes(xlValue)
    if (axis.HasMajorGridlines) {
        //set color to blue
        axis.MajorGridlines.Border.ColorIndex = 5
    }
}
```


```JavaScript
/*本示例显示 Chart1 中数值坐标轴的边框是否为无颜色。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    alert(chart.Axes(xlValue).Border.ColorIndex == xlColorIndexNone)
}
```
