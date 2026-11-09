# ParagraphFormat.Style

返回或设置指定对象的样式。可读写 **Variant** 类型。



## 语法

express.**Style**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

any

## 说明


要设置该属性，请指定样式的本地名称、一个整数、一个 **[WdBuiltinStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBuiltinStyle)** 常量或一个代表样式的对象。



## 示例


```JavaScript
/*本示例将活动文档所有段落的样式设置为“标题 1”。*/
function test() {
    ActiveDocument.Range().ParagraphFormat.Style = wdStyleHeading1
}
```


```JavaScript
/*本示例显示所选段落的样式的名称。*/
function test() {
    alert(Selection.ParagraphFormat.Style.NameLocal)
}
```
