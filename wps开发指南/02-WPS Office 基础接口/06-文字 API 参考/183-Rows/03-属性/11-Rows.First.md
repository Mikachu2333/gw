# Rows.First

返回一个 **[Row](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/obj)** 对象，该对象代表 **Rows** 集合中的第一个项目。



## 语法

express.**First**

express   一个代表 **Rows** 对象的变量。

## 类型

Row

## 示例


```JavaScript
/*本示例设置活动文档第一个表格的第一行下边框的格式。*/
function test() {
    ActiveDocument.Tables.Item(1).Borders.Enable = msoFalse
    let row = ActiveDocument.Tables.Item(1).Rows.First
    row.Borders.Item(wdBorderBottom).LineStyle = wdLineStyleSingle
}
```


```JavaScript
/*本示例删除所选表格行的第一行。*/
function test() {
    Selection.Rows.First.Delete()
}
```
