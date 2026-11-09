# TextFrame2 对象

代表 **Shape** 或 **ShapeRange** 对象中的文本框。它包含文本框中的文本，并公开控制文本框的对齐和定位的属性和方法。

## 说明


使用 **Shape** 和 **ShapeRange** 对象的 **TextFrame2** 属性可返回 **TextFrame2** 对象。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动窗口上所选的第一张幻灯片的第一个 SmartArt 图形的根节点的第一个子节点内部的文本。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    let textFrame2 = shape.SmartArt.Nodes.Item(1).TextFrame2
    textFrame2.TextRange.Text = "Here is some sample text"
}
```


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第一个 SmartArt 图形的第一个节点内部的文本字体的字号，然后显示该文本的长度。*/
function test() {
    let smartart = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt
    let textRange2 = smartart.AllNodes.Item(1).TextFrame2.TextRange
    textRange2.Font.Size = 12
    alert(textRange2.Length)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextFrame2/member/TextRange) | 为 **[SmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArt/obj)** 对象中某个范围的节点设置文本。只读。 |