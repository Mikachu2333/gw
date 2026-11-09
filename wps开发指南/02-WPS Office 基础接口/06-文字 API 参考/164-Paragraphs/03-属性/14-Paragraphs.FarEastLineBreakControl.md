# Paragraphs.FarEastLineBreakControl

如果为 **msoTrue** ，则 WPS 会将东亚语言文字的换行规则应用于指定的段落。如果只将某些指定段落的 **FarEastLineBreakControl** 属性设定为 **msoTrue** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**FarEastLineBreakControl**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设定 WPS 将东亚语言文字的换行规则应用于活动文档的所有段落。*/
function test() {
    ActiveDocument.Paragraphs.FarEastLineBreakControl = msoTrue
}
```


```JavaScript
/*本示例显示 WPS 是否将东亚语言文字的换行规则应用于第一个文档的所有段落。*/
function test() {
    alert(Documents.Item(1).Paragraphs.FarEastLineBreakControl == msoTrue)
}
```
