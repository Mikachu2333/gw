# RevisionsFilter.Markup

返回或设置一个 **WdRevisionsMarkup** 常量，该常量指定文档中显示的审阅者标记的范围。可读/写。



## 语法

express.**Markup**

express   一个代表 **RevisionsFilter** 对象的变量。

## 类型

WdRevisionsMarkup

## 示例


```JavaScript
/*本示例设置活动窗口的所有修订和标记的显示范围。本示例假定活动窗口中的文档包含一个或多个审阅者所作的修订。*/
function test() {
    ActiveWindow.View.RevisionsFilter.Markup = wdRevisionsMarkupAll
}
```


```JavaScript
/*本示例显示第一个窗口的所有修订和标记的展示范围是否为wdRevisionsMarkupSimple。*/
function test() {
    let filter = Windows.Item(1).View.RevisionsFilter
    alert(filter.Markup == wdRevisionsMarkupSimple)
}
```
