# Rows.WrapAroundText

返回或设置文本是否环绕指定行。 **Long** 类型，可读写。



## 语法

express.**WrapAroundText**

express   一个代表 **Rows** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果设置仅环绕部分指定行，则返回 **wdUndefined** 。可设置为 **msoTrue** 或 **msoFalse** 。如果将 **WrapAroundText** 属性设置为 **msoFalse** ，则 **[AllowOverlap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/AllowOverlap)** 属性也会设置为 **msoFalse** 。如果将 **AllowOverlap** 属性设置为 **msoTrue** ，则 **WrapAroundText** 属性也会设置为 **msoTrue** 。



## 示例


```JavaScript
/*本示例设置 WPS ，使文本环绕在活动文档中第一张表格的周围。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.WrapAroundText = msoTrue
}
```


```JavaScript
/*本示例显示所选表格行周围是否被文本环绕。*/
function test() {
    alert(Selection.Rows.WrapAroundText == msoTrue)
}
```
