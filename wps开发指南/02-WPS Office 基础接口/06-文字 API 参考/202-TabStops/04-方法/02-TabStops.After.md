# TabStops.After

返回 Position 右侧的下一个 TabStop 对象。



## 语法

express.**After(Position)**

express   一个代表 **TabStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Position | 必选 | number（float 精度） | 指标尺上的位置，以磅为单位。 |

## 返回值

TabStop

## 示例


```JavaScript
/*本示例更改活动文档首段中第一个自定义制表位的对齐方式，该制表位与左边距的距离大于 1 英寸。*/
function test() {
    let tabStop = ActiveDocument.Paragraphs(1).TabStops.After(InchesToPoints(1))
    tabStop.Alignment = wdAlignTabCenter
}
```


```JavaScript
/*本示例删除距左侧页边距大于 1 英寸的活动文档首段的第一个制表位。*/
function test() {
    let tabStop = ActiveDocument.Paragraphs(1).TabStops.After(InchesToPoints(1))
    tabStop.Clear()
}
```
