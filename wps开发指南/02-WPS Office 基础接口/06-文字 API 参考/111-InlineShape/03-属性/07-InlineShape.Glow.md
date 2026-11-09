# InlineShape.Glow

返回一个 **GlowFormat** 对象，该对象代表发光效果的格式属性。只读。



## 语法

express.**Glow**

express   一个代表 **InlineShape** 对象的变量。

## 类型

GlowFormat

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图形的发光效果的透明度。*/
function test() {
    alert(ActiveDocument.InlineShapes.Item(1).Glow.Transparency)
}
```


```JavaScript
/*本示例设置选中的第二个内嵌图形的发光效果的颜色和辐射长度。*/
function test() {
    let glowFormat = Selection.InlineShapes.Item(2).Glow
    glowFormat.Color.RGB = RGB(255, 0, 0)
    glowFormat.Radius = 10
}
```
