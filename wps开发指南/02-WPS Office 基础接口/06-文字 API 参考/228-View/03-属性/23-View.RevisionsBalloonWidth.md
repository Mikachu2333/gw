# View.RevisionsBalloonWidth

设置或返回一个 **Single** 类型的值，该值代表 WPS 中用于指定修订气球宽度的全局设置。可读写。



## 语法

express.**RevisionsBalloonWidth**

express   一个代表 **View** 对象的变量。

## 类型

number（float 精度）

## 说明


修订气球的宽度包括文档边距与气球边缘之间 0.5 英寸宽的填充距离以及气球边缘与纸张边缘之间八分之一英寸的间距。 WPS 会在纸的左右边缘处添加空白。此宽度会扩展到边距，但并不更改文档的宽度或纸张大小。可以使用 **RevisionsBalloonWidthType** 属性指定在设置 **RevisionsBalloonWidth** 属性时的度量单位。



## 示例


```JavaScript
/*本示例将修订气球的宽度设为 3 英寸并在左边距显示修订气球。本示例假定活动窗口中的文档包含由一个或多个审阅者所做的修订，并且修订显示于气球中。*/
function test() {
    let view = ActiveWindow.View
    view.RevisionsBalloonWidthType = wdBalloonWidthPoints
    view.RevisionsBalloonWidth = InchesToPoints(3)
    view.RevisionsBalloonSide = wdLeftMargin
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格中修订气球的宽度。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    view.RevisionsBalloonWidthType = wdBalloonWidthPoints
    alert(view.RevisionsBalloonWidth + " 磅")
}
```
