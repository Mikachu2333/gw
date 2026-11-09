# Columns.PreferredWidth

返回或设置指定列的首选宽度（以磅为单位或表示为窗口宽度的百分比）。 **Single** 类型，可读写。



## 语法

express.**PreferredWidth**

express   一个代表 **Columns** 对象的变量。

## 类型

number（float 精度）

## 说明


如果 **[PreferredWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/PreferredWidthType)** 属性设置为 **wdPreferredWidthPoints** ，则 **PreferredWidth** 属性将返回或设置以磅为单位的宽度值；如果 **PreferredWidthType** 属性设置为 **wdPreferredWidthPercent** ，则 **PreferredWidth** 属性将返回或设置用窗口宽度百分比表示的宽度值。



## 示例


```JavaScript
/*本示例将活动文档第一个表格的所有列的首选宽度设置为 40 磅。*/
function test() {
    let columns = ActiveDocument.Tables.Item(1).Columns
    columns.PreferredWidthType = wdPreferredWidthPoints
    columns.PreferredWidth = 40
}
```


```JavaScript
/*本示例以窗口宽度的百分比显示第一个窗口上所选内容中表格的所有列的首选宽度。*/
function test() {
    let columns = Windows.Item(1).Selection.Columns
    columns.PreferredWidthType = wdPreferredWidthPercent
    alert(columns.PreferredWidth)
}
```
