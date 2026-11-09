# View.PreviousHeaderFooter

根据视图中显示的是页眉还是页脚，移动到前一页眉或页脚。



## 语法

express.**PreviousHeaderFooter()**

express   一个代表 **View** 对象的变量。

## 返回值

void

## 说明


如果视图显示的是页眉，则该方法移至当前节的前一个页眉（例如，从偶数页眉到奇数页眉）或者前一节的最后一个页眉。如果视图显示页脚，则移至前一个页脚。

如果视图显示文档的第一节的第一个页眉或页脚，或者如果根本不显示页眉或页脚，则导致出错。



## 示例


```JavaScript
/*本示例插入一个偶数页分节符，将活动窗口切换到页面视图，显示当前页眉，然后切换到前一个页眉。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.InsertBreak(wdSectionBreakEvenPage)
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.SeekView = wdSeekCurrentPageHeader
    view.PreviousHeaderFooter()
}
```


```JavaScript
/*本示例插入一个奇数页分节符，并在第一个窗口上活动窗格的页面视图中展示当前页页脚，然后切换到前一个页脚。*/
function test() {
    Selection.InsertBreak(wdSectionBreakOddPage)
    let view = Windows.Item(1).ActivePane.View
    view.SeekView = wdSeekCurrentPageFooter
    view.PreviousHeaderFooter()
}
```
