# DocumentWindow.ActivePane

返回一个代表文档窗口中活动窗格的 **Pane** 对象。只读。



## 语法

express.**ActivePane**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

Pane

## 示例


```JavaScript
/*如果活动窗格为幻灯片窗格，则本示例将设置备注窗格为活动窗格。备注窗格是Panes集合中的第三个成员。*/
function test() {
    if (Application.ActiveWindow.ActivePane.ViewType == ppViewSlide) {
        Application.ActiveWindow.Panes.Item(3).Activate()
    }
}
```


```JavaScript
/*本示例显示活动演示文稿上第一个窗口的活动窗格是否处于激活状态。*/
function test() {
    alert(ActivePresentation.Windows.Item(1).ActivePane.Active == msoTrue)
}
```
