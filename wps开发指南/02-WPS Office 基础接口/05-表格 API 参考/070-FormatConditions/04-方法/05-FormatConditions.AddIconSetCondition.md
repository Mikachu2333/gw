# FormatConditions.AddIconSetCondition

返回一个代表指定区域图标集条件格式规则的新 **IconSetCondition** 对象。



## 语法

express.**AddIconSetCondition()**

express   一个代表 **FormatConditions** 对象的变量。

## 返回值

Object

## 说明


使用图标集为数据添加注释并将数据分为按阈值隔开的三到五类数据。每种图标均代表某一值范围。例如，在 3 箭头图标集中，红色向上箭头代表较高值，黄色侧箭头代表中间值，绿色向下箭头代表较低值。



## 示例


```JavaScript
/*本示例在活动工作表上单元格区域 A1:A10 上新增图标集条件格式。*/
function test() {
    ActiveSheet.Range("A1:A10").FormatConditions.AddIconSetCondition()
}
```


```JavaScript
/*本示例在活动工作表上单元格区域 C1:C10 上新增图标集条件格式，并设置该条件格式使用的图标集。*/
function test() {
    let iconSetCondition = ActiveSheet.Range("C1:C10").FormatConditions.AddIconSetCondition()
    iconSetCondition.IconSet = ActiveWorkbook.IconSets(xl4Arrows)
}
```
