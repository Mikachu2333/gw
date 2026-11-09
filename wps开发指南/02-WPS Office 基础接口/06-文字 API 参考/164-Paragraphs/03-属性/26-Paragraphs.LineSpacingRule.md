# Paragraphs.LineSpacingRule

返回或设置指定段落的行距。可读写 **WdLineSpacing** 类型。



## 语法

express.**LineSpacingRule**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

WdLineSpacing

## 说明


使用 **wdLineSpaceSingle** 、 **wdLineSpace1pt5** 或 **wdLineSpaceDouble** 可将行距设置为这些值之一。要将行距设置为固定磅值或多倍行距，还必须设置 **LineSpacing** 属性。



## 示例


```JavaScript
/*本示例为活动文档的所有段落设置 2 倍行距。*/
function test() {
    ActiveDocument.Paragraphs.LineSpacingRule = wdLineSpaceDouble
}
```


```JavaScript
/*本示例为所选段落设置 1.5 倍行距。*/
function test() {
    Selection.Paragraphs.LineSpacingRule = wdLineSpace1pt5
}
```
