# Range.PivotField

返回一个 **[PivotField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/obj)** 对象，它代表指定区域左上角所在的数据透视表字段。



## 语法

express.**PivotField**

express   一个代表 **Range** 对象的变量。

## 类型

PivotField

## 示例


```JavaScript
/*此示例显示包含活动单元格的数据透视表字段的名称。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    MsgBox("The active cell is in the field " + ActiveCell.PivotField.Name)
}
```


```JavaScript
/*本示例将 A3 单元格所在的数据透视表字段名设置为“字段一”，并显示*/
function test() {
    Range("A3").PivotField.Value = "字段一"
    alert(Range("A3").PivotField.Value)
}
```
