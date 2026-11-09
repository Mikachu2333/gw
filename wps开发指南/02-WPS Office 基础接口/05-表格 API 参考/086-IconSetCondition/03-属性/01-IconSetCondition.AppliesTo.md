# IconSetCondition.AppliesTo

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，指定格式规则将应用于的单元格区域。



## 语法

express.**AppliesTo**

express   一个代表 **IconSetCondition** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示第一张工作表上区域 A1:A10 中第一个图标集条件格式应用到的单元格区域。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    alert(iconSet.AppliesTo.Address())
}
```


```JavaScript
/*本示例选中工作表 Sheet1 上区域 A1:A10 中第二个图标集条件格式应用到的单元格区域。*/
function test() {
    let iconSet = Application.Worksheets.Item("Sheet1").Range("A1:A10").FormatConditions.Item(2)
    iconSet.AppliesTo.Select()
}
```
