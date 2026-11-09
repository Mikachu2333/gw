# Frame.RelativeVerticalPosition

指定框架的相对垂直位置。 **[WdRelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeVerticalPosition)** 类型，可读写。



## 语法

express.**RelativeVerticalPosition**

express   一个代表 **Frame** 对象的变量。

## 类型

WdRelativeVerticalPosition

## 示例


```JavaScript
/*此示例在所选内容周围添加一个框架，并将该框架与页面顶部垂直对齐。*/
function test() {
    let frame = ActiveDocument.Frames.Add(Selection.Range)
    frame.RelativeVerticalPosition = wdRelativeVerticalPositionPage
    frame.VerticalPosition = wdFrameTop
}
```


```JavaScript
/*本示例显示所选内容中第二个框架的相对垂直位置是否为wdRelativeVerticalPositionParagraph。*/
function test() {
    let frame = Selection.Frames.Item(2)
    alert(frame.RelativeVerticalPosition == wdRelativeVerticalPositionParagraph)
}
```
