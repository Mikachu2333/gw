# Master.Shapes

返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合，该集合代表被放置或插入到指定幻灯片、幻灯片母版或幻灯片组的所有元素。只读。



## 语法

express.**Shapes**

express   一个代表 **Master** 对象的变量。

## 类型

Shapes

## 说明


返回的 **Shapes** 集合可以包含绘图、形状、OLE 对象、图片、文本对象、标题、页眉、页脚、幻灯片编号以及日期和时间对象，这些对象位于幻灯片上或备注页中的幻灯片映像上。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片的幻灯片母版添加一个宽 100 磅、高 50 磅的矩形，它的左上角距当前演示文稿第一张幻灯片的左边 5 磅、上边 25 磅。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Master.Shapes.AddShape(msoShapeRectangle, 5, 25, 100, 50)
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的幻灯片母版的第一个形状的填充纹理。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Master.Shapes.Item(1)
    shape.Fill.PresetTextured(msoTextureOak)
}
```


```JavaScript
/*本示例展示两种方式设置活动演示文稿中第一张幻灯片的幻灯片母版的标题文本。*/
function test() {
    let master = ActivePresentation.Slides.Item(1).Master
    master.Shapes.Title.TextFrame.TextRange.Text = "Some title text"
    master.Shapes.Item(1).TextFrame.TextRange.Text = "Other title text"
}
```


```JavaScript
/*本示例设置活动演示文稿第二张幻灯片的幻灯片母版的第二个形状中的文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Master.Shapes.Item(2)
    shape.TextFrame.TextRange.Text = "First Item\rSecond Item\rThird Item"
}
```


```JavaScript
/*本示例设置活动演示文稿的第二张幻灯片的幻灯片母版的第二个占位符中的文本，对于前两个形状都是占位符的场景，本示例与上一示例完成相同功能。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Master.Shapes.Placeholders.Item(2)
    shape.TextFrame.TextRange.Text = "First Item\rSecond Item\rThird Item"
}
```
