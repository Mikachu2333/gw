# FillFormat.TextureOffsetY

返回或设置纹理相对于原点的垂直偏移量（以磅为单位）。可读/写。



## 语法

express.**TextureOffsetY**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


原点位置由 **[TextureAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureAlignment)** 属性的设置确定。

 **TextureOffsetY** 属性的设置与 WPP 用户界面中 **“设置图片格式”** 对话框的 **“填充”** 窗格上 **“平铺选项”** 下的 **“偏移量 Y”** 框的设置相对应。



## 示例


```JavaScript
/*本示例将活动窗口选定的第一个形状填充纹理相对于原点的垂直偏移量设置为 10 磅。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.Fill.TextureOffsetY = 10
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个形状填充纹理相对于原点的垂直偏移量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.Fill.TextureOffsetY)
}
```
