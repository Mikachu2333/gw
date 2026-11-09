# Borders 对象

 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/obj)** 对象的集合，这些对象代表对象的边框。

## 说明


使用 **Borders** 属性返回 **Borders** 集合。


## 示例


```JavaScript
/*本示例在活动文档中的第一个段落应用默认边框。*/
function test() {
    ActiveDocument.Paragraphs(1).Borders.Enable = true
}
```
 **Border** 对象不能添加到 **Borders** 集合。 **Borders** 集合中的成员数目是有限的并取决于对象的类型。例如，一个表在 **Borders** 集合中有八个元素，而一个段落有四个元素。

 **Borders** (Index) 用于返回单个 **Border** 对象，其中 Index 标识边框。Index 可以是 **[WdBorderType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBorderType)** 常量之一。一些 **WdBorderType** 常量可能不可用，这取决于您所选择或安装的语言支持（例如美国英语）。

使用 **[LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/LineStyle)** 属性将边框线应用到 **Border** 对象。



```JavaScript
/*本示例在活动文档的第一段下方添加双线边框。*/
function test() {
    let border = ActiveDocument.Paragraphs.Item(1).Borders.Item(wdBorderBottom)
    border.LineStyle = wdLineStyleDouble
    border.LineWidth = wdLineWidth025pt
}
```


```JavaScript
/*本示例将单线边框加在选定内容的首字符四周。*/
function test() {
    let character = Selection.Characters.Item(1)
    character.Font.Size = 36
    character.Borders.Enable = true
}
```


```JavaScript
/*本示例在活动文档第一节中每一页的四周添加艺术型边框。*/
function test() {
    let borders = ActiveDocument.Sections.Item(1).Borders
    for (let i = 1; i <= borders.Count; i++) {
        borders.Item(i).ArtStyle = wdArtSeattle
        borders.Item(i).ArtWidth = 20
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyPageBordersToAllSections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/ApplyPageBordersToAllSections) | 将指定的页面边框格式应用于文档中的所有节。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/Item) | 返回指定区域或选定内容中的一个边框。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlwaysInFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/AlwaysInFront) | 如果在文档文本之前显示页面边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象，该对象代表 WPS 应用程序。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/Count) | 返回 **Borders** 集合中的项目数。 **Long** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [DistanceFrom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFrom) | 此属性返回或设置数值，该值指明指定的页面边框是从页面边缘还是从环绕的文本开始度量。 **WdBorderDistanceFrom** ，可读写。 |
| [DistanceFromBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFromBottom) | 返回或设置文本与下边框的距离（以磅为单位）。 **Long** 类型，可读写。 |
| [DistanceFromLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFromLeft) | 返回或设置文本与左边框的距离（以磅为单位）。 **Long** 类型，可读写。 |
| [DistanceFromRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFromRight) | 返回或设置文本的右边与右边框的距离（以磅为单位）。 **Long** 类型，可读写。 |
| [DistanceFromTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/DistanceFromTop) | 返回或设置文本与上边框的距离（以磅为单位）。 **Long** 类型，可读写。 |
| [Enable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/Enable) | 返回或设置指定对象的边框格式。 **Long** 类型，可读写。 |
| [EnableFirstPageInSection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/EnableFirstPageInSection) | 如果可为节内第一页设置页面边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableOtherPagesInSection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/EnableOtherPagesInSection) | 如果可为本节中除首页之外的所有页面设置页面边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HasHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/HasHorizontal) | 如果可将水平方向的边框应用于对象，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [HasVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/HasVertical) | 如果可将垂直边框应用于指定对象，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [InsideColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/InsideColor) | 返回或设置内部边框的 24 位颜色。可读写。 |
| [InsideLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/InsideLineStyle) | 返回或设置指定对象的内部边框。 |
| [InsideLineWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/InsideLineWidth) | 返回或设置对象内部边框的线条宽度。 |
| [JoinBorders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/JoinBorders) | 如果删除段落和表格边缘的垂直边框，以使水平边框与页面边框相连，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [OutsideColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/OutsideColor) | 返回或设置外部边框的 24 位颜色。 |
| [OutsideLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/OutsideLineStyle) | 返回或设置指定对象的外部边框。 |
| [OutsideLineWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/OutsideLineWidth) | 返回或设置对象外部边框的线条宽度。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Borders** 集合中的父对象。 |
| [SurroundFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/SurroundFooter) | 如果页面边框环绕文档的页脚，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SurroundHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/member/SurroundHeader) | 如果页面边框环绕文档页眉，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |