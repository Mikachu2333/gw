# TextEffectFormat.PresetShape

返回或设置指定艺术字的形状。 **MsoPresetTextEffectShape** 类型，可读写。



## 语法

express.**PresetShape**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoPresetTextEffectShape

## 说明


设置 **PresetTextEffect** 属性可自动设置 **PresetShape** 属性。



## 示例


```JavaScript
/*本示例将活动文档上所有艺术字的形状设置为中心指向下方的 V 形。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        if (ActiveDocument.Shapes.Item(i).Type == msoTextEffect) {
            ActiveDocument.Shapes.Item(i).TextEffect.PresetShape = msoTextEffectShapeChevronDown
        }
    }
}
```


```JavaScript
/*本示例显示选中的第一个艺术字的形状是否为 msoTextEffectShapeCurveDown。*/
function test() {
    alert(Selection.ShapeRange.Item(1).TextEffect.PresetShape == msoTextEffectShapeCurveDown)
}
```
