# Font2.DoubleStrikeThrough

如果将指定字体的格式设置为双删除线文本，则为 **msoTrue** 。可读写。



## 语法

express.**DoubleStrikeThrough**

express   一个代表 **Font2** 对象的变量。

## 类型

[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)

## 示例


```JavaScript
/*本示例运行于演示组件，设置第一个演示文稿的第一张幻灯片中第一张图表的图表区的文本框中字体的字体格式为双删除线文本。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    let font2 = chart.Format.TextFrame2.TextRange.Font
    font2.DoubleStrikeThrough = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片中第一张图表的图表区的文本框中字体的字体格式是否为双删除线文本。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    let font2 = chart.Format.TextFrame2.TextRange.Font
    alert(font2.DoubleStrikeThrough === msoTrue)
}
```
