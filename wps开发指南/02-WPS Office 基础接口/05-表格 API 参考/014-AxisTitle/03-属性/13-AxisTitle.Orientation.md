# AxisTitle.Orientation

返回或设置一个 **Variant** 值，它代表文本方向。



## 语法

express.**Orientation**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的分类轴标题的文字方向是否为水平排列。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    alert(axistitle.Orientation == xlHorizontal)
}
```


```JavaScript
/*本示例判断如果工作表 Sheet1 中第一张图表的数值轴标题为可见，则将该标题的文字方向设置为向下排列。*/
function test() {
    let axis = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    if (axis.HasTitle) {
        axis.AxisTitle.Orientation = xlDownward
    }
}
```
