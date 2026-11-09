# Comments.Add

返回一个代表添加到幻灯片中的新批注的 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Comment/obj)** 对象。



## 语法

express.**Add(Left, Top, Author, AuthorInitials, Text)**

express   一个代表 **Comments** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Left | 必选 | number（float 精度） | 批注左边缘相对于演示文稿左边缘的位置，以磅为单位。 |
| Top | 必选 | number（float 精度） | 批注上边缘相对于演示文稿上边缘的位置，以磅为单位。 |
| Author | 必选 | string | 批注作者。 |
| AuthorInitials | 必选 | string | 作者的姓名首字母。 |
| Text | 必选 | string | 批注文字。 |

## 返回值

Comment

## 说明


此方法现已隐藏。它将继续在现有位置工作，但不能添加到代码中的新位置。对于新式批注，此方法只能将注释归因于已登录用户，而不能将任何通过“Author”字段传入的用户。若要将新式注释归于其他作者，请更新对 **[Add2](#TODO)** 的调用。对于旧批注，添加将继续按预期工作。



## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片上添加一个新批注。*/
function test() {
    let comments = ActivePresentation.Slides.Item(1).Comments
    comments.Add(100, 100, "WPP", "W", "test")
}
```


```JavaScript
/*本示例在第一个演示文稿的第一张幻灯片上添加一个新批注，然后显示最新批注的文本内容。*/
function test() {
    let comments = Presentations.Item(1).Slides.Item(1).Comments
    comments.Add(100, 100, "WPP", "W", "test")
    alert(comments.Item(comments.Count).Text)
}
```
