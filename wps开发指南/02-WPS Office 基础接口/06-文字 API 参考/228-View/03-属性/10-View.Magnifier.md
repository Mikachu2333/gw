# View.Magnifier

如果为 **True** ，则在打印预览中将鼠标指针显示为放大镜形状，表示用户可以通过单击来放大页面的某个区域或通过缩小显示比例查看整页或展开多页。 **Boolean** 类型，可读写。



## 语法

express.**Magnifier**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


如果不是在打印预览视图中，则该属性将产生错误。



## 示例


```JavaScript
/*本示例将视图切换到打印预览，并把鼠标指针改为插入点。*/
function test() {
    Application.PrintPreview = true
    ActiveDocument.ActiveWindow.View.Magnifier = false
}
```


```JavaScript
/*本示例将第一个窗口的活动窗格切换为打印预览视图，并显示鼠标指针是否展示为放大镜形状。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    view.Type = wdPrintPreview
    alert(view.Magnifier)
}
```
