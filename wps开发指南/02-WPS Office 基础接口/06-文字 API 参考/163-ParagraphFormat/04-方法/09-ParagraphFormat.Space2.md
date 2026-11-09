# ParagraphFormat.Space2

为指定段落设置 2 倍行距。



## 语法

express.**Space2()**

express   一个代表 **ParagraphFormat** 对象的变量。

## 返回值

void

## 说明


精确间距为各段内最大字符的字号加上 12 磅。

您还可以使用 **LineSpacingRule** 属性设置段落间距。例如，下列两个语句是等效的：

```JavaScript
Selection.ParagraphFormat.Space2()
Selection.ParagraphFormat.LineSpacingRule = wdLineSpaceDouble
```



## 示例


```JavaScript
/*本示例将所选段落的行距更改为 2 倍行距。*/
function test() {
    Selection.ParagraphFormat.Space2()
}
```


```JavaScript
/*本示例将所选内容中第一段的行距更改为 2 倍行距。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Format.Space2()
}
```
