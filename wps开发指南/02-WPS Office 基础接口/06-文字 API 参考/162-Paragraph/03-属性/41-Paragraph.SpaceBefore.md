# Paragraph.SpaceBefore

返回或设置指定段落的段前间距（以磅为单位）。可读/写 **Single** 类型。



## 语法

express.**SpaceBefore**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中第二段的段前间距设置为 12 磅。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).SpaceBefore = 12
}
```


```JavaScript
/*本示例显示第一个文档第三段的段前间距。*/
function test() {
    alert(Documents.Item(1).Paragraphs.Item(3).SpaceBefore)
}
```
