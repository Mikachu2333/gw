# Hyperlink.TextToDisplay

返回或设置不是与图形相关联的超链接的显示文字。可读/写 **String** 类型。



## 语法

express.**TextToDisplay**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 说明


如果对不是与文字范围相关联的超链接使用此属性，则会产生运行时错误。



## 示例


```JavaScript
/*本示例检测给定的超链接（由 hyperlink 代表）是否与某个文字范围相关联，并显示超链接的文本。*/
function test() {
    let hyperlink = ActivePresentation.Slides.Item(1).Hyperlinks.Item(1)
    if (hyperlink.Parent.Parent.Parent.constructor.name == "TextRange") {
        alert(hyperlink.TextToDisplay)
    }
}
```


```JavaScript
/*本示例创建一个与第一张幻灯片第二个形状内的文字相关联的超链接。然后将显示文字设置为“WPS Home Page”，并将超链接地址设置为相应的 URL。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame.TextRange
    let actionSetting = textRange.ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionHyperlink
    actionSetting.Hyperlink.TextToDisplay = "WPS Home Page"
    actionSetting.Hyperlink.Address = "https://www.wps.cn"
}
```
