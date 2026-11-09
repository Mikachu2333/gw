# Axis.CategoryType

返回或设置分类轴类型。 **XlCategoryType** 类型，可读写。



## 语法

express.**CategoryType**

express   一个代表 **Axis** 对象的变量。

## 类型

XlCategoryType

## 说明


不能对数值轴设置本属性。



## 示例


```JavaScript
/*本示例使第一张工作表上第一个图表中的分类轴使用时间刻度，并以月为基本单位。*/
function test() {
    let axis = Application.Worksheets.Item(1).ChartObjects(1).Chart.Axes(xlCategory)
    axis.CategoryType = xlTimeScale
    axis.BaseUnit = xlMonths
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中图表 Chart 2 是否为 ET 控制分类轴的类型。*/
function test() {
    let axis = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2").Chart.Axes(xlCategory)
    alert(axis.CategoryType == xlAutomaticScale)
}
```
