# FillFormat.TextureName

返回指定填充的自定义纹理文件名称。只读 **String** 类型。



## 语法

express.**TextureName**

express   一个代表 **FillFormat** 对象的变量。

## 类型

string

## 说明


此属性为只读。使用 **[UserTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/UserTextured)** 方法可设置填充的纹理文件。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个椭圆。如果该幻灯片第一个形状使用用户定义的纹理填充，则新椭圆使用和第一个形状相同的填充。如果第一个形状使用其他任何类型的填充，则新椭圆使用绿色大理石填充。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let fillFormat = slide.Shapes.AddShape(msoShapeOval, 0, 0, 200, 90).Fill
    let fillFormat1 = slide.Shapes.Item(1).Fill
    if (fillFormat1.Type == msoFillTextured && fillFormat1.TextureType == msoTextureUserDefined) {
        fillFormat.UserTextured(`D:\\TestFile\\${fillFormat1.TextureName}.bmp`)
    } else {
        fillFormat.PresetTextured(msoTextureGreenMarble)
    }
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状填充的自定义纹理文件名称。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.TextureName)
}
```
