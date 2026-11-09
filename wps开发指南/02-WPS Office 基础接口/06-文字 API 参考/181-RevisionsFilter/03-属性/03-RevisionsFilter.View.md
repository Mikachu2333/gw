# RevisionsFilter.View

设置或返回一个 **WdRevisionsView** 常量，该常量代表全局选项，该选项指定 WPS 是显示文档的原始版本还是最终版本，这些版本可能应用了修订和格式更改。 可读/写。



## 语法

express.**View**

express   一个代表 **RevisionsFilter** 对象的变量。

## 类型

WdRevisionsView

## 说明


 **RevisionsFilter.View** 属性替换了 WPS 早期版本中的 **View.RevisionsView** 属性。



## 示例


```JavaScript
/*本示例在显示文档的原始版本和最终版本之间切换。本示例假定活动窗口中的文档包含一个或多个审阅者所作的修订。*/
function test() {
    let filter = ActiveWindow.View.RevisionsFilter
    if (filter.View == wdRevisionsViewFinal) {
        filter.View = wdRevisionsViewOriginal
    } else {
        filter.View = wdRevisionsViewFinal
    }
}
```


```JavaScript
/*本示例显示第一个窗口是否展示应用了格式和内容更改的文档。*/
function test() {
    let filter = Windows.Item(1).View.RevisionsFilter
    alert(filter.View == wdRevisionsViewFinal)
}
```
