# Comment 对象

代表给定幻灯片或幻灯片范围的批注。 **Comment** 对象是 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comments/obj)** 集合对象的成员。

## 说明


使用以下属性访问批注数据：

|属性|说明|
| ----------------------------------------------------- | ----------- |
| [ **Author** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Author)                          | 作者的全名       |
| [ **AuthorIndex** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/AuthorIndex)                     | 作者在批注列表中的索引 |
| [ **AuthorInitials** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/AuthorInitials)                  | 作者姓和名的首字母   |
| [ **DateTime** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/DateTime)                        | 创建批注的日期和时间  |
| [ **Text** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Text)                            | 批注的文本       |
| [ **Left** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Left), [ **Top** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Top) | 批注的屏幕坐标     |

使用 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/Comments)** (_index_)（其中 _index_ 为批注的编号）或者使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comments/member/Item)** 方法访问幻灯片上的单个批注。


## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个批注的作者。如果没有批注，则会显示一条消息指出此情况。*/
function test() {
    let comments = ActivePresentation.Slides(1).Comments
    if (comments.Count > 0) {
        MsgBox("The first comment on this slide is by " + comments.Item(1).Author)
    } else {
        MsgBox("There are no comments on this slide.")
    }
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片上所有批注的作者、日期和时间以及内容。*/
function test() {
    let comments = ActivePresentation.Slides(1).Comments
    let strComments = ''
    if (comments.Count > 0) {
        for (let i = comments.Count; i > 0; i--) {
            let cmtExisting = comments.Item(i)
            strComments += `${cmtExisting.Author}\t${cmtExisting.DateTime}\t${cmtExisting.Text}\n`
        }
        MsgBox("The comments in your document are as follows:\n" + strComments)
    } else {
        MsgBox("This slide doesn't have any comments.")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Delete) | 删除指定的 **Comment** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Author](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Author) | 返回一个 **String** 类型值，该值代表指定的 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/obj)** 对象的作者。只读。 |
| [AuthorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/AuthorIndex) | 返回一个 **Long** 类型的值，该值代表给定作者的批注的索引号。给定作者的第一个批注的索引号为 1，第二个批注的索引号为 2。只读。 |
| [AuthorInitials](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/AuthorInitials) | 以只读的 **String** 类型值返回指定 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/obj)** 对象的作者姓和名的首字母。只读。 |
| [DateTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/DateTime) | 返回创建批注时的日期和时间。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Left) | 返回一个 **Single** 类型值，该值代表批注的左边缘到幻灯片左边缘的距离（以磅为单位）。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Text) | 返回一个 **String** 类型值，该值代表批注中的文本。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Top) | 返回一个 **Single** 类型值，该值代表批注的顶端到幻灯片顶端的距离（以磅为单位）。只读。 |