# Paragraphs.Space1

为指定段落设置单倍行距。



## 语法

express.**Space1()**

express   一个代表 **Paragraphs** 对象的变量。

## 返回值

void

## 说明


精确间距取决于各段内最大字符的字号。

您还可以使用 **[LineSpacingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/LineSpacingRule)** 属性设置段落间距。



## 示例


```JavaScript
/*本示例将选定段落的行距更改为单倍行距。*/
function test() {
    Selection.Paragraphs.Space1()
}
```


```JavaScript
/*本示例将活动文档所有段落的行距更改为单倍行距。*/
function test() {
    ActiveDocument.Paragraphs.Space1()
}
```
