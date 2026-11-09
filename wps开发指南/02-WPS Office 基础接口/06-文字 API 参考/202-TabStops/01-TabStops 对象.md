# TabStops 对象

 **[TabStop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStop/obj)** 对象的集合，该集合代表一个段落或一组段落的自定义和默认制表位。

## 说明


使用 **TabStops** 属性可返回 **TabStops** 集合。


## 示例


```JavaScript
/*本示例清除活动文档第一段中的所有自定义制表位。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.ClearAll()
}
```


```JavaScript
/*本示例在所选段落的 2.5 英寸处添加一个制表位，并显示 TabStops 集合中每个制表位的位置。*/
function test() {
    let tabStops = Selection.Paragraphs.TabStops
    tabStops.Add(InchesToPoints(2.5))
    for (let i = 1; i < tabStops.Count; i++) {
        alert("Position = " + PointsToInches(tabStops.Item(i).Position) + " inches")
    }
}
```
使用 **Add** 方法可添加制表位。



```JavaScript
/*本示例向所选段落添加两个制表位。第一个制表位是具有点式制表符前导符的左对齐制表位，位于 1 英寸（72 磅）处。第二个制表位居中，位于 2 英寸处。*/
function test() {
    let tabStops = Selection.Paragraphs.TabStops
    tabStops.Add(InchesToPoints(1), wdAlignTabLeft, wdTabLeaderDots)
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
使用 **TabStops** (_Index_) 可返回一个 **TabStop** 对象，其中 _Index_ 为制表位位置（以磅为单位）或索引号。



```JavaScript
/*本示例将删除活动文档第一段的第一个自定义制表符。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.Item(1).Clear()
}
```
使用 **Paragraphs** 集合（或包含多个段落的一个范围）时，如果集合中各段制表位位置不一致，就必须在各段中分别修改。



```JavaScript
/*本示例删除活动文档中位于各段 1 英寸处的制表位。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    for (let i = 1; i < paragraphs.Count; i++) {
        paragraphs.Item(i).TabStops(InchesToPoints(1)).Clear()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStops/member/Add) | 返回一个 **TabStop** 对象，该对象代表添加到文档中的自定义制表位。 |
| [After](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStops/member/After) | 返回 Position 右侧的下一个 TabStop 对象。 |
| [Before](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStops/member/Before) | 返回 Position 左侧的下一个 **TabStop** 对象。 |
| [ClearAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStops/member/ClearAll) | 清除指定段落中的所有自定义制表位。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStops/member/Item) | 返回集合中的单个 **TabStop** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TabStops/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中制表位的数目。只读。 |