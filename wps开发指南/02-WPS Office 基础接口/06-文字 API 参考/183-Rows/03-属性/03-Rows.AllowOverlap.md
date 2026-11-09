# Rows.AllowOverlap

返回或设置一个值，该值指定是否允许指定行与其他行重叠。



## 语法

express.**AllowOverlap**

express   一个代表 **Rows** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果指定行包含重叠行和非重叠行，则该属性返回 **wdUndefined** 。可以设置为 **msoTrue** 或 **msoFalse** 。 **Long** 类型，可读写。如果将 **AllowOverlap** 设置为 **msoTrue** ，会将 **WrapAroundText** 也设置为 **msoTrue** ；如果将 **WrapAroundText** 设置为 **msoFalse** ，则会将 **AllowOverlap** 也设置为 **msoFalse** 。

因为 HTML 不支持表格或图形的重叠，所以在 Web 版式视图中将忽略 **AllowOverlap** 。



## 示例


```JavaScript
/*本示例设置文字环绕所选表格的行，并且此表的行不能与其他被文字环绕的表格的行重叠。*/
function test() {
    Selection.Rows.WrapAroundText = msoTrue
    Selection.Rows.AllowOverlap = msoFalse
}
```


```JavaScript
/*本示例设置活动文档第一张表格的所有行可与其他行重叠。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.AllowOverlap = msoTrue
}
```
