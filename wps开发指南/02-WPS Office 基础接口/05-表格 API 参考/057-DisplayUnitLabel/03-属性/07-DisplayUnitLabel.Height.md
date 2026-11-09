# DisplayUnitLabel.Height

返回对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*下例显示 Sheet1 上的第一个图表单位标签高度。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Height)
}
```


```JavaScript
/*本示例显示 Chart1 上单位标签高度。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Height)
}
```
