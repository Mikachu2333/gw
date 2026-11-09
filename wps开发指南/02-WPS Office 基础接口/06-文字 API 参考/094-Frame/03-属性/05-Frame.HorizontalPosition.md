# Frame.HorizontalPosition

返回或设置框架边缘与 **[RelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/RelativeHorizontalPosition)** 属性指定的项之间的水平距离。可读写 **Single** 类型。



## 语法

express.**HorizontalPosition**

express   一个代表 **Frame** 对象的变量。

## 类型

number（float 精度）

## 说明


该属性可以是以磅为单位的度量值，也可以是 **[WdFramePosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFramePosition)** 常量之一。



## 示例


```JavaScript
/*本示例将活动文档中的第一个框架与右边距水平对齐。*/
function test() {
    if (ActiveDocument.Frames.Count >= 1) {
        let frame = ActiveDocument.Frames.Item(1)
        frame.RelativeHorizontalPosition = wdRelativeHorizontalPositionMargin
        frame.HorizontalPosition = wdFrameRight
    }
}
```


```JavaScript
/*本示例将所选内容中第二个框架的边缘与页面的水平距离设置为20磅。*/
function test() {
    let frame = Selection.Frames.Item(2)
    frame.RelativeHorizontalPosition = wdRelativeHorizontalPositionPage
    frame.HorizontalPosition = 20
}
```
