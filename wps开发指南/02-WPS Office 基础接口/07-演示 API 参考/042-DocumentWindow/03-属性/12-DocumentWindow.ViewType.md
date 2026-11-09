# DocumentWindow.ViewType

返回或设置指定文档窗口中所包含的视图类型。可读/写。



## 语法

express.**ViewType**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

PpViewType

## 说明


ViewType 可以是下列 PpViewType 常量之一：  
ppViewHandoutMaster  
ppViewMasterThumbnails  
ppViewNormal  
ppViewNotesMaster  
ppViewNotesPage  
ppViewOutline  
ppViewPrintPreview  
ppViewSlide  
ppViewSlideMaster  
ppViewSlideSorter  
ppViewThumbnails  
ppViewTitleMaster



## 示例


```JavaScript
/*如果当前窗口以普通视图显示，本示例将该窗口中的视图更改为幻灯片浏览视图。*/
function test() {
    let window = Application.ActiveWindow
    if (window.ViewType == ppViewNormal) {
        window.ViewType = ppViewSlideSorter
    }
}
```


```JavaScript
/*本示例显示活动演示文稿上第一个窗口视图类型是否为打印预览。*/
function test() {
    alert(ActivePresentation.Windows.Item(1).ViewType == ppViewPrintPreview)
}
```
