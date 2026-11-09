# Paragraph.TabStops

返回或设置 **TabStops** 集合，该集合表示指定段落的所有自定义制表位。可读写。



## 语法

express.**TabStops**

express   一个代表 **Paragraph** 对象的变量。

## 类型

TabStops

## 示例


```JavaScript
/*本示例将文档中各段的制表位设置为与第一段的制表位一致。*/
function test() {
    let para1Tabs = ActiveDocument.Paragraphs.Item(1).TabStops
    ActiveDocument.Paragraphs.TabStops = para1Tabs
}
```


```JavaScript
/*本示例将第一个文档中第三段的制表位设置为与第二段的制表位一致。*/
function test() {
    let para1Tabs = Documents.Item(1).Paragraphs.Item(2).TabStops
    Documents.Item(1).Paragraphs.Item(3).TabStops = para1Tabs
}
```
