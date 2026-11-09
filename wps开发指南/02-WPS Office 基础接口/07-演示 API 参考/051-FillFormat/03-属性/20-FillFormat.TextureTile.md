# FillFormat.TextureTile

返回或设置一个值，该值指示纹理填充是平铺还是拉伸。可读/写。



## 语法

express.**TextureTile**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **TextureTile** 属性返回的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明      |
| ------------ | ------- |
| **msoFalse** | 纹理填充拉伸。 |
| **msoTrue**  | 纹理填充平铺。 |

 **TextureTile** 属性的设置与 WPP 用户界面中 **“设置图片格式”** 对话框的 **“填充”** 窗格上 **“将图片平铺为纹理”** 框的设置相对应。



## 示例


```JavaScript
/*本示例将活动窗口选定的第一个形状纹理填充设置为拉伸。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.Fill.TextureTile = msoFalse
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个形状纹理填充是否为平铺。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.Fill.TextureTile == msoTrue)
}
```
