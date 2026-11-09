# Document.ClickAndTypeParagraphStyle

返回或设置“即点即输”功能在指定文档中应用于文字的默认段落样式。 **Variant** 类型，可读写。



## 语法

express.**ClickAndTypeParagraphStyle**

express   一个代表 **Document** 对象的变量。

## 类型

any

## 说明


要设置 **ClickAndTypeParagraphStyle** 属性，请指定样式的本地名称、一个整数、一个 **WdBuiltinStyle** 常量或一个代表样式的对象。

如果将指定样式的 **[InUse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/InUse)** 属性设为 **False** ，则会出现错误。



## 示例


```JavaScript
/*本示例设置“即点即输”应用于纯文本文件的默认段落样式。*/
function test() {
    if (ActiveDocument.Styles.Item("纯文本").InUse) {
        ActiveDocument.ClickAndTypeParagraphStyle = "纯文本"
    } else {
        alert("Sorry, this style is not in use yet.")
    }
}
```


```JavaScript
/*本示例设置“即点即输”功能在第一个文档中应用于文字的默认段落样式。*/
function test() {
    Documents.Item(1).ClickAndTypeParagraphStyle = "标题 1"
}
```
