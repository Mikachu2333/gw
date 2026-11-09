# Databar.AppliesTo

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，指定格式规则将应用于的单元格区域。



## 语法

express.**AppliesTo**

express   一个代表 **Databar** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选中工作表 Sheet1 上区域 A1:A10 中第一个为数据条的条件格式应用到的单元格区域。*/
function test() {
    let databar = Application.Worksheets.Item("Sheet1").Range("A1:A10").FormatConditions.Item(1)
    databar.AppliesTo.Select()
}
```


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个为数据条的条件格式应用到的单元格区域的地址。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(databar.AppliesTo.Address())
}
```
