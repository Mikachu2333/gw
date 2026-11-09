# ActionSetting.SlideShowName

返回或设置自定义幻灯片放映的名称，该幻灯片放映将运行以响应幻灯片放映期间在形状上的鼠标动作。可读/写。



## 语法

express.**SlideShowName**

express   一个代表 **ActionSetting** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置当前演示文稿中第一张幻灯片上第二个形状的鼠标单击动作为：显示名为“techtalk”的自定义幻灯片放映。当该自定义幻灯片放映结束后，将自动返回演示文稿在鼠标单击前的最初状态。*/
function test() {
    let actionSetting = Application.ActivePresentation.Slides.Item(1).Shapes.Item(2).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionNamedSlideShow
    actionSetting.SlideShowName = "techtalk"
    actionSetting.ShowandReturn = msoTrue
}
```


```JavaScript
/*本示例显示当鼠标指针单击活动窗口选定的第一个形状时，将要运行的自定义幻灯片放映的名称。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseClick)
    alert(actionSetting.SlideShowName)
}
```
