# Paragraphs.ReadingOrder

返回或设置指定段落的读取次序而不改变其对齐方式。可读写 **WdReadingOrder** 类型。



## 语法

express.**ReadingOrder**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

WdReadingOrder

## 说明


使用 **Selection** 对象的 **LtrPara** 、 **LtrRun** 、 **RtlPara** 和 **RtlRun** 方法可更改段落的对齐方式和读取次序。



## 示例


```JavaScript
/*本示例将活动文档中所有段落的读取次序设置为从右向左。*/
function test() {
    ActiveDocument.Paragraphs.ReadingOrder = wdReadingOrderRtl
}
```


```JavaScript
/*本示例显示第一个文档所有段落的读取次序是否为从左到右。*/
function test() {
    alert(Documents.Item(1).Paragraphs.ReadingOrder == wdReadingOrderLtr)
}
```
