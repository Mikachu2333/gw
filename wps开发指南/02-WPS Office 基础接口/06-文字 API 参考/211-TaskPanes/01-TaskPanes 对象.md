# TaskPanes 对象

 **TaskPane** 对象的集合，该集合包含 WPS 中通常执行的任务。

## 说明


使用 **TaskPanes** 属性可返回 **TaskPanes** 集合。使用 **Item** 方法和 **[WdTaskPanes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdTaskPanes)** 常量可引用特定任务窗格。


## 示例


```JavaScript
/*本示例将格式任务窗格设置为可见。*/
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

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TaskPanes/member/Item) | 将指定任务窗格作为 **TaskPane** 对象返回。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TaskPanes/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中任务窗格的数目。只读。 |