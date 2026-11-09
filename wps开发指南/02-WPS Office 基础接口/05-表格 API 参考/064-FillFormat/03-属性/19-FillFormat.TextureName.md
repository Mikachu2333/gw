# FillFormat.TextureName

返回指定填充的自定义纹理文件名称。 **String** 型，只读。



## 语法

express.**TextureName**

express   一个代表 **FillFormat** 对象的变量。

## 类型

string

## 说明


使用 **UserPicture** 或 **UserTextured** 方法可设置填充的纹理文件。



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
/*本示例显示活动工作表中第二个形状填充的自定义纹理文件的名称。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    fillFormat.UserTextured("E:/pictures/1.png")
    alert(fillFormat.TextureName)
}
```
