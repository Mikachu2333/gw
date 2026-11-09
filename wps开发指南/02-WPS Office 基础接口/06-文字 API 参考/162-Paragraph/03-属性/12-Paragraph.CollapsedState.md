# Paragraph.CollapsedState

返回或设置指定的段落当前是否处于折叠状态。 **Boolean** 类型，可读写。



## 语法

express.**CollapsedState**

express   一个代表 **Paragraph** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档中的第一个段落当前是否处于折叠状态。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    alert(paragraphs.Item(1).CollapsedState)
}
```


```JavaScript
/*本示例将第一个文档的第二个段落设置为折叠状态。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).CollapsedState = true
}
```
