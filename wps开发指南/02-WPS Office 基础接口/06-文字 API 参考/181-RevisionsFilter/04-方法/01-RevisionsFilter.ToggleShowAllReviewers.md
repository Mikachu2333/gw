# RevisionsFilter.ToggleShowAllReviewers

显示或隐藏包含批注和修订的文档中的所有修订。



## 语法

express.**ToggleShowAllReviewers()**

express   一个代表 **RevisionsFilter** 对象的变量。

## 返回值

void

## 说明


在早期版本的 WPS 中， **ToggleShowAllReviewers** 方法位于 **Window** 对象上（该方法已隐藏）。



## 示例


```JavaScript
/*本示例显示活动窗口中包含批注和修订的文档中的所有修订。本示例假定包含批注和修订的文档中的所有修订已隐藏。*/
function test() {
    ActiveWindow.View.RevisionsFilter.ToggleShowAllReviewers()
}
```


```JavaScript
/*本示例判断如果第一个窗口中文档的审阅者数量大于等于1，则隐藏该窗口中包含批注和修订的文档中的所有修订。本示例假定包含批注和修订的文档中的所有修订为可见。*/
function test() {
    let filter = Windows.Item(1).View.RevisionsFilter
    if (filter.Reviewers.Count >= 1) {
        filter.ToggleShowAllReviewers()
    }
}
```
