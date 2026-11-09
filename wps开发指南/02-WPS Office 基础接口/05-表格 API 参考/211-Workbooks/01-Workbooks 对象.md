# Workbooks 对象

ET 应用程序中当前打开的所有 [Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)对象的集合。

## 说明


有关使用一个 **Workbook** 对象的详细信息，请参阅 [Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)对象。
使用 [Workbooks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/obj) 属性可返回 [Workbooks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/obj) 集合。
使用 [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Add) 方法可创建一个新空工作簿并将它添加到集合。
使用 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Open) 方法可打开一个文件。这样会为打开的文件创建一个新工作簿。


## 示例


```JavaScript
/*本示例关闭所有打开的工作簿。*/
function test() {
    Application.Workbooks.Close()
}
```


```JavaScript
/*本示例给 ET 添加一个新空工作簿。*/
function test() {
    Application.Workbooks.Add()
}
```


```JavaScript
/*本示例将文件 Array.xlsx 打开为只读工作簿。*/
function test() {
    Application.Workbooks.Open("D:\\Array.xlsx", null, true)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Add) | 新建一个工作簿。新工作簿将成为活动工作簿。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Close) | 关闭对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Item) | 从集合中返回一个对象。 |
| [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Open) | 打开一个工作簿。 |
| [OpenDatabase](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/OpenDatabase) | 返回一个 **Workbook** 对象，该对象代表一个数据库。 |
| [OpenText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/OpenText) | 载入一个文本文件，并将其作为包含单个工作表的新工作簿进行分列处理，然后在此工作表中放入经过分列处理的文本文件数据。 |
| [OpenXML](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/OpenXML) | 打开一个 XML 数据文件。返回一个 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Application) | 如果不使用对象识别符，则该属性返回一个 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |