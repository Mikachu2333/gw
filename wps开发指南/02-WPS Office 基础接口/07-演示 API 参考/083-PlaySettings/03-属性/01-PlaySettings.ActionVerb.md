# PlaySettings.ActionVerb

返回或设置包含 OLE 动作的字符串，该动作将在幻灯片放映过程中当指定的 OLE 对象进行动画显示时运行。可读/写。



## 语法

express.**ActionVerb**

express   一个代表 **PlaySettings** 对象的变量。

## 类型

string

## 说明


默认动作指定 OLE 对象在上一个动画或幻灯片切换之后运行的动作（例如，播放一波形文件，或显示数据使得用户可以进行修改）。



## 示例


```JavaScript
/*本示例指定当前演示文稿第一张幻灯片的第三个形状被激活时将自动打开以供编辑。但第三个形状必须是包含声音或视频对象并支持“Edit”动词的 OLE 对象。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(3)
    let playSettings = shape.AnimationSettings.PlaySettings
    playSettings.PlayOnEntry = msoTrue
    playSettings.ActionVerb = "Edit"
}
```


```JavaScript
/*本示例将活动窗口选定的第一个形状中 OLE 动词的字符串设置为“Open”。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.AnimationSettings.PlaySettings.ActionVerb = "Open"
}
```
