# Lists 对象

 **List** 对象的集合，这些对象代表指定文档中的所有列表。

## 说明


使用 **Lists** 属性返回 **Lists** 集合。


## 示例


```JavaScript
/*本示例显示活动文档中每个列表的项的数目。*/
function test() {
    let lists = ActiveDocument.Lists
    for (let i = 1; i <= lists.Count; i++) {
        alert(lists.Item(i).CountNumberedItems())
    }
}
```
使用 **Lists** (Index)（其中 Index 是索引号）返回单个 **List** 对象。



```JavaScript
/*本示例向活动文档上第一个列表应用“项目符号和编号”对话框中“编号”选项卡的第一种列表格式（不包括“无”）。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdNumberGallery).ListTemplates.Item(1)
    ActiveDocument.Lists.Item(1).ApplyListTemplate(listTemplate)
}
```
若要向文档添加新列表，请将 **ApplyListTemplate** 方法与指定区域的 **ListFormat** 对象一起使用。

您可以操作文档中的各个 **List** 对象，但要进行更精确的控制，您应该使用 **ListFormat** 对象。

图片项目符号列表不包括在 **Lists** 集合中。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Lists/member/Item) | 返回集合中的单个 **List** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Lists/member/Application) | 返回一个代表 WPS 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Lists/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中列表的数目。只读。 |