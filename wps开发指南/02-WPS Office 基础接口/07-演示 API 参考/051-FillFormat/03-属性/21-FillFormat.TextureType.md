# FillFormat.TextureType

返回指定填充的纹理类型。 **MsoTextureType** 类型，只读。



## 语法

express.**TextureType**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTextureType

## 说明


使用 **[PresetTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/PresetTextured)** 或 **[UserTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/UserTextured)** 方法可设置填充的纹理类型。

 **TextureType** 属性的值可以是下列 **MsoTextureType** 常量之一：

| 常量 |
| ---------------------------------------- |
| **msoTexturePreset**                         |
| **msoTextureTypeMixed**                      |
| **msoTextureUserDefined**                    |



## 示例


```JavaScript
/*本示例遍历活动演示文稿上第一张幻灯片中所有形状，如果形状使用用户定义的纹理类型，则将其填充的预设纹理设置为画布纹理。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Fill.TextureType == msoTextureUserDefined) {
            shapes.Item(i).Fill.PresetTextured(msoTextureCanvas)
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状填充的纹理类型是否为msoTextureTypeMixed。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.TextureType == msoTextureTypeMixed)
}
```
