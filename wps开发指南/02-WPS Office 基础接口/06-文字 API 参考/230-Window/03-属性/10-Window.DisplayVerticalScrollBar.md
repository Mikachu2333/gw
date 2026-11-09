# Window.DisplayVerticalScrollBar

如果在指定的窗口中显示垂直滚动条，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayVerticalScrollBar**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在 Windows 集合的各个窗口中显示垂直和水平滚动条。*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        let window = Windows.Item(i)
        window.DisplayHorizontalScrollBar = true
        window.DisplayVerticalScrollBar = true
    }
}
```


```JavaScript
/*本示例切换显示活动窗口中的垂直滚动条。*/
function test() {
    ActiveDocument.ActiveWindow.DisplayVerticalScrollBar = !ActiveDocument.ActiveWindow.DisplayVerticalScrollBar
}
```
