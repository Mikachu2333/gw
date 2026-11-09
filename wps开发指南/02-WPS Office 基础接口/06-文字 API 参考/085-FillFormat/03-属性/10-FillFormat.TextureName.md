# FillFormat.TextureName

返回指定填充的自定义纹理文件名称。 **String** 类型，只读。



## 语法

express.**TextureName**

express   一个代表 **FillFormat** 对象的变量。

## 类型

string

## 说明


使用 **[UserTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/UserTextured)** 方法可设置用于填充的纹理文件。



## 示例


```JavaScript
/*本示例向活动文档添加椭圆，然后判断如果文档中第二个图形是以用户自定义纹理填充的，则使用和第二个图形相同的纹理填充新椭圆；如果第二个图形是以其他类型的纹理填充的，则以绿色大理石纹理填充新椭圆。本示例假定活动文档至少已包含两个图形。*/
function test() {
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeOval, 0, 0, 200, 90).Fill
    let fillFormat2 = ActiveDocument.Shapes.Item(2).Fill
    if (fillFormat2.TextureType == msoTextureUserDefined) {
        fillFormat.UserTextured(`D:\\示例\\${fillFormat2.TextureName}.bmp`)
    } else {
        fillFormat.PresetTextured(msoTextureGreenMarble)
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌形状填充的自定义纹理文件的名称。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    alert(fillFormat.TextureName)
}
```
