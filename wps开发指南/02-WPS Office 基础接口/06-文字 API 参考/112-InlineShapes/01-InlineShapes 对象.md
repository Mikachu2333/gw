# InlineShapes 对象

 **InlineShape** 对象的集合，这些对象代表文档、范围或所选内容中的所有内嵌形状。

## 说明


使用 **InlineShapes** 属性返回 **InlineShapes** 集合。


## 示例


```JavaScript
/*本示例将活动文档中的每个内嵌形状转换为 Shape 对象。*/
function test() {
    let inlineShapes = ActiveDocument.InlineShapes
    for (let i = inlineShapes.Count; i > 0 ; i--) {
        inlineShapes.Item(i).ConvertToShape()
    }
}
```


```JavaScript
/*本示例向第一个文档添加图表，并设置该图表的标题文本。*/
function test() {
    let chart = Documents.Item(1).InlineShapes.AddChart2().Chart
    chart.ChartTitle.Text = "example"
}
```
使用 **New** 方法将新图片创建为内联形状。使用 **AddPicture** 和 **AddOLEObject** 方法添加图片或 OLE 对象，并将它们链接到源文件。使用 **AddOLEControl** 方法添加 ActiveX 控件。

 **Shape** 对象锚定到一系列文本，但可以自由浮动，并且可以放置在页面上的任意位置。使用 **ConvertToInlineShape** 方法和 **ConvertToShape** 方法将形状从一种类型转换为另一种类型。您只能将图片、OLE 对象和 ActiveX 控件转换为内联形状。

文档中此集合的 **Count** 属性仅返回主要文章中的项目数。要对其他故事中的项目进行计数，请使用带有 **Range** 对象的集合。

当您打开在早期版本的 WPS 中创建的文档时，图片将转换为内联形状。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddChart2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/AddChart2) | 向文档添加图表。返回一个 **InlineShape** 对象，该对象代表图表并将其添加到指定的集合。 |
| [AddHorizontalLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/AddHorizontalLine) | 向当前文档添加一条基于图像文件的横线。 |
| [AddHorizontalLineStandard](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/AddHorizontalLineStandard) | 向当前文档添加一条横线。 |
| [AddOLEControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/AddOLEControl) | 创建一个 ActiveX 控件（以前称为 OLE 控件）。返回代表新 ActiveX 控件的 **InlineShape** 对象。 |
| [AddOLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/AddOLEObject) | 创建一个 OLE 对象。返回代表新 OLE 对象的 **InlineShape** 对象。 |
| [AddPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/AddPicture) | 在文档中添加一幅图片。返回一个代表该图片的 **[InlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/obj)** 对象。 |
| [AddPictureBullet](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/AddPictureBullet) | 向当前文档添加一个基于图像文件的图片项目符号。返回一个 **InlineShape** 对象。 |
| [AddSmartArt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/AddSmartArt) | 将 SmartArt 图形作为内嵌形状插入活动文档。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/Item) | 返回集合中的单个 **InlineShape** 对象。 |
| [New](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/New) | 插入一个空白的 WPS 图片对象，该对象是边长为一英寸的正方形，四周带有边框。此方法以 **InlineShape** 对象的形式返回新图形。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中内嵌图形的数目。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **InlineShapes** 对象的父对象。 |