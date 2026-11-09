# Comment.DateTime

返回创建批注时的日期和时间。



## 语法

express.**DateTime**

express   一个代表 **Comment** 对象的变量。

## 类型

Date

## 说明


请勿将该属性与 **[DateAndTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/DateAndTime)** 属性相混淆，后者应用于幻灯片的页眉和页脚。



## 示例


```JavaScript
/*本示例显示活动演示文稿中第一张幻灯片上所有批注的信息。*/
function test() {
    let comments = Application.ActivePresentation.Slides(1).Comments
    let strAuthorInfo = ''
    for (let i = comments.Count; i > 0; i--) {
        let cmtExisting = comments.Item(i)
        strAuthorInfo += `${cmtExisting.Author}'s comment #${cmtExisting.AuthorIndex} (${cmtExisting.Text}) was created on ${cmtExisting.DateTime}\n`
    }
    if (strAuthorInfo.length > 0) {
        MsgBox(strAuthorInfo)
    } else {
        MsgBox("There are no comments on this slide.")
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第二张幻灯片中第一个批注的创建时间。*/
function test() {
    let comments = Presentations.Item(1).Slides.Item(2).Comments
    alert(comments.Item(1).DateTime)
}
```
