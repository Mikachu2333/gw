# Comment.Left

返回一个 **Single** 类型值，该值代表批注的左边缘到幻灯片左边缘的距离（以磅为单位）。只读。



## 语法

express.**Left**

express   一个代表 **Comment** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个批注左边缘到幻灯片左边缘的距离。*/
function test() {
    let comments = ActivePresentation.Slides.Item(1).Comments
    alert(comments.Item(1).Left)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第二张幻灯片的第二个批注左边缘到幻灯片左边缘的距离。*/
function test() {
    let comments = Presentations.Item(1).Slides.Item(2).Comments
    MsgBox(comments.Item(2).Left)
}
```
