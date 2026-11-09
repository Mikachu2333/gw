# DisplayUnitLabel.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中数值轴上的单位标签是否有阴影。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Shadow)
}
```


```JavaScript
/*下例将 Sheet1 上的第一个图表数值轴上的单位标签设置成有阴影。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Shadow = true
}
```
