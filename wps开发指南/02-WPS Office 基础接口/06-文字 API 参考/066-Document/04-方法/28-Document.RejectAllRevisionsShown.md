# Document.RejectAllRevisionsShown

拒绝显示在屏幕上的文档的所有修订。



## 语法

express.**RejectAllRevisionsShown()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例隐藏“Jeff Smith”所做的所有修订，并拒绝显示的所有剩余修订。*/
function test() {
    let view = ActiveWindow.View
    // Show all revisions in the document
    view.ShowRevisionsAndComments = true
    view.ShowFormatChanges = true
    view.ShowInsertionsAndDeletions = true

    for (let i = 1; i <= view.RevisionsFilter.Reviewers.Count; i++) {
        view.RevisionsFilter.Reviewers.Item(i).Visible = true
    }

    // Hide revisions made by "Jeff Smith"
    view.RevisionsFilter.Reviewers.Item("Jeff Smith").Visible = false

    // Reject all revisions displayed in the active view
    ActiveDocument.RejectAllRevisionsShown()
}
```


```JavaScript
/*本示例拒绝显示在屏幕上的第一个文档的所有修订，并通知用户。*/
function test() {
    Documents.Item(1).RejectAllRevisionsShown()
    alert("已拒绝显示在屏幕上的第一个文档的所有修订。")
}
```
