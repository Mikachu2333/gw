# Window.DisplayRulers

如果在指定的窗口或窗格中显示标尺，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayRulers**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


该属性与 **视图** 菜单中的 **标尺** 命令等效。如果 **DisplayRulers** 为 **False** ，则无论 **DisplayVerticalRuler** 属性的状态如何，都不显示水平和垂直标尺。



## 示例


```JavaScript
/*本示例切换活动窗口中的标尺显示。*/
function test() {
    ActiveWindow.DisplayRulers = !ActiveWindow.DisplayRulers
}
```


```JavaScript
/*本示例将窗口切换到页面视图并显示水平和垂直标尺。*/
function test() {
    ActiveWindow.View.Type = wdPrintView
    ActiveWindow.DisplayVerticalRuler = true
    ActiveWindow.DisplayRulers = true
}
```
