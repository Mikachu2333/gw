# FillFormat.TextureType

返回指定填充的纹理类型。 **MsoTextureType** ，只读。



## 语法

express.**TextureType**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTextureType

## 说明


使用 **UserTextured** 方法可设置填充的纹理类型。



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
/*本示例显示活动工作表中第一个形状填充的纹理类型是否为预设纹理类型。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    alert(fillFormat.TextureType == msoTexturePreset)
}
```
