# ActionSetting.AnimateAction

发生指定的鼠标操作时，指定形状的颜色是否立即反转。可读/写。



## 语法

express.**AnimateAction**

express   一个代表 **ActionSetting** 对象的变量。

## 类型

MsoTriState

## 说明


 **AnimateAction** 可以是下列 MsoTriState 常量之一：

| 常量 | 说明 |
| ------- | -------- |
| **msoFalse** | 发生指定的鼠标操作时，指定形状的颜色不立即反转。 |
| **msoTrue**  | 发生指定的鼠标操作时，指定形状的颜色立即反转。 |



## 示例


```JavaScript
/*本示例设置在幻灯片放映过程中，单击活动演示文稿第一张幻灯片的第三个形状时播放掌声，并立即反转该形状的颜色。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(3).ActionSettings.Item(ppMouseClick)
    actionSetting.SoundEffect.Name = "applause.wav"
    actionSetting.AnimateAction = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状在用户单击形状时该形状的颜色是否立即反转。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseClick)
    alert(actionSetting.AnimateAction == msoTrue)
}
```
