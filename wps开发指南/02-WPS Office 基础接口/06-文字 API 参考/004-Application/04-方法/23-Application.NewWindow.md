# Application.NewWindow

打开一个新窗口，其中包含与指定窗口相同的文档。返回一个 **Window** 对象。



## 语法

express.**NewWindow()**

express   一个代表 **Application** 对象的变量。

## 返回值

Window

## 说明


对同一文档打开多个窗口时，窗口标题将出现一个冒号（:）和一个数字。如果使用 **Application** 对象的 **NewWindow** 方法，则为活动窗口打开一个新的窗口。下列两条指令在功能上是等效的。

```JavaScript
let window = ActiveDocument.ActiveWindow.NewWindow()
let window = Application.NewWindow()
```



## 示例


```JavaScript
/*本示例在打开一个新窗口之前和之后各显示一条消息，以指示现存窗口的数目。*/
function test() {
    alert(Application.Windows.Count + " windows open")
    Application.NewWindow()
    alert(Application.Windows.Count + " windows open")
}
```


```JavaScript
/*本示例打开一个新窗口，排列所有打开的窗口，再关闭新窗口，然后重新排列打开的窗口。*/
function test() {
    let window = Application.NewWindow()
    Windows.Arrange(wdTiled)
    window.Close()
    Windows.Arrange(wdTiled)
}
```
