# Frame.RelativeHorizontalPosition

指定框架的相对水平位置。 **[WdRelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalPosition)** 类型，可读写。



## 语法

express.**RelativeHorizontalPosition**

express   一个代表 **Frame** 对象的变量。

## 类型

WdRelativeHorizontalPosition

## 示例


```JavaScript
/*本示例在活动文档的光标处添加一个框架，并将该框架与右边距水平对齐。*/
function test() {
    let frame = ActiveDocument.Frames.Add(Selection.Range)
    frame.RelativeHorizontalPosition = wdRelativeHorizontalPositionMargin
    frame.HorizontalPosition = wdFrameRight
}
```


```JavaScript
/*本示例显示所选内容中第三个框架的相对水平位置是否为wdRelativeHorizontalPositionColumn。*/
function test() {
    let frame = Selection.Frames.Item(3)
    alert(frame.RelativeHorizontalPosition == wdRelativeHorizontalPositionColumn)
}
```
