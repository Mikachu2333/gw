# TextEffectFormat.PresetTextEffect

返回或设置指定艺术字的样式。可读/写。



## 语法

express.**PresetTextEffect**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoPresetTextEffect

## 说明


设置 **PresetTextEffect** 属性会自动设置指定形状的许多其他格式属性。

 **PresetTextEffect** 属性的值可以是 **[MsoPresetTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPresetTextEffect)** 常量之一。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中所有艺术字的样式设置为msoTextEffect1。假设第一张幻灯片中所有形状均为艺术字。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        slide.Shapes.Item(i).TextEffect.PresetTextEffect = msoTextEffect1
    }
}
```


```JavaScript
/*本示例将活动窗口选定的第一个（艺术字）形状的样式设置为msoTextEffect11。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    textEffectFormat.PresetTextEffect = msoTextEffect11
}
```
