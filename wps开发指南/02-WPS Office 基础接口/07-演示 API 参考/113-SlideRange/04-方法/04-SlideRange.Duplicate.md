# SlideRange.Duplicate

创建指定 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象的副本，将新的幻灯片范围添加到 **Slides** 集合中，紧跟在最初指定的幻灯片范围之后，然后返回表示重复幻灯片的 **SlideRange** 对象。



## 语法

express.**Duplicate()**

express   一个代表 **SlideRange** 对象的变量。

## 返回值

SlideRange

## 示例


```JavaScript
/*本示例创建活动演示文稿中第一张幻灯片的一个副本，然后设置新幻灯片的背景阴影和标题文本。新幻灯片将作为演示文稿的第二张幻灯片。*/
function test() {
    let slideRange = ActivePresentation.Slides.Range(1).Duplicate()
    slideRange.Background.Fill.PresetGradient(msoGradientVertical, 1, msoGradientGold)
    slideRange.Shapes.Title.TextFrame.TextRange.Text = "Second Quarter Earnings"
}
```


```JavaScript
/*本示例创建活动演示文稿上第一个窗口中选定幻灯片的副本，并显示新幻灯片的名称。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    alert(slideRange.Duplicate().Name)
}
```
