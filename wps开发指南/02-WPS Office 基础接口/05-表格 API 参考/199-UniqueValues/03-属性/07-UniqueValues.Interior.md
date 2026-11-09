# UniqueValues.Interior

返回一个 **Interior** 对象，该对象在条件格式规则的计算结果为 **True** 时指定单元格的内部属性。只读。



## 语法

express.**Interior**

express   一个代表 **UniqueValues** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个（UniqueValues）条件格式内部的颜色。*/
function test() {
    let uniqueValues = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    uniqueValues.Interior.Color = RGB(255, 100, 155)
}
```


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第二个（UniqueValues）条件格式内部的主题颜色。*/
function test() {
    let uniqueValues = ActiveSheet.Range("A1:A10").FormatConditions.Item(2)
    uniqueValues.Interior.ThemeColor = xlThemeColorAccent6
}
```
