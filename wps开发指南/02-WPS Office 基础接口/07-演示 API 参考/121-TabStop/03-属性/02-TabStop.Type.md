# TabStop.Type

代表制表位的格式。可读/写。



## 语法

express.**Type**

express   一个代表 **TabStop** 对象的变量。

## 类型

PpTabStopType

## 说明


 **Type** 属性的值可以是下列 **PpTabStopType** 常量之一。

| 常量 |
| -------------------- |
| **ppTabStopCenter**  |
| **ppTabStopDecimal** |
| **ppTabStopLeft**    |
| **ppTabStopMixed**   |
| **ppTabStopRight**   |



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状中文本的第一个制表位的格式是否为ppTabStopLeft。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let tabStops = shape.TextFrame.Ruler.TabStops
    alert(tabStops.Item(1).Type == ppTabStopLeft)
}
```


```JavaScript
/*本示例判断如果活动窗口所选形状中文本的最后一个制表位的格式为ppTabStopCenter，则显示该制表位的位置。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let tabStops = textFrame.Ruler.TabStops
    if (tabStops.Item(tabStops.Count).Type == ppTabStopCenter) {
        alert(tabStops.Item(tabStops.Count).Position + " 磅")
    }
}
```
