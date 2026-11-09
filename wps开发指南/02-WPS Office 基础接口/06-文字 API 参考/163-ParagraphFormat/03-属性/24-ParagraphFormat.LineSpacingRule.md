# ParagraphFormat.LineSpacingRule

返回或设置指定段落格式的行距。可读写 **[WdLineSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLineSpacing)** 类型。



## 语法

express.**LineSpacingRule**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

WdLineSpacing

## 说明


使用 **wdLineSpaceSingle** 、 **wdLineSpace1pt5** 或 **wdLineSpaceDouble** 可将行距设置为这些值之一。要将行距设置为固定磅值或多倍行距，还必须设置 **[LineSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/member/LineSpacing)** 属性。



## 示例


```JavaScript
/*本示例为活动文档的第一段设置 2 倍行距。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Format.LineSpacingRule = wdLineSpaceDouble
}
```


```JavaScript
/*本示例显示所选内容的第一段所用的行距标准是否为wdLineSpaceSingle。*/
function test() {
    alert(Selection.Paragraphs.Item(1).Format.LineSpacingRule == wdLineSpaceSingle)
}
```
