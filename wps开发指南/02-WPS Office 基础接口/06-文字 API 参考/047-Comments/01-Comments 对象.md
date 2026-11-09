# Comments 对象

[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/obj)对象的集合，这些对象代表选定内容、区域或文档中的批注。

## 说明


用 Comments 属性可返回一个 Comments 集合。

使用 Add 方法在指定范围内添加注释。


## 示例


```JavaScript
/*本示例在插入点添加一条备注。*/
function test() {
    Application.Selection.Collapse(wdCollapseEnd)
    Application.ActiveDocument.Comments.Add(Application.Selection.Range, "review this")
}
```
使用 Comments(Index)（其中 Index 是索引号）返回单个 Comment 对象。索引号表示注释在指定选择、范围或文档中的位置。



```JavaScript
/*本示例显示活动文档中第一个备注的作者。*/
function test() {
    alert(ActiveDocument.Comments.Item(1).Author)
}
```


```JavaScript
/*本示例显示选定内容中第一个备注的插入日期和时间。*/
function test() {
    if (Selection.Comments.Count >= 1) {
        alert(Selection.Comments.Item(1).Date)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/member/Add) | 返回一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/obj)** 对象，该对象代表添加到区域中的备注。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/member/Item) | 返回集合中的单个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/member/Application) | 返回一个代表 WPS 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/member/Count) | 返回一个 **Long** 类型的值，该值代表 **Comments** 集合中的项目数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Comments** 对象的父对象。 |