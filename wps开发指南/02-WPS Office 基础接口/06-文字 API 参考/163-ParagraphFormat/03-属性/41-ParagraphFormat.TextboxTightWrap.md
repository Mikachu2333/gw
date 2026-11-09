# ParagraphFormat.TextboxTightWrap

返回或设置一个 **[WdTextboxTightWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdTextboxTightWrap)** 常量，该常量代表文本环绕形状或文本框的紧密程度。可读写。



## 语法

express.**TextboxTightWrap**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

WdTextboxTightWrap

## 示例


```JavaScript
/*本示例显示活动文档的所有段落的文本环绕形状或文本框的紧密程度是否为wdTightNone。*/
function test() {
    alert(ActiveDocument.Paragraphs.Format.TextboxTightWrap == wdTightNone)
}
```


```JavaScript
/*本示例设置所选段落的文本环绕形状或文本框的紧密程度为wdTightAll。*/
function test() {
    Selection.ParagraphFormat.TextboxTightWrap = wdTightAll
}
```
