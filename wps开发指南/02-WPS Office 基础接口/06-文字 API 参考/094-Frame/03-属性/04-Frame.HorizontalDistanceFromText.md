# Frame.HorizontalDistanceFromText

返回或设置框架与周围文本之间的水平距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**HorizontalDistanceFromText**

express   一个代表 **Frame** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*此示例在所选内容周围添加一个框架，并将框架和文本之间的水平距离设置为 12 磅。*/
function test() {
    let frame = ActiveDocument.Frames.Add(Selection.Range)
    frame.HorizontalDistanceFromText = 12
}
```


```JavaScript
/*本示例为活动文档的第一段添加一个框架，并设置该框架的多个属性。*/
function test() {
    let frame = ActiveDocument.Frames.Add(ActiveDocument.Paragraphs.Item(1).Range)
    frame.HorizontalDistanceFromText = InchesToPoints(0.25)
    frame.VerticalDistanceFromText = InchesToPoints(0.25)
    frame.HeightRule = wdFrameAuto
    frame.WidthRule = wdFrameAuto
    frame.Borders.Enable = msoFalse
}
```
