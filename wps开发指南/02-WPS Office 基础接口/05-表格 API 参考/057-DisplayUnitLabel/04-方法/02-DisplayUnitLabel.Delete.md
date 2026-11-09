# DisplayUnitLabel.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*以下示例删除 Chart1 上数值轴上的单位标签。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Delete()
}
```


```JavaScript
/*下例删除 Sheet1 上的第一个图表数值轴上的单位标签。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Delete()
}
```
