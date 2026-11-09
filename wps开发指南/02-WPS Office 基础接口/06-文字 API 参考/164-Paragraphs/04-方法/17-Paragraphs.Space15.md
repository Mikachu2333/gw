# Paragraphs.Space15

为指定段落设置 1.5 倍行距。



## 语法

express.**Space15()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 说明


精确间距为各段内最大字符的字号加上 6 磅。

您还可以使用 **[LineSpacingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/LineSpacingRule)** 属性设置段落间距。



## 示例


```JavaScript
/*本示例将选定段落的行距更改为1.5倍行距。*/
function test() {
    Selection.Paragraphs.Space15()
}
```


```JavaScript
/*本示例将活动文档所有段落的行距更改为1.5倍行距。*/
function test() {
    ActiveDocument.Paragraphs.Space15()
}
```
