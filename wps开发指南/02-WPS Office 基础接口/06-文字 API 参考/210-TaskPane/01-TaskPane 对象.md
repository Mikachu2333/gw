# TaskPane 对象

代表可用于 WPS 的单个任务窗格，该窗格包含用户执行的常见任务。 **TaskPane** 对象是 **TaskPanes** 集合的一个成员。

## 说明


使用 **TaskPanes** 属性可返回一个 **TaskPane** 对象。使用 **Visible** 属性可显示单个任务窗格。


## 示例


```JavaScript
/*本示例将格式窗格设置为可见。*/
function test() {
    Application.TaskPanes.Item(wdTaskPaneFormatting).Visible = true
}
```


```JavaScript
/*本示例判断文档操作窗格是否可见，并通知用户。*/
function test() {
    if (Application.TaskPanes.Item(wdTaskPaneDocumentActions).Visible) {
        alert("文档操作窗格可见")
    } else {
        alert("文档操作窗格不可见")
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TaskPane/member/Visible) | 如果指定对象可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |