# ColorScale.AppliesTo

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，指定格式规则将应用于的单元格区域。



## 语法

express.**AppliesTo**

express   一个代表 **ColorScale** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例将第一张工作表上区域 A1:A10 中第一个色阶条件格式应用到的单元格区域赋值给 C1 单元格。*/
function test() {
    let colorScale = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    Range("C1").Value2 = colorScale.AppliesTo.Address()
}
```


```JavaScript
/*本示例选中工作表 Sheet1 上区域 A1:A10 中第二个色阶条件格式应用到的单元格区域。*/
function test() {
    let colorScale = Application.Worksheets.Item("Sheet1").Range("A1:A10").FormatConditions.Item(2)
    colorScale.AppliesTo.Select()
}
```
