# Comment.Text

返回一个 **String** 类型值，该值代表批注中的文本。只读。



## 语法

express.**Text**

express   一个代表 **Comment** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿中第一张幻灯片的第一个批注文本。*/
function test() {
    let comments = ActivePresentation.Slides.Item(1).Comments
    alert(comments.Item(1).Text)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第二张幻灯片的第二个批注内容*/
function test() {
    let comments = Presentations.Item(1).Slides.Item(2).Comments
    alert(comments.Item(2).Text)
}
```
