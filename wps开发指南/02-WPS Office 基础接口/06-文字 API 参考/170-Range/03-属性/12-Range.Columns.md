# Range.Columns

返回一个 **[Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/obj)** 集合，该集合代表区域中的所有表格列。只读。



## 语法

express.**Columns**

express   一个代表 **Range** 对象的变量。

## 类型

Columns

## 示例


```JavaScript
/*本示例显示活动文档的第一个表格中的列数。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        alert(ActiveDocument.Tables.Item(1).Range.Columns.Count)
    }
}
```


```JavaScript
/*本示例将选中的表格列的宽度设置为 1 英寸。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Range.Columns.SetWidth(InchesToPoints(1), wdAdjustProportional)
    }
}
```
