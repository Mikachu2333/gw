# TextFrame.VerticalOverflow

返回或设置指定对象的垂直溢出设置。可读/写。



## 语法

express.**VerticalOverflow**

express   一个代表 **TextFrame** 对象的变量。

## 类型

**[XlOartVerticalOverflow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOartVerticalOverflow)** 值

## 说明


此属性只在 **AutoSize** 属性为 **False** 时有效。



## 示例


```JavaScript
/*本示例在活动工作表中添加一个文本框，然后将文本框的垂直溢出设置为允许文本在垂直方向溢出文本框。*/
function test() {
    let textFrame = ActiveSheet.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 100).TextFrame
    textFrame.AutoSize = false
    textFrame.VerticalOverflow = xlOartVerticalOverflowOverflow
}
```


```JavaScript
/*本示例在第一张工作表中添加一个文本框，并显示文本框的垂直溢出是否设置成隐藏垂直方向溢出文本框的文本。*/
function test() {
    let textFrame = Application.Worksheets.Item(1).Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 100).TextFrame
    alert(textFrame.VerticalOverflow == xlOartVerticalOverflowClip)
}
```
