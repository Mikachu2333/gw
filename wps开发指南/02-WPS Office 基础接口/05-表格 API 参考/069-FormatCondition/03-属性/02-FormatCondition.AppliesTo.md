# FormatCondition.AppliesTo

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，指定格式规则将应用于的单元格区域。



## 语法

express.**AppliesTo**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选中工作表 Sheet1 上区域 B1:B10 中第一个条件格式应用到的单元格区域。*/
function test() {
    let formatCondition = Application.Worksheets.Item("Sheet1").Range("B1:B10").FormatConditions.Item(1)
    formatCondition.AppliesTo.Select()
}
```


```JavaScript
/*本示例显示活动工作表上区域 B1:B10 中第一个条件格式应用到的单元格区域的地址。*/
function test() {
    let formatCondition = ActiveSheet.Range("B1:B10").FormatConditions.Item(1)
    alert(formatCondition.AppliesTo.Address())
}
```
