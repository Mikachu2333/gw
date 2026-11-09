# Shapes.SelectAll

选定 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合中所有形状。



## 语法

express.**SelectAll()**

express   一个代表 **Shapes** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选择活动演示文稿第一张幻灯片的所有形状。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.SelectAll()
}
```


```JavaScript
/*本示例在第一个演示文稿的第一张幻灯片中添加一个形状，并选择所有形状。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    slide.Shapes.AddShape(msoShapeRectangle, 50, 300, 100, 200)
    slide.Shapes.SelectAll()
}
```
