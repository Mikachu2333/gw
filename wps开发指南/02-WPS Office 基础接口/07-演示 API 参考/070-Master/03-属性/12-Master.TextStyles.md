# Master.TextStyles

返回一个 **[TextStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyles/obj)** 集合，该集合代表用于指定幻灯片母版的三种文本样式，即标题文本、正文文本和默认文本。只读。



## 语法

express.**TextStyles**

express   一个代表 **Master** 对象的变量。

## 类型

TextStyles

## 示例


```JavaScript
/*本示例为活动演示文稿中幻灯片母版上的第一级正文文本设置字体名称和字号。*/
function test() {
    let textStyleLevel = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle).Levels.Item(1)
    let font = textStyleLevel.Font
    font.Name = "Arial"
    font.Size = 36
}
```


```JavaScript
/*本示例调整活动窗口选定的第一张幻灯片的幻灯片母版的标题边界框的大小以适应标题文本。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    slide.Master.TextStyles.Item(ppTitleStyle).TextFrame.AutoSize = ppAutoSizeShapeToFitText
}
```
