# IconSetCondition.PercentileValues

返回或设置一个 **Boolean** 值，该值指明是否使用百分点确定图标集条件格式的阈值。



## 语法

express.**PercentileValues**

express   一个代表 **IconSetCondition** 对象的变量。

## 类型

boolean

## 说明


如果未将每个阈值设置为百分点，则此属性将返回 **False** 。如果将此属性设置为 **True** ，则会将每个阈值类型设置为百分点。



## 示例


```JavaScript
/*本示例显示第一张工作表上单元格区域 B1:B10 的第一个图标集条件格式是否使用百分点确定阈值。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("B1:B10").FormatConditions.Item(1)
    alert(iconSet.PercentileValues)
}
```


```JavaScript
/*本示例将活动工作表上单元格区域 B1:B10 的第二个图标集条件格式设置为使用百分点确定阈值。*/
function test() {
    let iconSet = ActiveSheet.Range("B1:B10").FormatConditions.Item(2)
    iconSet.PercentileValues = true
}
```
