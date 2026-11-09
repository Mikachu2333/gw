# Rows.RelativeVerticalPosition

指定一组行的相对垂直位置。可读写 **[WdRelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeVerticalPosition)** 类型。



## 语法

express.**RelativeVerticalPosition**

express   一个代表 **Rows** 对象的变量。

## 类型

WdRelativeVerticalPosition

## 示例


```JavaScript
/*本示例设置文本环绕活动文档的第一个表格的所有行，然后设置该表格的所有行相对于边距垂直。*/
function test() {
    let rows = ActiveDocument.Tables.Item(1).Rows
    rows.WrapAroundText = msoTrue
    rows.RelativeVerticalPosition = wdRelativeVerticalPositionMargin
}
```


```JavaScript
/*本示例显示所选表格行是否相对于段落垂直。*/
function test() {
    alert(Selection.Rows.RelativeVerticalPosition == wdRelativeVerticalPositionParagraph)
}
```
