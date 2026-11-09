# TextColumns 对象

 **TextColumn** 对象的集合，这些对象代表文档或文档的节中的所有文本栏。

## 说明


使用 **TextColumns** 属性可返回一个 **TextColumns** 集合。


## 示例


```JavaScript
/*本示例将活动文档第一节的各栏格式设为均匀间隔，在各栏之间设置分隔线。*/
function test() {
    let textColumns = ActiveDocument.Sections.Item(1).PageSetup.TextColumns
    textColumns.EvenlySpaced = msoTrue
    textColumns.LineBetween = msoTrue
}
```
可以使用 **Add** 方法向栏集合添加一栏。默认情况下， **TextColumns** 集合中有一个文本栏。



```JavaScript
/*本示例在活动文档中添加一个 2.5 英寸宽的栏。*/
function test() {
    ActiveDocument.PageSetup.TextColumns.Add(InchesToPoints(2.5), InchesToPoints(0.5), false)
}
```
使用 **SetCount** 方法可将文本分栏排列。



```JavaScript
/*本示例将活动文档中的文字排列为三个等宽的文本栏。*/
function test() {
    ActiveDocument.PageSetup.TextColumns.SetCount(3)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/Add) | 返回一个 **TextColumn** 对象，该对象代表添加到节中或文档中的新文本栏。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/Item) | 返回集合中的单个 **TextColumn** 对象。 |
| [SetCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/SetCount) | 将文字编排为指定数量的文本栏。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中文本列的数量。只读。 |
| [EvenlySpaced](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/EvenlySpaced) | 如果文本栏是等宽的，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [FlowDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/FlowDirection) | 返回或设置从一个文本栏到下一个文本栏的文字排列方向。 **WdFlowDirection** 类型，可读写。 |
| [LineBetween](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/LineBetween) | 如果 **TextColumns** 集合中的所有栏之间显示垂直分隔线，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Spacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/Spacing) | 返回或设置列间距（以磅为单位）。 **Single** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/Width) | 返回或设置文本栏的宽度（以磅为单位）。 **Long** 类型，可读写。 |