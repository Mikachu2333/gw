# Document.AcceptAllRevisionsShown

接受显示在屏幕上的指定文档中的所有修订。



## 语法

express.**AcceptAllRevisionsShown()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


可用 **RejectAllRevisionsShown** 方法来拒绝显示在屏幕上的指定文档中的所有修订



## 示例


```JavaScript
/*此示例接受在隐藏“Jeff Smith”所做的修订后显示的所有修订。此示例假定活动文档由多个人审阅，并且其中一个审阅者的姓名为“Jeff Smith”。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    // Display all comments and revisions
    view.ShowRevisionsAndComments = true
    view.ShowFormatChanges = true
    view.ShowInsertionsAndDeletions = true

    for (let i = 1; i <= view.RevisionsFilter.Reviewers.Count; i++) {
        view.RevisionsFilter.Reviewers.Item(i).Visible = true
    }

    // Hide only the revisions/comments made by the reviewer named "Jeff Smith"
    view.RevisionsFilter.Reviewers.Item("Jeff Smith").Visible = false

    // Accept all revisions displayed in the active view
    ActiveDocument.AcceptAllRevisionsShown()
}
```


```JavaScript
/*本示例接受显示在屏幕上的第一个文档中的所有修订。*/
function test() {
    Documents.Item(1).AcceptAllRevisionsShown()
}
```
