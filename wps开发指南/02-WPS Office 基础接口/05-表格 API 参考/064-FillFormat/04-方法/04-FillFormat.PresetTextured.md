# FillFormat.PresetTextured

将指定填充格式设为预设纹理。



## 语法

express.**PresetTextured(PresetTexture)**

express   一个代表 **FillFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetTexture | 必选 | MsoPresetTexture | 要应用的纹理类型。 |

## 返回值

void

## 示例


```JavaScript
/*此示例以第一个形状中使用的填充样式对第二个形状的填充格式进行设置。*/
function test() {
    let fillFormat1 = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    if (fillFormat1.Type == msoFillTextured) {
        let fillFormat2 = Application.Worksheets.Item(1).Shapes.Item(2).Fill
        fillFormat2.Visible = true
        if (fillFormat1.TextureType == msoTexturePreset) {
            fillFormat2.PresetTextured(fillFormat1.PresetTexture)
        } else {
            fillFormat2.UserTextured(fillFormat1.TextureName)
        }
    }
}
```


```JavaScript
/*本示例将活动工作表中第二个形状的预设纹理设置成棕色大理石纹理。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    fillFormat.PresetTextured(msoTextureBrownMarble)
}
```
