# RevisionsFilter.Reviewers

返回一个 **Reviewers** 对象，该对象代表一个或多个文档的审阅者集合。



## 语法

express.**Reviewers**

express   一个代表 **RevisionsFilter** 对象的变量。

## 类型

Reviewers

## 说明


 **Reviewers** 返回的 **Reviewers** 集合包含在计算机上打开或编辑过文档的所有审阅者的姓名。

 **Reviewers** 属性替换了 WPS 早期版本中的 **View.Reviewers** 属性，该属性现已弃用。



## 示例


```JavaScript
/*本示例显示活动窗口中文档的所有审阅者的数量。本示例假定活动窗口中的文档包含一个或多个审阅者所作的修订。*/
function test() {
    alert(ActiveWindow.View.RevisionsFilter.Reviewers.Count)
}
```


```JavaScript
/*本示例显示第一个窗口中文档的第一个审阅者是否可见。*/
function test() {
    let filter = Windows.Item(1).View.RevisionsFilter
    alert(filter.Reviewers.Item(1).Visible)
}
```
