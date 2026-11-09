# Reviewers 对象

表示一个或多个文档的审阅者 **Reviewer** 对象的集合。 **Reviewers** 集合包含已审阅在计算机上打开或编辑的文档的所有审阅者的姓名。

## 说明


使用 **Reviewers** (Index)（其中 Index 是审阅者的名称或索引号）可返回 **Reviewers** 集合中的单个审阅者。


## 示例


```JavaScript
/*本示例将活动窗口中第一个审阅者所做的修订设置为不可见。*/
function test() {
    let reviewers = Application.ActiveWindow.View.RevisionsFilter.Reviewers
    reviewers.Item(1).Visible = false
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

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Reviewers/member/Item) | 返回集合中的单个 **Reviewer** 对象 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Reviewers/member/Count) | 返回一 个 **Long** ，代表集合中审阅者的数量。此为只读属性。 |