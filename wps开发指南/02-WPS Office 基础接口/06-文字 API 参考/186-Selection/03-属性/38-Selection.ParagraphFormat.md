# Selection.ParagraphFormat

返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定选定内容的段落设置。可读写。



## 语法

express.**ParagraphFormat**

express   一个代表 **Selection** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*本示例将当前选定内容的段落格式设置为右对齐。*/
function test() {
    Selection.ParagraphFormat.Alignment = wdAlignParagraphRight
}
```


```JavaScript
/*本示例将选中内容的段落行距设为1.5倍行距。*/
function test() {
    Selection.ParagraphFormat.LineSpacingRule = wdLineSpace1pt5
}
```
