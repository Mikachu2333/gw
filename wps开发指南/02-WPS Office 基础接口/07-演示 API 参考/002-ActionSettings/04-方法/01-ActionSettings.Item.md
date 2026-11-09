# ActionSettings.Item

从指定的 **ActionSettings** 集合中返回单个动作设置。



## 语法

express.**Item(Index)**

express   一个代表 **ActionSettings** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | PpMouseActivation | **MouseClick** 或 **MouseOver** 事件的动作设置。 |

## 返回值

ActionSetting

## 说明


*Index* 参数的值可以是下列 **PpMouseActivation** 常量之一：

| ------- | -------- |
| **ppMouseClick** | 用户单击形状时的动作设置。                     |
| **ppMouseOver** | 当鼠标指针定位在指定形状之上时的动作设置。              |

 **Item** 方法是集合的默认成员。



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
/*本示例显示当鼠标指针经过活动窗口选定的第一个形状时，该形状的超链接屏幕提示文字。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseOver)
    alert(actionSetting.Hyperlink.ScreenTip)
}
```
