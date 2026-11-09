# AddIn 对象

代表单个加载宏，不论该加载宏是否已加载。

## 说明


 **AddIn** 对象是 **AddIns** 集合的成员。 **AddIns** 集合包含 ET 所有可用加载宏的列表（不论这些加载宏是否已安装）。此列表与 **“加载宏”** 对话框中显示的加载宏列表对应。

使用 **AddIns** (*index*)（其中 *index* 是加载宏标题或索引号）可返回单个 **AddIn** 对象。


## 示例


```JavaScript
/*本示例安装“ANALYS32”加载宏。*/
function test() {
    Application.AddIns.Item("ANALYS32").Installed = true
}
```
请勿混淆加载宏标题（出现在 **“加载宏”** 对话框中）与加载宏名称（加载宏的文件名）。必须严格按照 **“加载宏”** 对话框中的标题书写加载宏标题，但不必匹配大小写。

加载宏索引号代表加载宏在 **“加载宏”** 对话框内 **“可用加载宏”** 框中的位置。



```JavaScript
/*本示例创建一个列表，包含可用加载宏的指定属性。*/
function test() {
    let sheet = Application.Worksheets.Item("Sheet1")
    sheet.Rows.Item(1).Font.Bold = true
    sheet.Range("A1:D1").Value2 = ["Name", "Full Name", "Title", "Installed"]
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        sheet.Cells(i + 1, 1).Value2 = Application.AddIns.Item(i).Name
        sheet.Cells(i + 1, 2).Value2 = Application.AddIns.Item(i).FullName
        sheet.Cells(i + 1, 3).Value2 = Application.AddIns.Item(i).Title
        sheet.Cells(i + 1, 4).Value2 = Application.AddIns.Item(i).Installed
    }
    sheet.Range("A1").CurrentRegion.Columns.AutoFit()
}
```
 **Add** 方法将加载宏添加到可用加载宏列表中，但不安装加载宏。将加载宏的 **Installed** 属性设为 **True** 可安装加载宏。要安装可用加载宏列表中没有的加载宏，必须先使用 **Add** 方法，然后设置 **Installed** 属性。



```JavaScript
/*本示例添加并安装未显示的加载项。*/
function test() {
    let addin = Application.AddIns.Add("D:\\ANALYS32.XLL")
    addin.Installed = true
}
```
使用 **Workbooks** (*index*)（其中 *index* 是加载宏文件名而非标题）可返回对与某一加载宏相对应的工作簿的引用。因为加载宏通常不出现在 **Workbooks** 集合中，所以必须使用其文件名来指定。



```JavaScript
/*本示例显示 ANALYS32 加载宏的名称。*/
function test() {
    let addin = Application.AddIns.Item("ANALYS32")
    alert(`加载项的名称：${addin.Name}`)
}
```


```JavaScript
/*本示例显示 ANALYS32 加载宏的名称。*/
function test() {
    alert(AddIns.Item("ANALYS32").Name)
}
```
如果 **Installed** 属性为 **True** ，但调用加载宏中的函数仍旧失败，那么可能并未真正地加载了该加载宏。这是因为 **Addin** 对象代表了加载宏的存在及安装状态，但并不代表加载宏工作簿中的实际内容。为保证已安装的加载宏被加载，应当打开该加载宏工作簿。



```JavaScript
/*本示例打开第一个加载宏的工作簿。*/
function test() {
    // the add-in workbook isn't currently open. Manually open it.
    Application.Workbooks.Open(Application.AddIns.Item(1).FullName)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [CLSID](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/CLSID) | 返回一个只读的唯一标识符，或识别对象的 CLSID。 **String** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [FullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/FullName) | 返回对象的名称（以字符串表示），包括其磁盘路径。 **String** 型，只读。 |
| [Installed](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/Installed) | 如果安装了此加载宏，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IsOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/IsOpen) | 如果加载项当前打开，则返回 **True** 。只读 **Boolean** 类型 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/Parent) | 返回指定对象的父对象。只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/Path) | 返回一个 **String** 值，它代表应用程序的完整路径，不包括末尾的分隔符和应用程序名称。 |
| [progID](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/progID) | 返回对象的程序标识符。 **String** 型，只读。 |