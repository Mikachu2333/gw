# EffectParameters 对象

代表 **[Effect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/obj)** 对象的各种动画参数，如颜色、字体、大小和方向。

## 说明


使用 **Effect** 对象的 **[EffectParameters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Effect/member/EffectParameters)** 属性返回一个 **EffectParameters** 对象。


## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个心形，并对该形状添加一个移动路径动画，然后设置该形状为相对移动路径。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeHeart, 100, 100, 150, 150)
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.AddEffect(shape, msoAnimEffectPathEqualTriangle)
    effect.Timing.Duration = 3
    effect.EffectParameters.Relative = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第二个动画效果使用的方向是否为msoAnimDirectionRight。*/
function test() {
    let effectParameters = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectParameters
    alert(effectParameters.Direction == msoAnimDirectionRight)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Direction](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectParameters/member/Direction) | 决定动画效果使用的方向。只有当效果使用方向时才可以使用此属性。可读/写。 |
| [Relative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectParameters/member/Relative) | 确定是否设置相对于形状位置的动作位置。可读/写。 |