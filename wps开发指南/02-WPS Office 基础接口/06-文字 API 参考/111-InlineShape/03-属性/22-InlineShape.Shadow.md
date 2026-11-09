# InlineShape.Shadow

返回一个 **ShadowFormat** 对象，该对象代表指定形状的阴影格式。只读。



## 语法

express.**Shadow**

express   一个代表 **InlineShape** 对象的变量。

## 类型

ShadowFormat

## 示例


```JavaScript
/*本示例设置活动文档上第二个内嵌形状的阴影的宽度和类型。*/
function test() {
    let shadowFormat = ActiveDocument.InlineShapes.Item(2).Shadow
    shadowFormat.Size = 4
    shadowFormat.Type = msoShadow16
}
```


```JavaScript
/*本示例设置所选的第一个内嵌形状的阴影的类型、颜色和透明度。*/
function test() {
    let shadowFormat = Selection.InlineShapes.Item(1).Shadow
    shadowFormat.Type = msoShadow10
    shadowFormat.ForeColor.RGB = RGB(255, 0, 0)
    shadowFormat.Transparency = 0.3
}
```
