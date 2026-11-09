# Comment 对象

代表单个批注。 **Comment** 对象是 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/obj)** 集合的成员。 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/obj)** 集合中包括选定内容、区域或文档中的批注。

## 说明


使用 **Comments** (Index)（其中 Index 是索引号）返回单个 **Comment** 对象。索引号表示注释在指定选择、范围或文档中的位置。


## 示例


```JavaScript
/*本示例显示活动文档上第一个批注的作者。*/
function test() {
    alert(ActiveDocument.Comments.Item(1).Author)
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comments/member/Add)** 方法在指定区域添加一个批注。



```JavaScript
/*本示例为所选内容添加批注，并显示插入该批注的日期和时间。*/
function test() {
    Application.Selection.Collapse(wdCollapseEnd)
    let comment = Application.ActiveDocument.Comments.Add(Selection.Range, "review this")
    alert(comment.Date)
}
```
使用 **[Reference](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Reference)** 属性返回与指定批注关联的引用标记。使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Range)** 属性返回与指定备注关联的文本。



```JavaScript
/*本示例显示活动文档中第一条批注的文本。*/
function test() {
    alert(Application.ActiveDocument.Comments.Item(1).Range.Text)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Delete) | 删除指定的批注。 |
| [DeleteRecursively](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/DeleteRecursively) | 删除指定的批注以及与它关联的所有答复。 |
| [Edit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Edit) | 打开指定批注，以便进行编辑。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Ancestor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Ancestor) | 对于答复现有批注的注释，返回父 **Comment** 对象；对于新（顶级）注释，则返回 **null** 。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Application) | 返回一个代表 WPS 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象。 |
| [Author](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Author) | 返回或设置一个 **String** 类型的值，该值代表某一批注的作者姓名。可读写。 |
| [Date](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Date) | 返回代表批注的插入日期和时间的 **Date** 类型。只读。 |
| [Done](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Done) | 如果指定的批注已标记为“已解决”，则为 **True** 。可读/写， **Boolean** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Initial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Initial) | 返回或设置与指定批注相关联的用户的姓名缩写。 **String** 类型，可读写。 |
| [IsInk](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/IsInk) | 返回一个 **Boolean** 类型的值，该值代表批注是否为手写批注。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Comment** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Range) | 返回代表备注内容的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。 |
| [Reference](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Reference) | 返回代表批注的引用标记的 **Range** 对象。 |
| [Replies](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Replies) | 返回 **Comment** 对象的 **Comments** 集合，这些对象是指定批注的子对象。只读。 |
| [Scope](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/Scope) | 返回一个 **Range** 对象，该对象代表指定批注所标记的文本范围。 |
| [ShowTip](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/member/ShowTip) | 如果在“屏幕提示”中显示与批注相关联的文本，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |