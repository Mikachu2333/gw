# Paragraph.HangingPunctuation

如果为 **True** ，则指定段落中的标点将可以溢出边界。如果仅将某些指定段落的该属性设置为 **True** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**HangingPunctuation**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例允许活动文档第一段的标点可以溢出边界。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).HangingPunctuation = true
}
```


```JavaScript
/*本示例设置选中内容第一段的标点不可以溢出边界。*/
function test() {
    Selection.Paragraphs.Item(1).HangingPunctuation = false
}
```
