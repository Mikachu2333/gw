# Reviewers.Item

返回集合中的单个 **Reviewer** 对象



## 语法

express.**Item(Index)**

express   一个代表 **Reviewers** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是表示序号位置的 **Long** 类型值或表示单个对象名称的 **String** 类型值。 |

## 返回值

Reviewer

## 示例


```JavaScript
/*本示例显示第一个窗口中第一个审阅者所做的修订是否可见。*/
function test() {
    let reviewers = Windows.Item(1).View.RevisionsFilter.Reviewers
    alert(reviewers.Item(1).Visible)
}
```


```JavaScript
/*本示例将活动窗口中第一个审阅者所做的修订设置为不可见。*/
function test() {
    let reviewers = Application.ActiveWindow.View.RevisionsFilter.Reviewers
    reviewers.Item(1).Visible = false
}
```
