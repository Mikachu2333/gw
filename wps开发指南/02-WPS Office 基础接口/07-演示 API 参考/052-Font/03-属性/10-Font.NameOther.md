# Font.NameOther

返回或设置字符集编号大于 127 的字符所用的字体。可读/写。



## 语法

express.**NameOther**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 说明


在 Kingsoft WPP 的美国英语版中，此属性为只读属性且默认值为 Times New Roman。使用 **[Replace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Fonts/member/Replace)** 方法可更改演示文稿中的字体。 **NameOther** 属性设置和 **NameASCII** 属性设置在大部分情况下都一样，当 **NameASCII** 属性设为“Use FE Font”时除外。



## 示例


```JavaScript
/*本示例显示所选内容中字符集编号大于 127 的字符所用的字体名称。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.TextFrame.TextRange.Font.NameOther)
}
```


```JavaScript
/*本示例为活动演示文稿上第一张幻灯片的标题设置字符集编号大于 127 的字符所用的字体。*/
function test() {
    let textRange = ActivePresentation.Slides(1).Shapes.Title.TextFrame.TextRange
    textRange.Font.NameOther = "Tahoma"
}
```
