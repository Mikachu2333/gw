# Font.NameAscii

返回或设置用于 ASCII 字符的字体（字符集编号在 0 到 127 范围内的字符）。可读/写。



## 语法

express.**NameAscii**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 说明


此属性的默认值为 Times New Roman。使用 **[Replace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Fonts/member/Replace)** 方法可更改应用于所有文本和显示在 **字体** 选项卡上的 **字体** 框中的字体。



## 示例


```JavaScript
/*以下示例将第一张幻灯片的标题中 ASCII 字符的字体设置为“Century”。*/
function test() {
    let textRange = ActivePresentation.Slides(1).Shapes.Title.TextFrame.TextRange
    textRange.Font.NameAscii = "Century"
}
```


```JavaScript
/*本示例显示第三张幻灯片上第一个占位符中的 ASCII 字符的字体。*/
function test() {
    let shape = Application.ActivePresentation.Slides(3).Shapes.Placeholders.Item(1)
    alert(shape.TextFrame.TextRange.Font.NameAscii)
}
```
