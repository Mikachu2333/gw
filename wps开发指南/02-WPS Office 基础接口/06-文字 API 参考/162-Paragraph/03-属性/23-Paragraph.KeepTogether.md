# Paragraph.KeepTogether

在 WPS 对文档重新分页时，如果指定段落中的所有行都位于同一页上，则该属性值为 **True** 。可读写 **Long** 类型。



## 语法

express.**KeepTogether**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性可以是 **True** 、 **False** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例设置活动文档中第一段的格式，以使在 WPS 对文档重新分页时同一段中的各行都位于同一页上。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).KeepTogether = true
}
```


```JavaScript
/*本示例设置选定内容第一段的格式，以使在 WPS 对文档重新分页时同一段中的各行都位于同一页上。*/
function test() {
    Selection.Paragraphs.Item(1).KeepTogether = true
}
```
