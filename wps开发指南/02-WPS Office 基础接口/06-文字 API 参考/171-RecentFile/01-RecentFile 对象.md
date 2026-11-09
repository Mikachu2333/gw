# RecentFile 对象

代表一个最近使用过的文件。 **RecentFile** 对象是 **[RecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFiles/obj)** 集合的一个成员。

## 说明


 **RecentFiles** 集合包含最近使用过的所有文件。 **RecentFiles** 集合中的各项显示在 **“文件”** 菜单的底部。

使用 **RecentFiles** (_Index_) 可返回一个 **RecentFile** 对象，其中 _Index_ 为索引号。索引号代表文件在 **“文件”** 菜单上的位置。


## 示例


```JavaScript
/*本示例判断如果最近使用的文件的数量大于等于1，则打开最近使用的第一个文件。*/
function test() {
    if (Application.RecentFiles.Count >= 1) {
        Application.RecentFiles.Item(1).Open()
    }
}
```
使用 **Add** 方法可将文件添加到 **RecentFiles** 集合。



```JavaScript
/*本示例将活动文档添加到最近使用的文件的列表。*/
function test() {
    if (ActiveDocument.Saved) {
        Application.RecentFiles.Add(ActiveDocument.FullName, true)
    }
}
```
 **SaveAs** 和 **Open** 方法都包含一个 _AddToRecentFiles_ 参数，该参数控制在打开或保存文件时是否将其添加到最近使用过的文件列表。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFile/member/Delete) | 删除近期文件列表上的指定文件。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFile/member/Open) | 打开指定的对象。返回一个 **Document** 对象，该对象代表打开的文档。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFile/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFile/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFile/member/Path) | 返回指定对象的磁盘或 Web 路径。只读 **String** 类型。 |
| [ReadOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFile/member/ReadOnly) | 如果对文档的更改不能保存到原文档，则该属性值为 **True** 。可读写 **Boolean** 类型。 |