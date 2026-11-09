# Paragraph.LineSpacingRule

返回或设置指定段落的行距。可读写 **WdLineSpacing** 类型。



## 语法

express.**LineSpacingRule**

express   一个代表 **Paragraph** 对象的变量。

## 类型

WdLineSpacing

## 说明


使用 **wdLineSpaceSingle** 、 **wdLineSpace1pt5** 或 **wdLineSpaceDouble** 可将行距设置为这些值之一。要将行距设置为固定磅值或多倍行距，还必须设置 **LineSpacing** 属性。



## 示例


```JavaScript
/*本示例为活动文档的第一段设置 2 倍行距。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).LineSpacingRule = wdLineSpaceDouble
}
```


```JavaScript
/*本示例显示所选内容的第一段所用的行距是否为1.5 倍行距。*/
function test() {
    lrule = Selection.Paragraphs.Item(1).LineSpacingRule
    alert(lrule == wdLineSpace1pt5)
}
```
