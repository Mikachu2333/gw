# AboveAverage.Interior

返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，该对象在条件格式规则的计算结果为 **True** 时指定单元格的内部属性。只读。



## 语法

express.**Interior**

express   一个代表 **AboveAverage** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*本示例设置活动工作表上区域 C1:C10 中第二个（AboveAverage）条件格式内部的颜色。*/
function test() {
    let aboveAverage = ActiveSheet.Range("C1:C10").FormatConditions.Item(2)
    aboveAverage.Interior.ColorIndex = 7
}
```


```JavaScript
/*本示例设置活动工作表上区域 C1:C10 中第一个（AboveAverage）条件格式内部的主题颜色。*/
function test() {
    let aboveAverage = ActiveSheet.Range("C1:C10").FormatConditions.Item(1)
    aboveAverage.Interior.ThemeColor = xlThemeColorLight2
}
```
