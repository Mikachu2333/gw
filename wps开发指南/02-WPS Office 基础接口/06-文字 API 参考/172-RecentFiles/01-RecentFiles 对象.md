# RecentFiles 对象

 **[RecentFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFile/obj)** 对象的集合，这些对象代表最近使用过的文件。 **RecentFiles** 集合中的各项显示在 **“文件”** 菜单的底部。

## 说明


使用 **RecentFiles** 属性可返回 **RecentFiles** 集合。


## 示例


```JavaScript
/*本示例将最近使用的文件列表可以包含的最大文件数设置为5。*/
function test() {
    Application.RecentFiles.Maximum = 5
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
使用 **RecentFiles** (_Index_) 可返回一个 **RecentFile** 对象，其中 _Index_ 为索引号。索引号代表文件在 **“文件”** 菜单上的位置。



```JavaScript
/*本示例判断如果最近使用的文件的数量大于等于1，则打开最近使用的第一个文件。*/
function test() {
    if (Application.RecentFiles.Count >= 1) {
        Application.RecentFiles.Item(1).Open()
    }
}
```
 **SaveAs** 和 **Open** 方法都包含一个 _AddToRecentFiles_ 参数，该参数控制在打开或保存文件时是否将其添加到最近使用过的文件列表。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFiles/member/Add) | 返回一个 **RecentFile** 对象，该对象代表添加到最近使用过的文件列表中的文件。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFiles/member/Item) | 返回集合中的单个 **RecentFile** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFiles/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的最新文件数。只读。 |
| [Maximum](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/RecentFiles/member/Maximum) | 返回或设置可以显示在 **“文件”** 菜单上的最近使用的文件的最大数目。可读写 **Long** 类型。 |