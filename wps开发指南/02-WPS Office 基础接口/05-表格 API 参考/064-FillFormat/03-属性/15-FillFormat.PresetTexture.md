# FillFormat.PresetTexture

返回指定填充的预设纹理。 **MsoPresetTexture** ，只读。



## 语法

express.**PresetTexture**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoPresetTexture

## 说明


使用 **PresetTextured** 方法可设置填充的预设纹理。



## 示例


```JavaScript
/*本示例显示第一张工作表中第一个形状填充的预设纹理是否为水滴纹理。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    alert(fillFormat.PresetTexture == msoTextureWaterDroplets)
}
```


```JavaScript
/*本示例判断活动工作表中第二个形状的预设纹理。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    if (fillFormat.PresetTexture == msoPresetTextureMixed) {
        alert("未使用纹理")
    } else {
        alert("其它纹理")
    }
}
```
