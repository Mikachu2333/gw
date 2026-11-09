# Paragraph.Space2

为指定段落设置 2 倍行距。



## 语法

express.**Space2()**

express   一个代表 **Paragraph** 对象的变量。

## 返回值

void

## 说明


精确间距为各段内最大字符的字号加上 12 磅。

您还可以使用 **LineSpacingRule** 属性设置段落的行距。



## 示例


```JavaScript
/*本示例将所选内容中第一段的行距更改为 2 倍行距。*/
function test() {
    Selection.Paragraphs.Item(1).Space2()
}
```


```JavaScript
/*本示例将活动文档第一段的行距更改为 2 倍行距。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Space2()
}
```
