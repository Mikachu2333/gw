# Columns.Select

选择指定表格列。



## 语法

express.**Select()**

express   一个代表 **Columns** 对象的变量。

## 返回值

void

## 说明


使用该方法后，可用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象来处理选定项目。有关详细信息，请参阅 处理 Selection 对象。



## 示例


```JavaScript
/*本示例选中活动文档第一个表格的所有列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Select()
}
```


```JavaScript
/*本示例设置第一个文档上第二个表格的列宽。*/
function test() {
    Documents.Item(1).Tables.Item(2).Select()
    Selection.Columns.SetWidth(InchesToPoints(1), wdAdjustNone)
}
```
