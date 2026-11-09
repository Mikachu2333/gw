# TextFrame.Ruler

返回一个 **[Ruler](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/obj)** 对象，该对象代表指定文本的标尺。只读。



## 语法

express.**Ruler**

express   一个代表 **TextFrame** 对象的变量。

## 类型

Ruler

## 示例


```JavaScript
/*本示例在第一篇演示文稿的第一张幻灯片中的第二个形状中文本的 2 英寸（144 磅）处设置左对齐制表位。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    slide.Shapes.Item(2).TextFrame.Ruler.TabStops.Add(ppTabStopLeft, 144)
}
```


```JavaScript
/*本示例设置第一篇演示文稿第二个形状（第一张幻灯片中）第一级大纲的首行缩进和悬挂缩进。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let ruler = slide.Shapes.Item(2).TextFrame.Ruler
    ruler.Levels.Item(1).FirstMargin = 9
    ruler.Levels.Item(1).LeftMargin = 54
}
```
