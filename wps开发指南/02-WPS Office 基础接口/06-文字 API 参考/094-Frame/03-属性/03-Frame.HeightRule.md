# Frame.HeightRule

返回或设置一个 **WdFrameSizeRule** 类型的值，该值代表用于确定指定框架高度的规则。可读写。



## 语法

express.**HeightRule**

express   一个代表 **Frame** 对象的变量。

## 类型

WdFrameSizeRule

## 示例


```JavaScript
/*本示例设置活动文档中第一个框架的高度和宽度均为2英寸。*/
function test() {
    if (ActiveDocument.Frames.Count >= 1) {
        let frame = ActiveDocument.Frames.Item(1)
        frame.HeightRule = wdFrameExact
        frame.Height = InchesToPoints(2)
        frame.WidthRule = wdFrameExact
        frame.Width = InchesToPoints(2)
    }
}
```


```JavaScript
/*本示例判断所选内容中第一个框架的高度的规则，并通知用户。*/
function test() {
    let frame = Selection.Frames.Item(1)
    switch (frame.HeightRule) {
        case wdFrameAtLeast:
            alert("将高度设置为大于或等于由Height属性指定的值。")
            break
        case wdFrameAuto:
            alert("根据框架中项目的高度设置高度。")
            break
        case wdFrameExact:
            alert("将高度设置为由Height属性指定的确切值。")
            break
    }
}
```
