# AnimationSettings.AnimationOrder

返回或设置一个整数，该整数代表指定形状在动画形状集合中的位置。可读/写。



## 语法

express.**AnimationOrder**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

number（int 精度）

## 说明


指定形状必须被赋予动画效果，您才能看到设置该属性的效果。要给一个形状赋予动画效果，必须将 **AnimationSettings** 对象的 **TextLevelEffect** 属性设置为 **ppAnimateLevelNone** 以外的值，并且 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性必须设置为 **msoTrue** 。

将 **AnimationOrder** 属性设置为小于现有最大 **AnimationOrder** 属性值的值可以改变动画顺序。



## 示例


```JavaScript
/*本示例指定活动演示文稿中第二张幻灯片的第二个形状在所有动画中第二个播放。*/
function test() {
    ActivePresentation.Slides.Item(2).Shapes.Item(2).AnimationSettings.AnimationOrder = 2
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状在动画形状集合中的位置。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.AnimationOrder)
}
```
