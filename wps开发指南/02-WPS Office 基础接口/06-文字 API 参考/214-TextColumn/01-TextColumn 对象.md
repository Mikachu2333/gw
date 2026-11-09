# TextColumn 对象

代表一个文本栏。 **TextColumn** 对象是 **[TextColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/obj)** 集合的一个成员。 **TextColumns** 集合包括文档或文档的节中的所有栏。

## 说明


使用 **TextColumns** (_Index_) 可返回一个 **TextColumn** 对象，其中 _Index_ 为索引号。索引号代表栏在 **TextColumns** 集合中的位置（从左向右计数）。


## 示例


```JavaScript
/*本示例将活动文档中第一个文本栏的段后间距设置为 0.5 英寸。*/
function test() {
    ActiveDocument.PageSetup.TextColumns(1).SpaceAfter = Application.InchesToPoints(0.5)
}
```
可以使用 **Add** 方法向栏集合添加一栏。默认情况下， **TextColumns** 集合中有一个文本栏。



```JavaScript
/*本示例将 2.5 英寸宽的文本栏添加到活动文档中。*/
function test() {
    let textColumn = ActiveDocument.PageSetup.TextColumns.Add(null, InchesToPoints(0.5), false)
    textColumn.Width = InchesToPoints(2.5)
}
```
使用 **SetCount** 方法可将文本分栏排列。



```JavaScript
/*本示例将活动文档中的文字排列成三栏，并显示第一栏后面的间距。*/
function test() {
    let textColumns = ActiveDocument.PageSetup.TextColumns
    textColumns.SetCount(3)
    alert(textColumns.Item(1).SpaceAfter)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [SpaceAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumn/member/SpaceAfter) | 返回或设置指定段落或文本栏后面的间距（以磅为单位）。可读/写 **Single** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumn/member/Width) | 返回或设置指定文本栏的宽度（以磅为单位）。可读写 **Long** 类型。 |