# Ruler.Levels

返回一个代表大纲缩进格式的 **[RulerLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevels/obj)** 对象。只读。



## 语法

express.**Levels**

express   一个代表 **Ruler** 对象的变量。

## 类型

RulerLevels

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个形状中文本的第一个大纲级别的首行缩进。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let rulerLevels = shape.TextFrame.Ruler.Levels
    rulerLevels.Item(1).FirstMargin = 20
}
```


```JavaScript
/*本示例显示活动窗口所选形状中文本的最后一个大纲级别的左缩进值。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let rulerLevels = textFrame.Ruler.Levels
    alert(rulerLevels.Item(rulerLevels.Count).LeftMargin + " 磅")
}
```
