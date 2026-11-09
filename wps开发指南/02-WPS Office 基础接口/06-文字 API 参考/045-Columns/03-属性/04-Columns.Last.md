# Columns.Last

返回表示表格中最后一列的 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象。



## 语法

express.**Last**

express   一个代表 **Columns** 对象的变量。

## 类型

Column

## 示例


```JavaScript
/*本示例选定活动文档的第一个表格的最后一列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Last.Select()
}
```


```JavaScript
/*本示例设置第一个窗口上所选内容中表格的最后一列的宽度。*/
function test() {
    Windows.Item(1).Selection.Columns.Last.Width = 10
}
```
