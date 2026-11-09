# Pane.DisplayVerticalRuler

如果在指定窗格中显示垂直标尺，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayVerticalRuler**

express   一个代表 **Pane** 对象的变量。

## 类型

boolean

## 说明


仅当 **DisplayRulers** 属性设置为 **True** 时，垂直标尺才会出现在打印布局视图中。



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
/*本示例切换活动窗格垂直标尺的显示状态。*/
function test() {
    ActiveWindow.ActivePane.DisplayVerticalRuler = !ActiveWindow.ActivePane.DisplayVerticalRuler
}
```
