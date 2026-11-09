# Databar.AxisColor

返回条件格式为数据条的单元格的坐标轴颜色。只读。



## 语法

express.**AxisColor**

express   一个代表 **Databar** 对象的变量。

## 类型

[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)

## 示例


```JavaScript
/*本示例设置工作表 Sheet1 上区域 A1:A10 中第一个为数据条的条件格式的单元格的坐标轴颜色。*/
function test() {
    let databar = Application.Worksheets.Item("Sheet1").Range("A1:A10").FormatConditions.Item(1)
    databar.AxisColor.ColorIndex = 3
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上区域 A1:A10 中第一个为数据条的条件格式的单元格的坐标轴的主题颜色。*/
function test() {
    let databar = Application.Worksheets.Item("Sheet1").Range("A1:A10").FormatConditions.Item(1)
    databar.AxisColor.ThemeColor = xlThemeColorAccent1
}
```
