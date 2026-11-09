# ParagraphFormat.ReadingOrder

返回或设置指定段落的读取次序而不改变其对齐方式。可读写 **WdReadingOrder** 类型。



## 语法

express.**ReadingOrder**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

WdReadingOrder

## 说明


使用 **Selection** 对象的 **[LtrPara](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/LtrPara)** 、 **[LtrRun](#TODO)** 、 **[RtlPara](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/RtlPara)** 和 **[RtlRun](#TODO)** 方法可更改段落的对齐方式和读取次序。



## 示例


```JavaScript
/*本示例将活动文档的第一段的读取次序设置为从右向左。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Format.ReadingOrder = wdReadingOrderRtl
}
```


```JavaScript
/*本示例判断所选段落的读取次序，并通知用户。*/
function test() {
    if (Selection.ParagraphFormat.ReadingOrder == wdReadingOrderLtr) {
        alert("读取次序为从左到右")
    } else {
        alert("读取次序为从右到左")
    }
}
```
