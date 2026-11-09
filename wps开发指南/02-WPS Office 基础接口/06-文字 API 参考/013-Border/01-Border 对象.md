# Border 对象

代表一个对象的一个边框。 **Border** 对象是 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合的成员。

## 说明


使用 **Borders** (*index*) 来返回单个 **Border** 对象（其中 *index* 标识边框）。Index 可以是某个 **[WdBorderType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBorderType)** 常量。由于选择或安装的语言支持（如美国英语）不同，有些 **[WdBorderType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBorderType)** 常量可能无法使用。

使用[ **LineStyle** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/LineStyle)属性将边框线应用于 **Border** 对象。

不能将 **Border** 对象添加到 **Borders** 集合。 **Borders** 集合中的成员数是有限的，具体数目因对象类型而异。例如，表格的 **Borders** 集合中有六个元素，而段落有四个。


## 示例


```JavaScript
/*本示例在活动文档的第一段下添加双线边框。*/
function test() {
    let borders = Application.ActiveDocument.Paragraphs.Item(1).Borders.Item(wdBorderBottom)
    borders.LineStyle = wdLineStyleDouble
    borders.LineWidth = wdLineWidth025pt
}
```


```JavaScript
/*本示例将单线边框加在选定内容的首字符四周。*/
function test() {
    let characters = Application.Selection.Characters.Item(1)
    characters.Font.Size = 36
    characters.Borders.Enable = true
}
```


```JavaScript
/*本示例在第一节中每一页的四周添加艺术型边框。*/
function test() {
    let borders = Application.ActiveDocument.Sections.Item(1).Borders
    for (let i = 1; i <= borders.Count; ++i) {
        borders.Item(i).ArtStyle = wdArtSeattle
        borders.Item(i).ArtWidth = 20
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/Application) | 返回一个 **Application** 对象，该对象代表 WPS 应用程序。 |
| [ArtStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/ArtStyle) | 返回或设置文档的艺术型页面边框。 **WdPageBorderArt** 类型，可读写。 |
| [ArtWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/ArtWidth) | 返回或设置指定艺术型边框的宽度（以磅为单位）。 **Number** 类型，可读写。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/Color) | 返回或设置指定 **Border** 对象的 24 位颜色。 |
| [ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/ColorIndex) | 返回或设置指定边框或字体对象的颜色。 **WdColorIndex** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [Inside](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/Inside) | 如果指定对象可以使用内部边框，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/LineStyle) | 返回或设置指定对象的边框样式。 **WdLineStyle** 类型，可读写。 |
| [LineWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/LineWidth) | 返回或设置对象边框的线条宽度。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Border** 对象的父对象。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Border/member/Visible) | 如果指定对象可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |