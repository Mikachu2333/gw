# Range.PivotItem

返回一个 **[PivotItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/obj)** 对象，它代表指定区域左上角所在的数据透视表项。



## 语法

express.**PivotItem**

express   一个代表 **Range** 对象的变量。

## 类型

PivotItem

## 示例


```JavaScript
/*此示例显示包含 Sheet1 中活动单元格的数据透视表数据项的名称。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    MsgBox ("The active cell is in the item " + ActiveCell.PivotItem.Name)
}
```


```JavaScript
/*本示例将 A3 单元格所对应的数据项名称设置为“表一”，并显示*/
function test() {
    Range("A3").PivotItem.Value = "表一"
    alert(Range("A3").PivotItem.Value)
}
```
