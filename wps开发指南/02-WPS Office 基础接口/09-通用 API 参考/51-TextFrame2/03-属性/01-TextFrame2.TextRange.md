# TextFrame2.TextRange

为 **[SmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/obj)** 对象中某个范围的节点设置文本。只读。



## 语法

express.**TextRange**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

TextRange2

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第一个 SmartArt 图形的第一个节点内部的文本。*/
function test() {
    let smartart = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt
    smartart.AllNodes.Item(1).TextFrame2.TextRange.Text = "Node 1"
}
```


```JavaScript
/*本示例运行于演示组件，判断如果活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的根节点的第二个子节点内部包含文本，则将该文本字体设置为粗体格式。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    let textFrame2 = shape.SmartArt.Nodes.Item(2).TextFrame2
    if (textFrame2.HasText == msoTrue) {
        textFrame2.TextRange.Font.Bold = msoTrue
    }
}
```
