# Table.PreferredWidthType

返回或设置用于指定表格宽度的指定度量单位。可读写 **[WdPreferredWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPreferredWidthType)** 类型。



## 语法

express.**PreferredWidthType**

express   一个代表 **Table** 对象的变量。

## 类型

WdPreferredWidthType

## 示例


```JavaScript
/*本示例将活动文档上第一个表格设置为以窗口宽度的百分比来表示指定宽度，然后将该表格的宽度设置为窗口宽度的 50%。*/
function test() {
    let table = ActiveDocument.Tables.Item(1)
    table.PreferredWidthType = wdPreferredWidthPercent
    table.PreferredWidth = 50
}
```


```JavaScript
/*本示例显示选中的第一张表格是否为以磅为单位来表示宽度。*/
function test() {
    let table = Selection.Tables.Item(1)
    alert(table.PreferredWidthType == wdPreferredWidthPoints)
}
```
