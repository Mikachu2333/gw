# Comment.AuthorInitials

以只读的 **String** 类型值返回指定 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/obj)** 对象的作者姓和名的首字母。只读。



## 语法

express.**AuthorInitials**

express   一个代表 **Comment** 对象的变量。

## 类型

string

## 说明


该属性只返回作者姓和名的首字母。要返回作者的姓名，请使用 **[Author](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/Author)** 属性。在向演示文稿添加新批注时，请指定作者的姓和名的首字母。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加批注，并以消息的形式显示第一个批注作者姓名与首字母。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Comments.Add(100, 100, "Jeff Smith", "JS", "This is a new comment added to the first slide.")
    MsgBox(`${slide.Comments.Item(1).Author} ${slide.Comments.Item(1).AuthorInitials}`)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第二张幻灯片中第一个批注的作者姓名缩写。*/
function test() {
    let comments = Presentations.Item(1).Slides.Item(2).Comments
    alert(comments.Item(1).AuthorInitials)
}
```
