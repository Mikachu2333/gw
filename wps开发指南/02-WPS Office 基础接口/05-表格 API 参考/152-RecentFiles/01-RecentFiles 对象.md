# RecentFiles 对象

代表最近使用过的文件的列表。

## 说明


每个文件都由一个 **RecentFile** 对象代表。

使用 **Application** 对象的 **RecentFiles** 属性可返回 **RecentFiles** 集合。


## 示例


```JavaScript
/*本示例将最近使用的文件列表中的最多文件数设置为 6。*/
function test() {
    Application.RecentFiles.Maximum = 6
}
```


```JavaScript
/*本示例将最近使用的文件列表中的最多文件数设置为 5，然后将最近使用的所有文件的名称和完整路径赋值给活动工作表的单元格。*/
function test() {
    let recentFiles = Application.RecentFiles
    recentFiles.Maximum = 5
    Range("A1").Value2 = "name"
    Range("B1").Value2 = "path"
    for (let i = 1; i <= recentFiles.Count; i++) {
        ActiveSheet.Cells.Item(i + 1, 1).Value2 = recentFiles.Item(i).Name
        ActiveSheet.Cells.Item(i + 1, 2).Value2 = recentFiles.Item(i).Path
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/member/Add) | 向最近使用的文件列表中添加文件。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Maximum](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/member/Maximum) | 返回或设置最近使用文件清单中文件数目的上限。 **Long** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/member/Parent) | 返回指定对象的父对象。只读。 |