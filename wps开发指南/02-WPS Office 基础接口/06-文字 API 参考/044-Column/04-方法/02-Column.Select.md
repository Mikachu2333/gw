# Column.Select

选择指定表格列。



## 语法

express.**Select()**

express   一个代表 **Column** 对象的变量。

## 返回值

void

## 说明


使用该方法后，可用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象来处理选定项目。有关详细信息，请参阅处理 Selection 对象。



## 示例


```JavaScript
/*本示例选择活动文档第一张表格的第二列*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(2).Select()
}
```


```JavaScript
/*本示例设置活动文档第一张表格第一列的外部边框的颜色。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(1).Select()
    Selection.Borders.OutsideColor = RGB(255, 0, 0)
}
```
