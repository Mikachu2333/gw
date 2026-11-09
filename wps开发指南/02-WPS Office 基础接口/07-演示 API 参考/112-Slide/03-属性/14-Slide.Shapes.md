# Slide.Shapes

返回一个 [ **Shapes** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj) 集合，该集合代表被放置或插入到指定幻灯片、幻灯片母版或幻灯片组的所有元素。此为只读属性。



## 语法

express.**Shapes**

express   一个代表 **Slide** 对象的变量。

## 类型

Shapes

## 说明


返回的 **Shapes** 集合可以包含绘图、形状、OLE 对象、图片、文本对象、标题、页眉、页脚、幻灯片编号以及日期和时间对象，这些对象位于幻灯片上或备注页中的幻灯片图像上。



## 示例


```JavaScript
/*以下示例添加一个宽 100 磅、高 50 磅的矩形，它的左上角距当前演示文稿第一张幻灯片的左边 5 磅、上边 25 磅。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddShape(msoShapeRectangle, 5, 25, 100, 50)
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的第三个形状的填充纹理。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(3)
    shape.Fill.PresetTextured(msoTextureOak)
}
```


```JavaScript
/*假设当前演示文稿第一张幻灯片包含一个标题，以下示例的第二行和第三行设置该演示文稿第一张幻灯片的标题文本。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Some title text"
    slide.Shapes.Item(1).TextFrame.TextRange.Text = "Other title text"
}
```


```JavaScript
/*假设当前演示文稿第二张幻灯片中的第二个形状包含文本框架，以下示例向该幻灯片添加一系列的段落。请注意：\r 用于在该文本中插入段落标记。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(2)
    shape.TextFrame.TextRange.Text = "First Item" + "\r" + "Second Item" + "\r" + "Third Item"
}
```


```JavaScript
/*本示例在活动演示文稿的第二张幻灯片的第二个占位符中添加文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Placeholders.Item(2)
    shape.TextFrame.TextRange.Text = "First Item" + "\r" + "Second Item" + "\r" + "Third Item"
}
```
