# Reviewer 对象

代表已修订过的文档的单个审阅者。 **Reviewer** 对象是 **Reviewers** 集合的一个成员。

## 说明


使用 **Reviewers** (*索引*)（其中 *index* 是审阅者的名称或编号）可返回 **Reviewer** 对象。使用 **Visible** 属性可以显示或隐藏文档中的单个审阅者。


## 示例


```JavaScript
/*示例隐藏名为“Jeff Smith”的审阅者，并显示名为“Judy Lew”的审阅者。这假定“Jeff Smith”和“Judy Lew”是 Reviewers 集合的成员。否则，将收到错误。*/
function test() {
    let reviewers = Application.ActiveWindow.View.RevisionsFilter.Reviewers
    reviewers.Item("Jeff Smith").Visible = false
    reviewers.Item("Judy Lew").Visible = true
}
```


```JavaScript
/*本示例显示第一个窗口中第一个审阅者所做的修订是否可见。*/
function test() {
    let reviewers = Windows.Item(1).View.RevisionsFilter.Reviewers
    alert(reviewers.Item(1).Visible)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Reviewer/member/Visible) | 如果指定的对象可见，则为 **True** 。可读写， **Boolean** 类型。 |