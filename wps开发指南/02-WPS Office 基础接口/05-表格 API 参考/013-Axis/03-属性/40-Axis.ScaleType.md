# Axis.ScaleType

返回或设置数值轴的刻度类型。 **XlScaleType** 类型，可读写。



## 语法

express.**ScaleType**

express   一个代表 **Axis** 对象的变量。

## 类型

XlScaleType

## 说明


| **XlScaleType** 可为以下 **XlScaleType** 常量之一。 |
| ------------------------------------------ |
| **xlScaleLinear**                          |
| **xlScaleLogarithmic**                     |

对数刻度使用以 10 为底的对数。



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中的数值轴的刻度类型设置为对数刻度。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.ScaleType = xlScaleLogarithmic
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的数值轴的刻度类型是否为线性刻度。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(axis.ScaleType == xlScaleLinear)
}
```
