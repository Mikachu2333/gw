# View.ShowAllHeadings

在显示所有文本（包括标题和正文）和仅显示标题之间切换。



## 语法

express.**ShowAllHeadings()**

express   一个代表 **View** 对象的变量。

## 返回值

void

## 说明


如果不是大纲视图或者主控文档视图，此方法将导致出错。



## 示例


```JavaScript
/*此示例使用 ShowHeading 方法显示所有标题（不含任何正文文本），然后切换显示以在大纲视图中展示所有文本（标题和正文文本）。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdOutlineView
    view.ShowHeading(9)
    view.ShowAllHeadings()
}
```


```JavaScript
/*本示例将第一个窗口的活动窗格切换为大纲视图，然后在显示所有文本（包括标题和正文）和仅显示标题之间切换。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    view.Type = wdOutlineView
    view.ShowAllHeadings()
}
```
