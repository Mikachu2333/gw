# Paragraph.FarEastLineBreakControl

如果为 **True** ，则 WPS 会将东亚语言文字的换行规则应用于指定的段落。如果只将某些指定段落的 **FarEastLineBreakControl** 属性设定为 **True** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**FarEastLineBreakControl**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设定 WPS 将东亚语言文字的换行规则应用于活动文档的第一段。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).FarEastLineBreakControl = true
}
```


```JavaScript
/*本示例设定 WPS 将东亚语言文字的换行规则应用于第一个文档的第二个段落。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).FarEastLineBreakControl = true
}
```
