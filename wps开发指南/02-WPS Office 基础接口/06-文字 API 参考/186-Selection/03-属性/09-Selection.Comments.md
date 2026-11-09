# Selection.Comments

返回一个 **Comments** 集合，该集合代表指定选定内容中的所有批注。只读。


## 语法

express.**Comments**

express   一个代表 **Selection** 对象的变量。

## 类型

Comments

## 示例


```JavaScript
/*本示例向选定的文字添加批注。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowHiddenText = true
    Selection.Comments.Add(Selection.Range, "Approved")
}
```


```JavaScript
/*本示例将第一个文档中第三段的第一个批注删除。*/
function test() {
    Documents.Item(1).Paragraphs.Item(3).Range.Select()
    Selection.Comments.Item(1).Delete()
}
```
