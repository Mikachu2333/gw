# View.NextHeaderFooter

根据视图中显示的是页眉还是页脚，移动到下一页眉或页脚。



## 语法

express.**NextHeaderFooter()**

express   一个代表 **View** 对象的变量。

## 返回值

void

## 说明


如果显示的是页眉，则该方法移至当前节的下一个页眉（例如，从奇数页眉到偶数页眉）或者下一节的第一个页眉。如果视图显示页脚，则移至下一个页脚。

如果视图显示文档的最后一节的最后一个页眉或页脚，或者如果根本不显示页眉或页脚，则导致出错。



## 示例


```JavaScript
/*本示例显示活动文档的第一页页眉，然后切换到下一个页眉。文档必须至少有两页。*/
function test() {
    ActiveDocument.PageSetup.DifferentFirstPageHeaderFooter = msoTrue
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.SeekView = wdSeekFirstPageHeader
    view.NextHeaderFooter()
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格的当前页页脚，然后切换到下一个页脚。文档必须至少有两页。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    view.SeekView = wdSeekCurrentPageFooter
    view.NextHeaderFooter()
}
```
