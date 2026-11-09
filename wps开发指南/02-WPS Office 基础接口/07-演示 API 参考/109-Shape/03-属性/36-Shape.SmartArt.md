# Shape.SmartArt

返回一个 **SmartArt** 对象，该对象表示 **Shape** 对象的 SmartArt 图表。只读。



## 语法

express.**SmartArt**

express   一个代表 **Shape** 对象的变量。

## 类型

SmartArt

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加 SmartArt 图形并设置颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddSmartArt(Application.SmartArtLayouts(1), 100, 100, 400, 400)
    shape.SmartArt.Color = Application.SmartArtColors(1)
}
```


```JavaScript
/*本示例为活动演示文稿中第二张幻灯片的第一个SmartArt的第一个节点设置内部的文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(1)
    shape.SmartArt.AllNodes(1).TextFrame2.TextRange.Text = "Node 1"
}
```
