# Comment.AuthorIndex

返回一个 **Long** 类型的值，该值代表给定作者的批注的索引号。给定作者的第一个批注的索引号为 1，第二个批注的索引号为 2。只读。



## 语法

express.**AuthorIndex**

express   一个代表 **Comment** 对象的变量。

## 类型

number（int 精度）

## 说明


此属性不适用于新式注释。



## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的作者及其批注索引的信息。*/
function test() {
    let comments = Application.ActivePresentation.Slides.Item(1).Comments
    let strAuthorInfo = ''
    if (comments.Count > 0) {
        for (let i = comments.Count; i > 0; i--) {
            let cmtComment = comments.Item(i)
            strAuthorInfo += 'Comment Number:  ' + cmtComment.AuthorIndex + '\n'
            strAuthorInfo += 'Made by:  ' + cmtComment.Author + '\n'
            strAuthorInfo += 'Says:  ' + cmtComment.Text + '\n\n'
        }
    }
    MsgBox('The comments for this slide are as follows: \n\n' + strAuthorInfo)
}
```


```JavaScript
/*本示例显示第一个演示文稿第二张幻灯片中第一个批注的AuthorIndex属性值。*/
function test() {
    let comments = Presentations.Item(1).Slides.Item(2).Comments.Item(1)
    alert(comments.AuthorIndex)
}
```
