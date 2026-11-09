# View.DisplayPageBoundaries

如果为 **True** ，则显示文档顶部和底部页边距（空白区域）并在页面间显示灰色区域（灰色间隔）。 **Boolean** 类型，可读写。



## 语法

express.**DisplayPageBoundaries**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


如果为 **False** ，则隐藏这些白色和灰色区域，使页面形成很长的一页。默认值为 **True** 。

该功能仅在页面视图中可用，并仅影响页面顶部和底部的灰色间隔，而不影响页面的左右两边。该设置影响指定窗口中的文档。保存该文档时，同时保存该设置的状态。



## 示例


```JavaScript
/*本示例将当前视图更改为“页面视图”并隐藏文档页面之间的白色和灰色间隔。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.DisplayPageBoundaries = false
}
```


```JavaScript
/*本示例显示是否在第一个窗口上活动窗格的页面视图中展示页面之间的白色和灰色间隔。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.DisplayPageBoundaries)
}
```
