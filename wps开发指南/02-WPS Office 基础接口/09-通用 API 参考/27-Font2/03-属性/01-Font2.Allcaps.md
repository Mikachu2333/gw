# Font2.Allcaps

如果字体格式为全部字母大写，则为 **msoTrue** 。可读写。



## 语法

express.**Allcaps**

express   一个代表 **Font2** 对象的变量。

## 类型

[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)

## 示例


```JavaScript
/*本示例运行于演示组件，判断如果活动演示文稿的第一张幻灯片上第一个形状中包含图表，则将该图表的文本的字体格式设置为全部字母大写。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let font2 = shape.Chart.Format.TextFrame2.TextRange.Font
        font2.Allcaps = msoTrue
    }
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状中图表的文本的字体格式是否为全部字母大写。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.Chart.Format.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.Allcaps === msoTrue)
}
```
