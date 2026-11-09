# Frame.WidthRule

返回或设置用于确定框架宽度的规则。 **WdFrameSizeRule** 类型，可读写。



## 语法

express.**WidthRule**

express   一个代表 **Frame** 对象的变量。

## 类型

WdFrameSizeRule

## 示例


```JavaScript
/*本示例将活动文档中最后一个框架的宽度精确地设为 72 磅（1 英寸）。*/
function test() {
    let frames = ActiveDocument.Frames
    if (frames.Count >= 1) {
        let frame = frames.Item(frames.Count)
        frame.WidthRule = wdFrameExact
        frame.Width = 72
    }
}
```


```JavaScript
/*本示例判断所选内容中第一个框架的宽度的规则，并通知用户。*/
function test() {
    let frame = Selection.Frames.Item(1)
    switch (frame.WidthRule) {
        case wdFrameAtLeast:
            alert("将宽度设置为大于或等于由Width属性指定的值。")
            break
        case wdFrameAuto:
            alert("根据框架中项目的宽度设置宽度。")
            break
        case wdFrameExact:
            alert("将宽度设置为由Width属性指定的确切值。")
            break
    }
}
```
