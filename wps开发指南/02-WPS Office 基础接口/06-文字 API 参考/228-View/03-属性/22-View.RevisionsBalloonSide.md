# View.RevisionsBalloonSide

设置或返回一个 **WdRevisionsBalloonMargin** 常量，指定 WPS 是否在文档的左边距或右边距中显示修订气球。



## 语法

express.**RevisionsBalloonSide**

express   一个代表 **View** 对象的变量。

## 类型

WdRevisionsBalloonMargin

## 示例


```JavaScript
/*本示例在左右边距之间切换修订气球。本示例假定活动窗口中的文档包含由一个或多个审阅者所做的修订，并且修订显示于气球中。*/
function test() {
    let view = ActiveWindow.View
    if (view.RevisionsBalloonSide == wdLeftMargin) {
        view.RevisionsBalloonSide = wdRightMargin
    } else {
        view.RevisionsBalloonSide = wdLeftMargin
    }
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否在右侧展示修订气球。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.RevisionsBalloonSide == wdRightMargin)
}
```
