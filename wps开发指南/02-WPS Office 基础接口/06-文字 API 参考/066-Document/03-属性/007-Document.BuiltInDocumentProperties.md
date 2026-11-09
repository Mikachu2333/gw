# Document.BuiltInDocumentProperties

返回一个 **DocumentProperties** 集合，该集合代表指定文档的所有内置的文档属性。



## 语法

express.**BuiltInDocumentProperties**

express   一个代表 **Document** 对象的变量。

## 类型

Object

## 说明


要返回单个代表特定内置文档属性的 **DocumentProperty** 对象，可使用 **BuiltinDocumentProperties** 属性。如果 WPS 没有为一个内置的文档属性定义一个值，则读取这个文档属性的 **Value** 属性时会产生一个错误。

用 **CustomDocumentProperties** 属性返回自定义文档属性的集合。



## 示例


```JavaScript
/*本示例在活动文档的末尾插入一个内置属性列表。*/
function test() {
    let range = ActiveDocument.Content
    range.Collapse(wdCollapseEnd)
    let docProperties = ActiveDocument.BuiltInDocumentProperties
    for (let i = 1; i <= docProperties.Count; i++) {
        range.InsertParagraphAfter()
        range.InsertAfter(docProperties.Item(i).Name + "= ")
        try {
            range.InsertAfter(docProperties.Item(i).Value)
        }
        catch (exception) {
            console.log(exception.toString())
        }
    }
}
```


```JavaScript
/*本示例显示活动文档中的单词数。*/
function test() {
    let docProperty = ActiveDocument.BuiltInDocumentProperties.Item(wdPropertyWords)
    alert(`This document contains ${docProperty.Value} words.`)
}
```
