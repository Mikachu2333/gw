# Window.DisplayVerticalRuler

如果在指定的窗口或窗格中显示垂直标尺，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayVerticalRuler**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


垂直标尺只出现在页面视图中，且 **DisplayRulers** 属性必须设置为 **True** 。



## 示例


```JavaScript
/*本示例将 Windows 集合中的各个窗口切换到页面视图并显示水平和垂直标尺。*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        let window = Windows.Item(i)
        window.View.Type = wdPrintView
        window.DisplayRulers = true
        window.DisplayVerticalRuler = true
    }
}
```


```JavaScript
/*本示例隐藏活动窗口的水平和垂直标尺。*/
function test() {
    ActiveDocument.ActiveWindow.DisplayVerticalRuler = false
    ActiveDocument.ActiveWindow.DisplayRulers = false
}
```
