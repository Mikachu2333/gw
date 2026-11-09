# ListTemplates 对象

文档、列表库或模板中的 **ListTemplate** 对象的集合。

## 说明


将 **ListTemplates** 属性与 **Document** 、 **ListGallery** 或 **Template** 对象一起使用可返回 **ListTemplates** 集合。使用 **ListGallery** 对象时， **ListTemplates** 集合是项目符号列表、编号列表和大纲编号列表的七种列表格式。


## 示例


```JavaScript
/*本示例显示活动文档中各列表模板的级别状态（单级或多级）。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ListTemplates.Count; i++) {
        let listTemplate = ActiveDocument.ListTemplates.Item(i)
        alert("This is a multiple-level list template - " + listTemplate.OutlineNumbered)
    }
}
```
使用 **Add** 方法可向指定的文档或模板中的集合添加列表模板。



```JavaScript
/*本示例向活动文档添加新的单级列表模板，并将该列表模板应用于所选内容。*/
function test() {
    let listTemplate = ActiveDocument.ListTemplates.Add()
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```
使用 **ListTemplates** (_Index_) 可从文档或模板中返回单个的列表模板，其中 _Index_ 是列表模板的名称或索引号。



```JavaScript
/*本示例将活动文档中名为“ListBullets”的列表模板的第一级应用于所选内容。*/
function test() {
    let listTemplate = ActiveDocument.ListTemplates.Item("ListBullets")
    Selection.Range.ListFormat.ApplyListTemplateWithLevel(listTemplate, null, null, null, 1)
}
```
使用 **ListTemplates** (_Index_) 可从列表库中返回单个的列表模板，其中 _Index_ 是从 1 到 7 的数字。



```JavaScript
/*本示例将项目符号列表库中的第一个列表模板应用于所选内容。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdBulletGallery).ListTemplates.Item(1)
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```
对于从列表库访问的列表模板来说，有些属性和方法（例如 **Convert** 和 **Add** ）是无效的。您可以修改这些列表模板，但不能改变它们的列表库类型（ **wdBulletGallery** 、 **wdNumberGallery** 或 **wdOutlineNumberGallery** ）。

要查看指定列表模板是否包含 WPS 内置格式，请使用 **Modified** 属性和 **ListGallery** 对象。要将格式重新设置为原始列表格式，请对 **ListGallery** 对象使用 **Reset** 方法。

返回一个 **[ListTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListTemplate/obj)** 对象后，使用 **ListLevels** (_Index_) 可返回一个 **ListLevel** 对象，其中 _Index_ 是从 1 到 9 的数字。使用 **ListLevel** 对象，您可以访问指定列表级别的所有格式属性，例如 **Alignment** 、 **Font** 、 **NumberFormat** 、 **NumberPosition** 、 **NumberStyle** 和 **TrailingCharacter** 。

使用 **Convert** 方法可将一个多级列表模板转换为单级模板。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListTemplates/member/Add) | 返回一个 **ListTemplate** 对象，该对象代表新的列表模板。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListTemplates/member/Item) | 返回集合中的单个 **ListTemplate** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListTemplates/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中列表模板的数目。只读。 |