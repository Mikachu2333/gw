# Frame.VerticalDistanceFromText

该属性返回或设置框架与环绕文字之间的垂直距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**VerticalDistanceFromText**

express   一个代表 **Frame** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将所选框架与环绕文字之间的垂直距离设为 12 磅。*/
function test() {
    if (Selection.Frames.Count == 1) {
        Selection.Frames.Item(1).VerticalDistanceFromText = 12
    }
}
```


```JavaScript
/*本示例为活动文档的所选内容添加一个框架，并设置该框架的多个属性。*/
function test() {
    let frame = ActiveDocument.Frames.Add(Selection.Range)
    frame.HorizontalDistanceFromText = InchesToPoints(0.13)
    frame.VerticalDistanceFromText = InchesToPoints(0.13)
    frame.HeightRule = wdFrameAuto
    frame.WidthRule = wdFrameAuto
}
```
