# View.ReadingLayoutActualView

设置或返回一个 **Boolean** 类型的值，该值代表是否使用与打印页面相同的版式在阅读版式视图中显示页面。



## 语法

express.**ReadingLayoutActualView**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


在阅读版式视图中，页面中不显示（能在普通视图和页面视图看到的）包含在打印页面中的全部内容。这些内容将在屏幕中予以显示。当 **ReadingLayoutActualView** 属性设为 **True** 时，文档显示将与打印出的页面一致。在较小的显示器上，会使用一定比例进行缩放，这将使文档不易阅读，在较大的显示器上显示效果就很好。



## 示例


```JavaScript
/*本示例在阅读版式视图中显示的页面与打印出来的页面相同。*/
function test() {
    ActiveWindow.View.ReadingLayout = true
    ActiveWindow.View.ReadingLayoutActualView = true
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格是否使用与打印页面相同的版式在阅读版式视图中显示页面。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ReadingLayoutActualView)
}
```
