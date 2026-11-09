# TabStops.Add

返回一个 **TabStop** 对象，该对象代表添加到文档中的自定义制表位。



## 语法

express.**Add(Position, Alignment, Leader)**

express   一个代表 **TabStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Position | 必选 | number（float 精度） | 制表位与页面左边距的相对位置（以磅为单位）。 |
| Alignment | 可选 | any | 制表位的对齐方式。可为 **WdTabAlignment** 常量之一。 |
| Leader | 可选 | any | 制表位的前导符类型。可为 **WdTabLeader** 常量之一。如果省略本参数，则使用 **wdTabLeaderSpaces** 。 |

## 返回值

TabStop

## 示例


```JavaScript
/*本示例为选定的段落添加一个制表位，位置在距页面左边距 2.5 英寸处。*/
function test() {
    Selection.Paragraphs.TabStops.Add(InchesToPoints(2.5))
}
```


```JavaScript
/*本示例在所选段落中添加两个制表位。第一个制表位为左对齐，位于距页面左边距 1 英寸（72 磅）处，有点状前导符；第二个制表位居中，位于距页面左边距 2 英寸处。*/
function test() {
    let tabStops = Selection.Paragraphs.TabStops
    tabStops.Add(InchesToPoints(1), wdAlignTabLeft, wdTabLeaderDots)
    tabStops.Add(InchesToPoints(2), wdAlignTabCenter)
}
```
