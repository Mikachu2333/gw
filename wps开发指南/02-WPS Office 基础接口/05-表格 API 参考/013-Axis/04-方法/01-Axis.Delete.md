# Axis.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Axis** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例删除工作表 Sheet1 中第一张图表的数值坐标轴。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.Delete()
}
```


```JavaScript
/*本示例删除图表工作表 Chart1 中图表的分类坐标轴。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.Delete()
}
```
