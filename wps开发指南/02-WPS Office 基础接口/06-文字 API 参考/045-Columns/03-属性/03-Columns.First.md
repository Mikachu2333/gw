# Columns.First

返回一个 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象，该对象代表在 **Columns** 集合中的第一个项目。



## 语法

express.**First**

express   一个代表 **Columns** 对象的变量。

## 类型

Column

## 示例


```JavaScript
/*本示例选定活动文档中第一个表格的第一列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.First.Select()
}
```


```JavaScript
/*本示例设置第一个窗口上所选内容中表格的第一列的宽度。*/
function test() {
    Windows.Item(1).Selection.Columns.First.Width = 10
}
```
