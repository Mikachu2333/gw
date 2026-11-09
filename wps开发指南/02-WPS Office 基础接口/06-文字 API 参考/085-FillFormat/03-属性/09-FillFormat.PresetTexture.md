# FillFormat.PresetTexture

返回指定填充的预设纹理。只读 **MsoPresetTexture** 类型。



## 语法

express.**PresetTexture**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoPresetTexture

## 说明


使用 **[PresetTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/PresetTextured)** 方法可指定填充的预设纹理。



## 示例


```JavaScript
/*本示例将一个矩形添加至活动文档中，并将其预设纹理设置与第二个图形的预设纹理相同。只有在第二个图形已有预设填充纹理时，本示例才会生效。*/
function test() {
    let texture = ActiveDocument.Shapes.Item(2).Fill.PresetTexture
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 100, 0, 40, 80).Fill
    fillFormat.PresetTextured(texture)
}
```


```JavaScript
/*本示例显示活动文档上第一个内嵌形状填充的纹理是否为msoTextureOak。*/
function test() {
    let fillFormat = ActiveDocument.InlineShapes.Item(1).Fill
    alert(fillFormat.PresetTexture == msoTextureOak)
}
```
