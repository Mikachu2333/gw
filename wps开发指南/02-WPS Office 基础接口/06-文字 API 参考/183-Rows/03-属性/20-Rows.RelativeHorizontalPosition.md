# Rows.RelativeHorizontalPosition

指定一组行的相对水平位置。可读写 **[WdRelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalPosition)** 类型。



## 语法

express.**RelativeHorizontalPosition**

express   一个代表 **Rows** 对象的变量。

## 类型

WdRelativeHorizontalPosition

## 示例


```JavaScript
/*本示例将活动文档第一个表格的所有表格行设置为文字环绕，并且水平位置相对于边距。*/
function test() {
    let rows = ActiveDocument.Tables.Item(1).Rows
    rows.WrapAroundText = msoTrue
    rows.RelativeHorizontalPosition = wdRelativeHorizontalPositionMargin
}
```


```JavaScript
/*本示例显示所选表格行的水平位置是否相对于页面。*/
function test() {
    alert(Selection.Rows.RelativeHorizontalPosition == wdRelativeHorizontalPositionPage)
}
```
