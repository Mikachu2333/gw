# ListLevel 对象

代表单个列表级别，该列表级别可以是项目符号或编号列表中的唯一级别，也可以是多级符号列表中九个级别之一。 **ListLevel** 对象是 **ListLevels** 集合的一个成员。

## 说明


使用 **ListLevels** (_Index_) 可返回一个 **ListLevel** 对象，其中 _Index_ 是从 1 到 9 的数字。


## 示例


```JavaScript
/*本示例将活动文档中第一个列表模板的第一个列表级别设置为从 4 开始。*/
function test() {
    ActiveDocument.ListTemplates.Item(1).ListLevels.Item(1).StartAt = 4
}
```


```JavaScript
/*本示例显示“项目符号和编号”对话框中“多级符号”选项卡上第三个列表模板（不包括“无”选项）中第二个列表级别的字体的字号。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(3)
    alert(listTemplate.ListLevels.Item(2).Font.Size)
}
```
 **ListLevel** 对象使您可以访问指定列表级别的所有格式属性，例如 **Alignment** 、 **Font** 、 **NumberFormat** 、 **NumberPosition** 、 **NumberStyle** 和 **TrailingCharacter** 属性。

要应用列表级别，请首先标识范围或列表，然后使用 **ApplyListTemplate** 方法。段落开头的每个制表符转换为一个列表级别。例如，在使用 **ApplyListTemplate** 方法后，以三个制表符开头的段落将成为三级列表段落。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyPictureBullet](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/ApplyPictureBullet) | 用图片项目符号设置段落或段落区域的格式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/Alignment) | 返回或设置一个 **WdListLevelAlignment** 常量，该常量代表列表模板的列表级别的对齐方式。可读写。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/Font) | 返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。 **Font** 类型，可读写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [LinkedStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/LinkedStyle) | 返回或设置与指定 **ListLevel** 对象链接的样式的名称。 **String** 类型，可读写。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/NumberFormat) | 返回或设置指定列表级别的数字格式。可读/写 **String** 类型。 |
| [NumberPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/NumberPosition) | 返回或设置指定 **ListLevel** 对象的编号或项目符号的位置（以磅为单位）。 **Single** 类型，可读写。 |
| [NumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/NumberStyle) | 返回或设置 **ListLevel** 对象的编号样式。 **WdListNumberStyle** 类型，可读写。 |
| [ResetOnHigher](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/ResetOnHigher) | 设置或返回指定列表级别从 1 开始重新编号之前必须显示的列表级别。 **Long** 类型，可读写。 |
| [StartAt](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/StartAt) | 返回或设置指定 **ListLevel** 对象的起始编号。 **Long** 类型，可读写。 |
| [TabPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/TabPosition) | 返回或设置指定 **ListLevel** 对象的制表符位置。 **Single** 类型，可读写。 |
| [TextPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/TextPosition) | 返回或设置指定 **ListLevel** 对象的第二行换行文字的位置（以磅为单位）。 **Single** 类型，可读写。 |
| [TrailingCharacter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/member/TrailingCharacter) | 返回或设置在指定列表级别编号之后插入的字符。 **WdTrailingCharacter** 类型，可读写。 |