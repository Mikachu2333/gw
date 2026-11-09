# Paragraph.Space15

为指定段落设置 1.5 倍行距。



## 语法

express.**Space15()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 说明


精确间距为各段内最大字符的字号加上 6 磅。

您还可以使用 **LineSpacingRule** 属性设置段落的行距。



## 示例


```JavaScript
/*本示例将活动文档第一段的行距更改为 1.5 倍行距。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Space15()
}
```


```JavaScript
/*本示例将所选内容中第二段的行距更改为 1.5 倍行距。*/
function test() {
    Selection.Paragraphs.Item(2).Space15()
}
```
