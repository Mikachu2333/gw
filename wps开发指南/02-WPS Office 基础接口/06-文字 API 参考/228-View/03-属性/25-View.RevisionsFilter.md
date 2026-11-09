# View.RevisionsFilter

返回 **RevisionsFilter** 对象的实例。只读。



## 语法

express.**RevisionsFilter**

express   一个代表 **View** 对象的变量。

## 类型

RevisionsFilter

## 示例


```JavaScript
/*本示例将第一个窗口的活动窗格中已修订过文档的第一个审阅者设置为不可见。*/
function test() {
    let reviewers = Windows.Item(1).ActivePane.View.RevisionsFilter.Reviewers
    reviewers.Item(1).Visible = false
}
```


```JavaScript
/*本示例显示活动文档上活动窗口展示审阅者标记的范围是否为wdRevisionsMarkupSimple。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    alert(view.RevisionsFilter.Markup == wdRevisionsMarkupSimple)
}
```
