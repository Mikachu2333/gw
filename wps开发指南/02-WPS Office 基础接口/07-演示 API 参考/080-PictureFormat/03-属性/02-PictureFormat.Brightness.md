# PictureFormat.Brightness

返回或设置指定图片或 OLE 对象的亮度。可读/写 **Single** 类型。



## 语法

express.**Brightness**

express   一个代表 **PictureFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


该属性的值必须是 0.0（最暗）到 1.0（最亮）之间的数。



## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片中第一个形状的亮度。第一个形状必须为图片或 OLE 对象。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).PictureFormat.Brightness = 0.3
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个图片的亮度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.PictureFormat.Brightness)
}
```
