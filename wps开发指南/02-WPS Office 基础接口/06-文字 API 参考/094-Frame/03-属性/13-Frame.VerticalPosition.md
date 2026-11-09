# Frame.VerticalPosition

返回或设置框架边缘与 **RelativeVerticalPosition** 属性指定的项之间的垂直距离。可读写 **Single** 类型。



## 语法

express.**VerticalPosition**

express   一个代表 **Frame** 对象的变量。

## 类型

number（float 精度）

## 说明


可以是以磅为单位的度量值，也可以是任何有效的 **[WdFramePosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFramePosition)** 常量。



## 示例


```JavaScript
/*本示例将活动文档中的第一个框架与页面顶边垂直对齐。*/
function test() {
    let frame = Application.ActiveDocument.Frames.Item(1)
    frame.RelativeVerticalPosition = wdRelativeVerticalPositionPage
    frame.VerticalPosition = wdFrameTop
}
```


```JavaScript
/*本示例为活动文档中的第一个形状添加框架，并将该框架置于距上边距 1 英寸处。*/
function test() {
    if (ActiveDocument.Shapes.Count >= 1) {
        ActiveDocument.Shapes.Item(1).Select()
        let frame = ActiveDocument.Frames.Add(Selection.Range)
        frame.RelativeVerticalPosition = wdRelativeVerticalPositionMargin
        frame.VerticalPosition = InchesToPoints(1)
    }
}
```
