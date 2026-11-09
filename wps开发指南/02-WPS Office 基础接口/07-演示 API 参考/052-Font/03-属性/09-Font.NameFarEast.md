# Font.NameFarEast

返回或设置亚洲字体名称。可读/写。



## 语法

express.**NameFarEast**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 说明


使用 **[Replace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Fonts/member/Replace)** 方法可更改应用于所有文本和显示在 **“字体”** 选项卡上的 **“字体”** 框中的字体。



## 示例


```JavaScript
/*以下示例显示应用于选定内容的亚洲字体名称。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.TextFrame.TextRange.Font.NameFarEast)
}
```


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片的标题的亚洲字体名称设置为宋体。*/
function test() {
    let textRange = ActivePresentation.Slides(1).Shapes.Title.TextFrame.TextRange
    textRange.Font.NameFarEast = "宋体"
}
```
