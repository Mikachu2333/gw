# DocumentWindow.View

返回一个代表指定文档窗口中视图的 **View** 对象。只读。



## 语法

express.**View**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

View

## 示例


```JavaScript
/*本示例设置第一个窗口的大小，并将视图设置为自动适应该窗口大小。*/
function test() {
    let window = Application.Windows.Item(1)
    window.Height = 200
    window.Width = 250
    window.View.ZoomToFit = msoTrue
}
```


```JavaScript
/*本示例在第一个文档窗口切换到第三张幻灯片。*/
function test() {
    ActivePresentation.Windows.Item(1).View.GotoSlide(3)
}
```
