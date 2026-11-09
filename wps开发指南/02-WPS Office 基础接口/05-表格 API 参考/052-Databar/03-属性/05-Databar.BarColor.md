# Databar.BarColor

返回一个可用于修改数据条条件格式中的数据条颜色的 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象。



## 语法

express.**BarColor**

express   一个代表 **Databar** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个为数据条的条件格式的主题颜色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.BarColor.ThemeColor = xlThemeColorAccent3
}
```


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个为数据条的条件格式的颜色和该数据条边框的颜色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.BarBorder.Color.ColorIndex = 3
    databar.BarColor.ColorIndex = 3
}
```
