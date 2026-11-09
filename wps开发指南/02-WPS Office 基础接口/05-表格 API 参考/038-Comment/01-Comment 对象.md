# Comment 对象

代表单元格批注。

## 说明


 **Comment** 对象是 **Comments** 集合的成员。

使用 **Comment** 属性可返回 **Comment** 对象。


## 示例


```JavaScript
/*本示例更改单元格 E5 中的批注文本。*/
function test() {
    Application.Worksheets.Item(1).Range("E5").Comment.Text("reviewed on " + Date())
}
```
使用 **Comments** (*index*)（其中 *index* 为批注号）可返回 **Comments** 集合中的单条批注。



```JavaScript
/*本示例隐藏第一张工作表中的第二条批注。*/
function test() {
    Application.Worksheets.Item(1).Comments.Item(2).Visible = false
}
```
使用 **AddComment** 方法可在区域内添加批注。



```JavaScript
/*本示例在第一张工作表的单元格 E5 中添加批注。*/
function test() {
    let myComment = Application.Worksheets.Item(1).Range("E5").AddComment()
    myComment.Visible = false
    myComment.Text("reviewed on " + Date())
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Delete) | 删除对象。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Next) | 返回一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj)** 对象，该对象代表下一条批注。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Previous) | 返回一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj)** 对象，该对象代表前一条批注。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Text) | 设置批注文本。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Author](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Author) | 返回或设置批注的作者。 **String** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Parent) | 返回指定对象的父对象。只读。 |
| [Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Shape) | 返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，它代表连接到指定批注的形状。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |