# Find.Style

返回或设置指定对象的样式。可读写 **Variant** 类型。



## 语法

express.**Style**

express   一个代表 **Find** 对象的变量。

## 类型

any

## 说明


要设置该属性，请指定样式的本地名称、一个整数、一个 **[WdBuiltinStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBuiltinStyle)** 常量或一个代表样式的对象。



## 示例


```JavaScript
/*本示例将活动文档的主文档文章上样式为“标题 1”的文本“ex”替换为“example”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.Style = wdStyleHeading1
    find.Execute("ex", null, null, null, null, null, null, null, null, "example", wdReplaceAll)
}
```


```JavaScript
/*本示例将所选内容中的“标题 3”样式替换为“超链接”样式。*/
function test() {
    let find = Selection.Find
    find.Style = wdStyleHeading3
    find.Replacement.Style = wdStyleHyperlink
    find.Execute("", null, null, null, null, null, null, null, true, "", wdReplaceAll)
}
```
