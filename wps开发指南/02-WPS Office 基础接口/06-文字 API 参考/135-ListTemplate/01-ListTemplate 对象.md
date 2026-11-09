# ListTemplate 对象

代表单个列表模板，其中包含用于定义列表的所有格式。 **ListTemplate** 对象是 **ListTemplates** 集合的一个成员。

## 说明


 **“项目符号和编号”** 对话框中有三张选项卡，每张选项卡上提供七种格式（不包括 **“无”** ），其中每种格式都对应一个列表模板对象。通过 **ListGalleries** 集合中的三个 **ListGallery** 对象可以访问这些预定义的列表模板。文档和模板也可以包含列表模板的集合。

使用 **ListTemplates** (_Index_) 可从列表库返回单个列表模板，其中 _Index_ 是从 1 到 7 的数字。


## 示例


```JavaScript
/*本示例显示“项目符号和编号”对话框中“编号”选项卡上的第三种列表格式的（不包括“无”）名称。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdNumberGallery).ListTemplates.Item(3)
    alert(listTemplate.Name)
}
```
对于从列表库访问的列表模板来说，有些属性和方法（例如 **Convert** 和 **Add** ）是无效的。您可以修改这些列表模板，但不能改变它们的列表库类型（ **wdBulletGallery** 、 **wdNumberGallery** 或 **wdOutlineNumberGallery** ）。



```JavaScript
/*本示例将活动文档上第三个列表模板应用于所选内容。*/
function test() {
    let listTemplate = ActiveDocument.ListTemplates.Item(3)
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```
使用 **Add** 方法可将列表模板添加到文档中的列表模板或模板的集合。

要查看指定列表模板是否包含 WPS 内置格式，请使用 **Modified** 属性和 **ListGallery** 对象。要将格式重新设置为原始列表格式，请对 **ListGallery** 对象使用 **Reset** 方法。

返回一个 **ListTemplate** 对象后，使用 **ListLevels** (_Index_) 可返回一个 **ListLevel** 对象，其中 _Index_ 是从 1 到 9 的数字。使用 **ListLevel** 对象，您可以访问指定列表级别的所有格式属性，例如 **Alignment** 、 **Font** 、 **NumberFormat** 、 **NumberPosition** 、 **NumberStyle** 和 **TrailingCharacter** 。

使用 **Convert** 方法可将一个多级列表模板转换为单级模板。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Convert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListTemplate/member/Convert) | 将多级列表转换为单级列表，或将单级列表转换为多级列表。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ListLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListTemplate/member/ListLevels) | 返回一个 **[ListLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevels/obj)** 集合，该集合代表指定的 **ListTemplate** 的所有级别。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListTemplate/member/Name) | 返回或设置指定对象的名称。 **String** 类型，可读写。 |
| [OutlineNumbered](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListTemplate/member/OutlineNumbered) | 如果指定 **ListTemplate** 对象应用了多级符号，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |