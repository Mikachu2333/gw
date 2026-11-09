# Selection.ShapeRange

返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象，该对象代表指定幻灯片上所有选定的幻灯片对象。只读。



## 语法

express.**ShapeRange**

express   一个代表 **Selection** 对象的变量。

## 类型

ShapeRange

## 说明


其返回的范围可包括幻灯片上的图形、形状、OLE 对象、图片、文本对象、标题、页眉、页脚、幻灯片编号占位符以及日期和时间对象。

当演示文稿为普通视图、幻灯片视图或任一母版视图时，可以从选定范围中返回一个形状范围。



## 示例


```JavaScript
/*本示例设置第一个窗口中所有选定形状的前景填充颜色。*/
function test() {
    Application.Windows.Item(1).Selection.ShapeRange.Fill.ForeColor.RGB = RGB(255, 0, 255)
}
```


```JavaScript
/*本示例设置第一篇演示文稿上第一张幻灯片中所有形状的高度。*/
function test() {
    Presentations.Item(1).Slides.Item(1).Shapes.SelectAll()
    ActiveWindow.Selection.ShapeRange.Height = 50
}
```
