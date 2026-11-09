# FillFormat.TextureAlignment

返回或设置用于平铺纹理填充的对齐方式（坐标网格的原点）。可读/写。



## 语法

express.**TextureAlignment**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTextureAlignment

## 说明


 **TextureAlignment** 属性返回的值可以是下列 **MsoTextureAlignment** 常量之一：

| 常量 |
| ------------------------- |
| **msoTextureTopLeft**     |
| **msoTextureTop**         |
| **msoTextureTopRight**    |
| **msoTextureLeft**        |
| **msoTextureCenter**      |
| **msoTextureRight**       |
| **msoTextureBottomLeft**  |
| **msoTextureBottom**      |
| **msoTextureBottomRight** |

 **TextureAlignment** 属性的设置与 WPP 用户界面中 **“设置图片格式”** 对话框的 **“填充”** 窗格上 **“平铺选项”** 下的 **“对齐方式”** 框的设置相对应。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个形状的平铺纹理填充的对齐方式设置为msoTextureTop。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Fill.TextureAlignment = msoTextureTop
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状的平铺纹理填充的对齐方式是否为msoTextureTopLeft。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.TextureAlignment == msoTextureTopLeft)
}
```
