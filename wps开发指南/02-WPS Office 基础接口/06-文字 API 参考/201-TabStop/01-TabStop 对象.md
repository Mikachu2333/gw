# TabStop 对象

代表单个制表位。 **TabStop** 对象是 **[TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStops/obj)** 集合的一个成员。 **TabStops** 集合代表一个段落或一组段落中的所有自定义和默认制表位。

## 说明


设置 **DefaultTabStop** 属性可调整默认制表位的间距。

使用 **TabStops** (_Index_) 可返回一个 **TabStop** 对象，其中 _Index_ 为制表位位置（以磅为单位）或索引号。制表位按照标尺从左向右编制数字索引。


## 示例


```JavaScript
/*本示例删除所选段落中的第一个自定义制表位。*/
function test() {
    Application.Selection.Paragraphs.TabStops.Item(1).Clear()
}
```
使用 **Add** 方法可添加制表位。



```JavaScript
/*本示例向所选段落添加两个制表位。第一个制表位是具有点式制表符前导符的左对齐制表位，位于 1 英寸（72 磅）处。第二个制表位居中，位于 2 英寸处。*/
function test() {
    let tabStops = Selection.Paragraphs.TabStops
    tabStops.Add(InchesToPoints(1), wdAlignTabLeft).Leader = wdTabLeaderDots
    tabStops.Add(InchesToPoints(2), wdAlignTabCenter)
}
```
还可以通过使用 **TabStops** 属性指定位置来添加制表位。



```JavaScript
/*本示例在所选段落的 2 英寸处添加一个右对齐制表位。*/
function test() {
    Selection.Paragraphs.TabStops(InchesToPoints(2)).Alignment = wdAlignTabRight
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStop/member/Clear) | 删除指定的自定义制表位。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStop/member/Alignment) | 返回或设置一个 **WdTabAlignment** 常量，该常量代表指定制表位的对齐方式，可读写。 |
| [CustomTab](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStop/member/CustomTab) | 如果指定的制表位为自定义制表位，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Leader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStop/member/Leader) | 返回或设置指定 **TabStop** 对象的前导字符。 **WdTabLeader** 类型，可读写。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStop/member/Next) | 返回集合中的下一个制表位。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStop/member/Position) | 返回或设置制表位相对于左边距的位置。可读写 **Single** 类型。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStop/member/Previous) | 返回集合中的上一个制表位。只读。 |