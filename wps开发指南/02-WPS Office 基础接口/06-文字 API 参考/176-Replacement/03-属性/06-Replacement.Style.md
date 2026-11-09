# Replacement.Style

返回或设置指定对象的样式。要设置该属性，请指定样式的本地名称、一个整数、一个 **[WdBuiltinStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBuiltinStyle)** 常量或一个代表样式的对象。可读写 **Variant** 类型。



## 语法

express.**Style**

express   一个代表 **Replacement** 对象的变量。

## 类型

any

## 说明


如果返回包含多个样式的范围的样式，则只返回第一个字符样式或段落样式。



## 示例


```JavaScript
/*本示例先清除查找或替换条件中的格式，然后替换整个活动文档中的单词“example”的样式。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Replacement.ClearFormatting()
    find.Replacement.Style = wdStyleHeading1
    find.Execute("example", null, null, null, null, null, null, null, null, null, wdReplaceAll)
}
```


```JavaScript
/*本示例设置所选内容的替换条件的样式和字体颜色，然后替换所选内容中的第一个单词“example”。*/
function test() {
    let replacement = Selection.Find.Replacement
    replacement.Style = wdStyleHyperlink
    replacement.Font.Color = RGB(255, 0, 0)
    Selection.Find.Execute("example", null, null, null, null, null, null, null, null, null, wdReplaceOne)
}
```
