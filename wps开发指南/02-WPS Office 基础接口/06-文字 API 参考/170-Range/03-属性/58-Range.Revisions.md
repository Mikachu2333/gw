# Range.Revisions

返回一个 **Revisions** 集合，该集合代表范围中的修订。只读。



## 语法

express.**Revisions**

express   一个代表 **Range** 对象的变量。

## 类型

Revisions

## 示例


```JavaScript
/*本示例显示活动文档中第一节中修订的数目。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Range.Revisions.Count)
}
```


```JavaScript
/*本示例接受所选内容的第一段中的所有修订。*/
function test() {
    let range = Selection.Paragraphs.Item(1).Range
    range.Revisions.AcceptAll()
}
```
