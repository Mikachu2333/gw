# FillFormat.TextureType

返回指定填充的纹理类型。 **MsoTextureType** 类型，只读。



## 语法

express.**TextureType**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTextureType

## 说明


该属性为只读。使用 **[PresetTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/PresetTextured)** 、 **[UserPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/UserPicture)** 或 **[UserTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/UserTextured)** 方法可设置填充的纹理类型。



## 示例


```JavaScript
/*本示例将活动文档中所有以自定义纹理填充的图形更改为使用画布纹理填充。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        let fillFormat = shapes.Item(i).Fill
        if (fillFormat.TextureType == msoTextureUserDefined) {
            fillFormat.PresetTextured(msoTextureCanvas)
        }
    }
}
```


```JavaScript
/*本示例判断第一个文档上第一个内嵌形状的填充的纹理类型，并通知用户。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    switch (fillFormat.TextureType) {
        case msoTexturePreset:
            alert("预设纹理类型")
            break
        case msoTextureTypeMixed:
            alert("其他状态的组合")
            break
        case msoTextureUserDefined:
            alert("用户定义的纹理类型")
            break
    }
}
```
