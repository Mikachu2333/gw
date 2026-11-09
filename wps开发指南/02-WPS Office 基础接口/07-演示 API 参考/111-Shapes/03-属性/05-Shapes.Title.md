# Shapes.Title

返回一个代表幻灯片标题的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。只读。



## 语法

express.**Title**

express   一个代表 **Shapes** 对象的变量。

## 类型

Shape

## 说明


也可以使用 [ **Shapes** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj) 或 **Placeholders** 集合的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/Item)** 方法返回幻灯片标题。



## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的标题文本。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Title.TextFrame.TextRange.Text = "Welcome!"
}
```


```JavaScript
/*本示例删除第一个演示文稿中第一张幻灯片的标题文本。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    slide.Shapes.Title.TextFrame.DeleteText()
}
```
