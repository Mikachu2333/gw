# Document.DeleteAllCommentsShown

删除显示在屏幕上的指定文档的所有批注。



## 语法

express.**DeleteAllCommentsShown()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


 **DeleteAllCommentsShown** 方法删除可见的批注子集。这包括活动批注（显示）以及已解决的批注（由批注提示指示）。



## 示例


```JavaScript
/*本示例隐藏“Jeff Smith”所做的所有批注，并删除显示的其他批注。*/
function test() {
    let view = ActiveWindow.View
    // Display all comments and revisions
    view.ShowRevisionsAndComments = true
    view.ShowFormatChanges = true
    view.ShowInsertionsAndDeletions = true

    for (let i = 1; i <= view.RevisionsFilter.Reviewers.Count; i++) {
        view.RevisionsFilter.Reviewers.Item(i).Visible = true
    }

    // Hide only the revisions/comments made by the reviewer named "Jeff Smith"
    view.RevisionsFilter.Reviewers.Item("Jeff Smith").Visible = false

    // Delete all comments displayed in the active view
    ActiveDocument.DeleteAllCommentsShown()
}
```


```JavaScript
/*本示例删除第一个文档显示在屏幕上的所有批注。*/
function test() {
    Documents.Item(1).DeleteAllCommentsShown()
}
```
