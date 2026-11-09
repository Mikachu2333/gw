# Paragraph.CollapseHeadingByDefault

返回或设置在文档加载时是否默认折叠指定的段落。 **Boolean** 类型，可读写。



## 语法

express.**CollapseHeadingByDefault**

express   一个代表 **Paragraph** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示在文档加载时是否默认折叠活动文档中的第一个段落。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    alert(paragraphs.Item(1).CollapseHeadingByDefault)
}
```


```JavaScript
/*本示例设置在文档加载时默认折叠第一个文档的第二个段落。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).CollapseHeadingByDefault = true
}
```
