# TabStop.Position

返回或设置制表位相对于左边距的位置。可读写 **Single** 类型。



## 语法

express.**Position**

express   一个代表 **TabStop** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例为选定段落添加一个距左边距 2 英寸的右对齐制表位，然后在消息框中显示该制表位的位置。*/
function test() {
    let tabStops = Selection.Paragraphs.Item(1).TabStops
    tabStops.ClearAll()
    tabStops.Add(InchesToPoints(2), wdAlignTabRight)
    alert(tabStops.Item(1).Position + " or " + PointsToInches(tabStops.Item(1).Position) + " inches")
}
```


```JavaScript
/*本示例设置活动文档首段的第一个制表位相对于左边距的位置。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.Item(1).Position = 3
}
```
