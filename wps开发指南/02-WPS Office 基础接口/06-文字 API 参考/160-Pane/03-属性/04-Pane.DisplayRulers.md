# Pane.DisplayRulers

如果在指定窗格中显示标尺，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayRulers**

express   一个代表 **Pane** 对象的变量。

## 类型

boolean

## 说明


 **DisplayRulers** 属性相当于 **“视图”** 菜单上的 **“标尺”** 命令。如果 **DisplayRulers** 为 **False** ，则无论 **DisplayVerticalRuler** 属性处于何状态，都不显示水平和垂直标尺。



## 示例


```JavaScript
/*本示例将活动窗格切换到页面视图并显示水平和垂直标尺。*/
function test() {
    let pane = ActiveDocument.ActiveWindow.ActivePane
    pane.View.Type = wdPrintView
    pane.DisplayRulers = true
    pane.DisplayVerticalRuler = true
}
```


```JavaScript
/*本示例切换活动窗格标尺的显示状态。*/
function test() {
    ActiveWindow.ActivePane.DisplayRulers = !ActiveWindow.ActivePane.DisplayRulers
}
```
