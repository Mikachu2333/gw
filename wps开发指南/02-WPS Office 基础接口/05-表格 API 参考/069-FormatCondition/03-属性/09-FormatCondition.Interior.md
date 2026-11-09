# FormatCondition.Interior

返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，它代表指定对象的内部。



## 语法

express.**Interior**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第一个条件格式内部的颜色设置为红色。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.Interior.ColorIndex = 3
}
```


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个条件格式内部的主题颜色。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.Interior.ThemeColor = xlThemeColorLight2
}
```
