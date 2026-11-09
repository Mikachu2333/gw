# TextEffectFormat.PresetShape

返回或设置指定艺术字的形状。可读/写。



## 语法

express.**PresetShape**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoPresetTextEffectShape

## 说明


设置 **[PresetTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextEffectFormat/member/PresetTextEffect)** 属性会自动设置 **PresetShape** 属性。

 **PresetShape** 属性的值可以是 **[MsoPresetTextEffectShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPresetTextEffectShape)** 常量之一。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上所有艺术字的形状设置为中心点向下的 V 形。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        slide.Shapes.Item(i).TextEffect.PresetShape = msoTextEffectShapeChevronDown
    }
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个艺术字的形状是否为msoTextEffectShapeRingOutside。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    alert(textEffectFormat.PresetShape == msoTextEffectShapeRingOutside)
}
```
