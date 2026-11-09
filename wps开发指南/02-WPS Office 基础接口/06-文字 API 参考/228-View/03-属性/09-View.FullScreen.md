# View.FullScreen

如果窗口为全屏显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**FullScreen**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动窗口切换为全屏显示。*/
function test() {
    ActiveDocument.ActiveWindow.View.FullScreen = true
}
```


```JavaScript
/*本示例激活第一个窗口，并切换到非全屏显示。*/
function test() {
    Windows.Item(1).Activate()
    Windows.Item(1).View.FullScreen = false
}
```
