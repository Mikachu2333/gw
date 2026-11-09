# TextFrame.HorizontalOverflow

返回或设置指定对象的水平溢出设置。可读/写。



## 语法

express.**HorizontalOverflow**

express   一个代表 **TextFrame** 对象的变量。

## 类型

**[XlOartHorizontalOverflow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOartHorizontalOverflow)值** 

## 说明


此属性只在 **WordWrap** 属性为 **msoFalse** (0) 时有效。



## 示例


```JavaScript
/*本示例在活动工作表中添加一个文本框，然后将文本框的水平溢出设置为允许文本在水平方向溢出文本框。*/
function test() {
    let textFrame = ActiveSheet.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 100).TextFrame
    textFrame.HorizontalOverflow = xlOartHorizontalOverflowOverflow
}
```


```JavaScript
/*本示例在第一张工作表中添加一个文本框，并显示文本框的水平溢出是否设置成隐藏水平方向溢出文本框的文本。*/
function test() {
    let textFrame = Application.Worksheets.Item(1).Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 100).TextFrame
    alert(textFrame.HorizontalOverflow == xlOartHorizontalOverflowClip)
}
```
