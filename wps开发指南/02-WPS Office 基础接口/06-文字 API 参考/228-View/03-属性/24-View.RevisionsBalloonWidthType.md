# View.RevisionsBalloonWidthType

设置或返回一个 **WdRevisionsBalloonWidthType** 常量，该常量代表指定 WPS 如何测量修订气球的宽度的全局设置。可读写。



## 语法

express.**RevisionsBalloonWidthType**

express   一个代表 **View** 对象的变量。

## 类型

WdRevisionsBalloonWidthType

## 说明


 **RevisionsBalloonWidthType** 属性设置用于设置 **RevisionsBalloonWidth** 属性的度量单位。



## 示例


```JavaScript
/*本示例将修订气球的宽度设为文档宽度的 25%。本示例假定活动窗口中的文档包含多个审阅者所作的修订，并且修订显示于气球中。*/
function test() {
    let view = ActiveWindow.View
    view.RevisionsBalloonWidthType = wdBalloonWidthPercent
    view.RevisionsBalloonWidth = 25
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格中修订气球宽度的单位类型是否为wdBalloonWidthPoints。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.RevisionsBalloonWidthType == wdBalloonWidthPoints)
}
```
