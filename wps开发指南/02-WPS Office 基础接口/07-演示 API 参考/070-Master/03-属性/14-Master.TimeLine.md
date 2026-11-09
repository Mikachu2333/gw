# Master.TimeLine

返回 **[TimeLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TimeLine/obj)** 对象，该对象代表幻灯片的动画时间线。只读。



## 语法

express.**TimeLine**

express   一个代表 **Master** 对象的变量。

## 类型

TimeLine

## 示例


```JavaScript
/*本示例将一个跳动的动画添加到活动演示文稿第一张幻灯片的幻灯片母版的第一个形状中。*/
function test() {
    let master = ActivePresentation.Slides.Item(1).Master
    let shape = master.Shapes.Item(1)
    master.TimeLine.MainSequence.AddEffect(shape, msoAnimEffectBounce)
}
```


```JavaScript
/*本示例向活动窗口选定的第一张幻灯片的幻灯片母版中添加一个形状并设置该形状的交互式效果。*/
function test() {
    let master = ActiveWindow.Selection.SlideRange.Item(1).Master
    let shape = master.Shapes.AddShape(msoShapeBevel, 400, 200, 150, 100)
    let sequence = master.TimeLine.InteractiveSequences.Add(1)
    sequence.AddEffect(shape, msoAnimEffectStretchy, msoAnimTriggerAfterPrevious, msoAnimTriggerWithPrevious, 1)
}
```
