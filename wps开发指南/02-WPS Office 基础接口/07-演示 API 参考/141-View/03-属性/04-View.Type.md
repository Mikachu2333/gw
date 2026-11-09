# View.Type

返回一个 PpViewType 常量，该常量代表视图的类型。只读。



## 语法

express.**Type**

express   一个代表 **View** 对象的变量。

## 类型

PpViewType

## 说明


 **Type** 属性的值可以是下列 **PpViewType** 常量之一：

| 常量 |
| --- |
| **ppViewHandoutMaster**  |
| **ppViewMasterThumbnails** |
| **ppViewNormal**  |
| **ppViewNotesMaster** |
| **ppViewNotesPage**  |
| **ppViewOutline**  |
| **ppViewPrintPreview**  |
| **ppViewSlide**  |
| **ppViewSlideMaster** |
| **ppViewSlideSorter**  |
| **ppViewThumbnails**  |
| **ppViewTitleMaster** |



## 示例


```JavaScript
/*本示例显示活动窗口视图的类型是否为ppViewNotesPage。*/
function test() {
    alert(ActiveWindow.View.Type == ppViewNotesPage)
}
```


```JavaScript
/*本示例显示第一个窗口视图的类型是否为ppViewNormal。*/
function test() {
    alert(Windows.Item(1).View.Type == ppViewNormal)
}
```
