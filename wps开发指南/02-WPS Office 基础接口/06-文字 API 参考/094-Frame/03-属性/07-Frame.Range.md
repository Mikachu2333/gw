# Frame.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表框架中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Frame** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例设置活动文档的第一个框架中包含的文档部分的文本。*/
function test() {
    let frame = ActiveDocument.Frames.Item(1)
    frame.Range.Text = "example"
}
```


```JavaScript
/*本示例为所选内容中第二个框架中包含的文档部分的文本设置加粗格式，并将文本的字体的颜色设置为红色。*/
function test() {
    let frame = Selection.Frames.Item(2)
    frame.Range.Bold = msoTrue
    frame.Range.Font.Color = wdColorRed
}
```
