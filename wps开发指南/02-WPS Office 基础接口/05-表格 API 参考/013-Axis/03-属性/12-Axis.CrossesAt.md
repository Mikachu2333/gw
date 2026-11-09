# Axis.CrossesAt

返回或设置数值轴中与分类坐标轴的交点。仅应用于数值轴。 **Double** 类型，可读写。



## 语法

express.**CrossesAt**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性将使 **[Crosses](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/Crosses)** 属性更改为 **xlAxisCrossesCustom** 。

该属性不能用于雷达图。对于三维图表，本属性指示由分类轴和数值轴交叉所定义的平面的位置。



## 示例


```JavaScript
/*本示例设置活动图表中的分类坐标轴与数值轴的交点位于数值坐标轴上数值 3 的位置。*/
function test() {
    //创建示例数据源。
    Application.Range("A1").Value2 = "2"
    Application.Range("A2").Value2 = "4"
    Application.Range("A3").Value2 = "6"
    Application.Range("A4").Value2 = "3"
    //基于示例数据源创建图表。
    Application.Charts.Add()
    Application.ActiveChart.ChartType = xlLineMarkersStacked
    Application.ActiveChart.SetSourceData(Sheets.Item("Sheet1").Range("A1:A4"), xlColumns)
    Application.ActiveChart.Location(xlLocationAsObject, "Sheet1")
    //将类别轴设置为在值 3 处与值轴相交。
    Application.ActiveChart.Axes(xlValue).Select()
    Application.Selection.CrossesAt = 3
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的分类坐标轴与数值轴的交点位于数值坐标轴上的位置。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    alert(`图表的分类坐标轴与数值轴的交点位于数值坐标轴上数值 ${axis.CrossesAt} 的位置`)
}
```
