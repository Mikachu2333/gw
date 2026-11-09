# DocumentWindow.WindowState

返回或设置指定窗口的状态。可读/写。



## 语法

express.**WindowState**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

PpWindowState

## 说明


WindowState 可以是下列 PpWindowState 常量之一：
ppWindowMaximized  
ppWindowMinimized  
ppWindowNormal  
当窗口状态为 ppWindowNormal 时，该窗口既未最大化也未最小化。



## 示例


```JavaScript
/*以下示例将当前窗口最大化。*/
function test() {
    Application.ActiveWindow.WindowState = ppWindowMaximized
}
```


```JavaScript
/*本示例显示活动演示文稿上第一个窗口状态是否为正常状态。*/
function test() {
    alert(ActivePresentation.Windows.Item(1).WindowState == ppWindowNormal)
}
```
