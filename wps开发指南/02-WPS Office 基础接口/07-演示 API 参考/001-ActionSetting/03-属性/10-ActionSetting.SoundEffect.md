# ActionSetting.SoundEffect

返回一个 **SoundEffect** 对象，该对象代表切换到指定幻灯片时播放的声音。只读。



## 语法

express.**SoundEffect**

express   一个代表 **ActionSetting** 对象的变量。

## 类型

SoundEffect

## 示例


```JavaScript
/*本示例设置活动窗口选定的第一个形状在用户单击形状时播放文件 type.wav 声音。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseClick)
    actionSetting.SoundEffect.ImportFromFile("D:\\TestFile\\type.wav")
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个形状在用户单击形状时播放的声音效果的类型是否为ppSoundFile。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(1).ActionSettings.Item(ppMouseClick)
    alert(actionSetting.SoundEffect.Type == ppSoundFile)
}
```
