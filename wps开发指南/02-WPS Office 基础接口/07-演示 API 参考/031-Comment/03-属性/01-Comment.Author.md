# Comment.Author

返回一个 **String** 类型值，该值代表指定的 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/obj)** 对象的作者。只读。



## 语法

express.**Author**

express   一个代表 **Comment** 对象的变量。

## 类型

string

## 说明


该属性只返回作者的姓名。若要返回作者姓和名的首字母，请使用 **[AuthorInitials](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/member/AuthorInitials)** 属性。在向演示文稿中添加新批注时，请指定批注的作者。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加批注，然后以消息的形式显示作者的姓名以及姓和名的首字母。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Comments.Add(100, 100, "Jeff Smith", "JS", "This is a new comment added to the first slide.")
    MsgBox(`This comment was created by ${slide.Comments.Item(1).Author} (${slide.Comments.Item(1).AuthorInitials}).`)
}
```


```JavaScript
/*本示例删除活动演示文稿的第二张幻灯片中由 Jeff Smith 添加的所有批注。*/
function test() {
    let Comments = ActivePresentation.Slides.Item(2).Comments
    for (let i = Comments.Count; i > 0; i--) {
        if (Comments.Item(i).Author == "Jeff Smith") {
            Comments.Item(i).Delete()
        }
    }
}
```
