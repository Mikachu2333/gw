# TextFrame.Orientation

返回或设置一个 **Long** 值，它代表文本框的方向。



## 语法

express.**Orientation**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoTextOrientation

## 说明


此属性值可设为 -90 到 90 度之间的整数值或以下 **MsoTextOrientation** 常量之一。



## 示例


```JavaScript
/*本示例在活动工作表中添加一个文本框，向文本框中添加文本，然后设置文本框的方向为纵向 。*/
function test() {
    let textFrame = ActiveSheet.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 100).TextFrame
    textFrame.Characters().Text = "示例文本"
    textFrame.Orientation = msoTextOrientationVertical
}
```


```JavaScript
/*本示例在第一张工作表中添加一个文本框，向文本框中添加文本，并显示文本框的方向是否是水平方向。*/
function test() {
    let textFrame = Application.Worksheets.Item(1).Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 100).TextFrame
    textFrame.Characters().Text = "示例文本"
    alert(textFrame.Orientation == msoTextOrientationHorizontal)
}
```
