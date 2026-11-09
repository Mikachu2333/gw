# ListGallery 对象

代表单个列表格式库。 **ListGallery** 对象是 **ListGalleries** 集合的一个成员。

## 说明


每个 **ListGallery** 对象代表 **“项目符号和编号”** 对话框中的四个选项卡之一。

使用 **ListGalleries** (Index)（其中 Index 为 **wdBulletGallery** 、 **wdNumberGallery** 或 **wdOutlineNumberGallery** ）返回单个 **ListGallery** 对象。


## 示例


```JavaScript
/*本示例将“项目符号和编号”对话框中“项目符号”选项卡上的第三种列表格式（不包括 "无"）应用于所选内容。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdBulletGallery).ListTemplates.Item(3)
    Application.Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```


```JavaScript
/*本示例显示“项目符号和编号”对话框中“编号”选项卡上的第二个列表模板是否为内置模板。*/
function test() {
    let listGallery = Application.ListGalleries.Item(wdNumberGallery)
    alert(!listGallery.Modified(2))
}
```
若要查看指定的列表模板是否包含 WPS 中内置的格式，请使用 **ListGallery** 对象的 **Modified** 属性。若要将格式重置为原始列表格式，请使用 **ListGallery** 对象的 **Reset** 方法。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Modified](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGallery/member/Modified) | 如果指定的列表模板不是列表库中相应位置的内置列表模板，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGallery/member/Reset) | 将指定列表库中由 _Index_ 指定的列表模板重新设置为内置列表模板格式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ListTemplates](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListGallery/member/ListTemplates) | 返回一个 **ListTemplates** 集合，该集合代表指定列表库的所有列表格式。只读。 |