# RecentFile 对象

代表最近使用的文件列表中的某个文件。

## 说明


 **RecentFile** 对象是 **RecentFiles** 集合的成员

使用 **[RecentFiles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFiles/obj)** (索引) （其中 _index_ 是文件编号）返回 **RecentFile** 对象。


## 示例


```JavaScript
/*本示例打开最近使用的文件列表中的第二个文件。*/
function test() {
    Application.RecentFiles.Item(2).Open()
}
```


```JavaScript
/*本示例判断如果最近使用的文件列表中的第一个文件的名称为“example.xlsx”，则显示该文件的完整路径。*/
function test() {
    let recentFile = Application.RecentFiles.Item(1)
    if (recentFile.Name == "example.xlsx") {
        alert(recentFile.Path)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFile/member/Delete) | 删除对象。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFile/member/Open) | 打开一个最近使用的工作簿。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFile/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFile/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFile/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFile/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFile/member/Parent) | 返回指定对象的父对象。只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/RecentFile/member/Path) | 返回一个 **String** 值，该值代表此 **RecentFile** 对象表示的工作簿或文件的完整路径。 |