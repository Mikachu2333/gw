# View.SplitSpecial

返回或设置活动窗口的窗格。 **WdSpecialPane** 类型，可读写。



## 语法

express.**SplitSpecial**

express   一个代表 **View** 对象的变量。

## 类型

WdSpecialPane

## 示例


```JavaScript
/*本示例将在活动窗口的一个单独窗格中显示修订窗格。*/
function test() {
    ActiveDocument.ActiveWindow.View.SplitSpecial = wdPaneRevisions
}
```


```JavaScript
/*本示例将活动窗口的窗格设置为wdPaneRevisionsVert。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdNormalView
    view.SplitSpecial = wdPaneRevisionsVert
}
```
