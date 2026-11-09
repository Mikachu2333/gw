# TableStyle.AllowBreakAcrossPage

设置或返回一个 **Long** 类型的值，表明设置为特定样式的表格行中的文本行是否可以跨页断行。可读写。



## 语法

express.**AllowBreakAcrossPage**

express   一个代表 **TableStyle** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果为 **msoCTrue** ，则表格行中的文本行可以跨页断行。如果为 **msoFalse** ，则表格行中的文本行必须处于同一页。该属性默认设置为 **msoCTrue** 。



## 示例


```JavaScript
/*本示例设置活动文档上名为“网格型”的表格样式的表格行不在分页符处断行。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("网格型").Table
    tableStyle.AllowBreakAcrossPage = msoFalse
}
```


```JavaScript
/*本示例显示第一个文档上名为“彩色型 2”的表格样式的表格行中的文本行是否可以跨页断行。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("彩色型 2").Table
    alert(tableStyle.AllowBreakAcrossPage === msoCTrue)
}
```
