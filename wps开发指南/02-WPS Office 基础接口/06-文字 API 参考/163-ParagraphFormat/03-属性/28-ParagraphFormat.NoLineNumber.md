# ParagraphFormat.NoLineNumber

如果取消指定段的行号，则该属性值为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写 **Long** 类型。



## 语法

express.**NoLineNumber**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/obj)** 对象的 **[LineNumbering](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/LineNumbering)** 属性可打开行号。



## 示例


```JavaScript
/*本示例为活动文档设置行号，然后取消该文档的第一个段落的行号。*/
function test() {
    ActiveDocument.PageSetup.LineNumbering.Active = msoTrue
    ActiveDocument.Paragraphs.Item(1).Format.NoLineNumber = msoTrue
}
```


```JavaScript
/*本示例显示所选段落是否应用行号。*/
function test() {
    alert(Selection.ParagraphFormat.NoLineNumber === msoFalse)
}
```
