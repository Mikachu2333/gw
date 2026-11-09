# TabStops.Before

返回 Position 左侧的下一个 **TabStop** 对象。



## 语法

express.**Before(Position)**

express   一个代表 **TabStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Position | 必选 | number（float 精度） | 指标尺上的位置，以磅为单位。 |

## 返回值

TabStop

## 示例


```JavaScript
/*本示例改变距左侧页边距 2 英寸内的活动文档首段第一个制表位的对齐方式。*/
function test() {
    let tabStop = ActiveDocument.Paragraphs(1).TabStops.Before(InchesToPoints(2))
    tabStop.Alignment = wdAlignTabCenter
}
```


```JavaScript
/*本示例删除距左侧页边距 1 英寸内的所选段落的第一个制表位。*/
function test() {
    let tabStop = Selection.Paragraphs.TabStops.Before(InchesToPoints(1))
    tabStop.Clear()
}
```
