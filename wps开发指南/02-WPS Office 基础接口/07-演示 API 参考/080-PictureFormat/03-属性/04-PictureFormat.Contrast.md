# PictureFormat.Contrast

返回或设置指定图片或 OLE 对象的对比度。该属性的值必须是 0.0（最低对比度）到 1.0（最高对比度）的数。可读/写 **Single** 类型。



## 语法

express.**Contrast**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中第一个形状的对比度。第一个形状必须为图片或 OLE 对象。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).PictureFormat.Contrast = 0.8
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个图片的对比度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.PictureFormat.Contrast)
}
```
