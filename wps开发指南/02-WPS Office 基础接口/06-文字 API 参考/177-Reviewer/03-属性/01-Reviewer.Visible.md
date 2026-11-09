# Reviewer.Visible

如果指定的对象可见，则为 **True** 。可读写， **Boolean** 类型。



## 语法

express.**Visible**

express   一个代表 **Reviewer** 对象的变量。

## 类型

boolean

## 说明


如果 **Visible** 属性为 **False** ，则某些方法和属性可能不可用。



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
