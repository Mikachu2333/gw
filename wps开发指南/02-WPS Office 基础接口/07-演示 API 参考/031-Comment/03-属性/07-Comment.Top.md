# Comment.Top

返回一个 **Single** 类型值，该值代表批注的顶端到幻灯片顶端的距离（以磅为单位）。只读。



## 语法

express.**Top**

express   一个代表 **Comment** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个批注顶端到幻灯片顶端的距离。*/
function test() {
    let comments = ActivePresentation.Slides.Item(1).Comments
    alert(comments.Item(1).Top)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第二张幻灯片的第二个批注顶端到幻灯片顶端的距离*/
function test() {
    let comments = Presentations.Item(1).Slides.Item(2).Comments
    MsgBox(comments.Item(2).Top)
}
```
