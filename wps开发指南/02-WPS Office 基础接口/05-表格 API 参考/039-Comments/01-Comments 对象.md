# Comments 对象

由单元格批注组成的集合。

## 说明


每个批注都由一个 [ **Comment** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj) 对象代表。

使用 **Comments** 属性可返回 **Comments** 集合。


## 示例


```JavaScript
/*本示例隐藏第一张工作表上的所有批注。*/
function test() {
    let cmt = Application.Worksheets.Item(1).Comments
    for (let c = 1; c <= cmt.Count; c++) {
        cmt.Item(c).Visible = false
    }
}
```
使用 **AddComment** 方法可在区域内添加批注。



```JavaScript
/*本示例在第一张工作表的单元格 E5 上添加一个批注。*/
function test() {
    let myComment = Application.Worksheets.Item(1).Range("E5").AddComment()
    myComment.Visible = false
    myComment.Text("reviewed on " + Date())
}
```
使用 **Comments** (*index*)（其中 *index* 为批注号）可返回 **Comments** 集合中的单条批注。



```JavaScript
/*本示例隐藏第一张工作表上的第二个批注。*/
function test() {
    Application.Worksheets.Item(1).Comments.Item(2).Visible = false
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comments/member/Item) | 从集合中返回一个对象，包含在集合中的一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comments/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comments/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comments/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comments/member/Parent) | 返回指定对象的父对象。只读。 |