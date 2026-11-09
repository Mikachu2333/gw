# Effect.Shape

返回一个代表具有动画效果的形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 语法

express.**Shape**

express   一个代表 **Effect** 对象的变量。

## 类型

Shape

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个动画效果的形状中文本设为水平方向。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    effect.Shape.TextFrame.Orientation = msoTextOrientationHorizontal
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第一个动画效果的形状名称。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Shape.Name)
}
```
