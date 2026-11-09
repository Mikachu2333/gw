# FillFormat.TextureVerticalScale

返回或设置纹理填充的垂直缩放比例因子。可读/写。



## 语法

express.**TextureVerticalScale**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


 **TextureVerticalScale** 属性的设置与 WPP 用户界面中 **“设置图片格式”** 对话框的 **“填充”** 窗格上 **“平铺选项”** 下的 **“缩放比例 Y”** 框的设置相对应。



## 示例


```JavaScript
/*本示例将活动窗口选定的第一个形状纹理填充的垂直缩放比例设置为 30%。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.Fill.TextureVerticalScale = 0.3
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个形状纹理填充的垂直缩放比例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.Fill.TextureVerticalScale)
}
```
