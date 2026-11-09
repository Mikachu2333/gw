# TabStops.Add

创建一个制表位并将其添加到 **TabStops** 集合中。



## 语法

express.**Add(Type, Position)**

express   一个代表 **TabStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | PpTabStopType | 要添加的制表位的类型。 |
| Position | 必选 | number（float 精度） | 制表位在制表位集合中的位置。 |

## 返回值

TabStop

## 说明


_Type_ 参数值可以是下列 **PpTabStopType** 常量之一：

| 常量                   | 说明     |
| -------------------- | ------ |
| **ppTabStopCenter**  | 中央制表位。 |
| **ppTabStopDecimal** | 小数制表位。 |
| **ppTabStopLeft**    | 左制表位。  |
| **ppTabStopMixed**   | 混合制表位。 |
| **ppTabStopRight**   | 右制表位。  |



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片的第一个形状中的文本添加制表位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let tabStops = shape.TextFrame.Ruler.TabStops
    tabStops.Add(ppTabStopRight, 200)
}
```


```JavaScript
/*本示例向活动窗口所选形状中的文本添加三个小数点对齐式制表位。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let tabStops = textFrame.Ruler.TabStops
    for (let i = 1; i <= 3; i++) {
        tabStops.Add(ppTabStopDecimal, i * 10)
    }
}
```
