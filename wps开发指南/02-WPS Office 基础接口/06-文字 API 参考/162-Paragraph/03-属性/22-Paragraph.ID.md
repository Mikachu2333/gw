# Paragraph.ID

在当前文档另存为网页时，返回或设置指定对象的标识标签。可读写 **String** 类型。



## 语法

express.**ID**

express   一个代表 **Paragraph** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一个段落的标识标签。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).ID)
}
```


```JavaScript
/*本示例设置第一个文档中第二段的标识标签。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).ID = "第二段"
}
```
