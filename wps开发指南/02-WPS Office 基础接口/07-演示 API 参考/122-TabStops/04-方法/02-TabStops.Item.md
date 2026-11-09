# TabStops.Item

从指定的 **TabStops** 集合中返回单个制表位。



## 语法

express.**Item(Index)**

express   一个代表 **TabStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **TabStop** 对象的索引编号。 |

## 返回值

TabStop

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
/*本示例显示活动窗口所选形状中文本的最后一个制表位的位置。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let tabStops = textFrame.Ruler.TabStops
    alert(tabStops.Item(tabStops.Count).Position + " 磅")
}
```
