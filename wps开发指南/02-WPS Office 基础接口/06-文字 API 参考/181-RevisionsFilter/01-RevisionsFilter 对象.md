# RevisionsFilter 对象

表示与在文档中显示审阅者批注和修订标记相关的当前设置。

## 说明


使用 **View** 对象的 **[RevisionsFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/RevisionsFilter)** 属性可返回 **RevisionsFilter** 对象。


## 示例


```JavaScript
/*本示例判断第一个窗口展示的文档版本，并通知用户。*/
function test() {
    let filter = Windows.Item(1).View.RevisionsFilter
    if (filter.View == wdRevisionsViewFinal) {
        alert("显示应用了格式和内容更改的文档。")
    } else {
        alert("显示进行更改之前的文档。")
    }
}
```


```JavaScript
/*本示例将活动窗口中文档的第一个审阅者设置为不可见。*/
function test() {
    let filter = ActiveWindow.View.RevisionsFilter
    filter.Reviewers.Item(1).Visible = false
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ToggleShowAllReviewers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RevisionsFilter/member/ToggleShowAllReviewers) | 显示或隐藏包含批注和修订的文档中的所有修订。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Markup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RevisionsFilter/member/Markup) | 返回或设置一个 **WdRevisionsMarkup** 常量，该常量指定文档中显示的审阅者标记的范围。可读/写。 |
| [Reviewers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RevisionsFilter/member/Reviewers) | 返回一个 **Reviewers** 对象，该对象代表一个或多个文档的审阅者集合。 |
| [View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RevisionsFilter/member/View) | 设置或返回一个 **WdRevisionsView** 常量，该常量代表全局选项，该选项指定 WPS 是显示文档的原始版本还是最终版本，这些版本可能应用了修订和格式更改。 可读/写。 |