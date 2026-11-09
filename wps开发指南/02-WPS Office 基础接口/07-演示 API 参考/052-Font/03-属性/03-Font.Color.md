# Font.Color

返回或设置当前 **Font** 对象的颜色。可读写。



## 语法

express.**Color**

express   一个代表 **Font** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例设置第一张幻灯片的标题文本，并设置字体属性。*/
function test() {
    let textRange = ActivePresentation.Slides(1).Shapes.Title.TextFrame.TextRange
    textRange.Text = "kingsoft"
    textRange.Font.Italic = true
    textRange.Name = "example"
    textRange.Font.Color.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例设置第三张幻灯片的第一个占位符中的字体颜色。*/
function test() {
    let shape = Application.ActivePresentation.Slides(3).Shapes.Item(1)
    shape.TextFrame.TextRange.Font.Color.RGB = RGB(144, 0, 0)
}
```
