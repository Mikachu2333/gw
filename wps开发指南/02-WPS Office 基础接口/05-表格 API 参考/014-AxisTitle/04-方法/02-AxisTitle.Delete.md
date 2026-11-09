# AxisTitle.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **AxisTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果图表工作表 Chart1 中图表的分类轴标题为可见，则删除该分类轴标题。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    if (axis.HasTitle) {
        axis.AxisTitle.Delete()
    }
}
```


```JavaScript
/*本示例判断如果工作表 Sheet1 中第一张图表的数值轴标题为“坐标轴标题”，则删除该标题。*/
function test() {
    let axistitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).AxisTitle
    if (axistitle.Caption == "坐标轴标题") {
        axistitle.Delete()
    }
}
```
