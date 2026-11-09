# Pane.ViewType

返回指定窗格的视图类型。只读。



## 语法

express.**ViewType**

express   一个代表 **Pane** 对象的变量。

## 类型

PpViewType

## 说明


 **ViewType** 属性的值可以是下列 **PpViewType** 常量之一：

| 常量 |
| --------------------------------- |
| **ppViewHandoutMaster**           |
| **ppViewMasterThumbnails**        |
| **ppViewNormal**                  |
| **ppViewNotesMaster**             |
| **ppViewNotesPage**               |
| **ppViewOutline**                 |
| **ppViewPrintPreview**            |
| **ppViewSlide**                   |
| **ppViewSlideMaster**             |
| **ppViewSlideSorter**             |
| **ppViewThumbnails**              |
| **ppViewTitleMaster**             |



## 示例


```JavaScript
/*本示例判断如果当前窗格中的视图是幻灯片视图，则激活备注窗格成为当前窗格。备注窗格是 Panes 集合中的第三个成员。*/
function test() {
    let window = Application.ActiveWindow
    if (window.ActivePane.ViewType == ppViewSlide) {
        window.Panes.Item(3).Activate()
    }
}
```


```JavaScript
/*本示例显示活动窗口的活动窗格的视图类型是否为ppViewNotesPage。*/
function test() {
    alert(ActiveWindow.ActivePane.ViewType == ppViewNotesPage)
}
```
