# Names 对象

应用程序或工作簿中所有 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/obj)** 对象的集合。

## 说明


每一个 **Name** 对象都代表一个单元格区域的定义名称。名称可以是内置名称（如“Database”、“Print\_Area”和“Auto\_Open”）或自定义名称。

*RefersTo* 参数必须以 A1 样式表示法指定，包括必要时使用的美元符 ($)。例如，如果在 Sheet1 上选定了单元格 A10，并且通过将 *RefersTo* 参数“=Sheet1!A1:B1”而定义了一个名称，那么该新名称实际上指向单元格区域 A10:B10（因为指定的是相对引用）。若要指定绝对引用，请使用“=Sheet1!$A$1:$B$1”。

使用 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** 属性可返回 **Names** 集合。


## 示例


```JavaScript
/*本示例创建活动工作簿中所有名称及其引用的地址的列表。*/
function test() {
    let names = Application.ActiveWorkbook.Names
    let sheet = Application.Worksheets.Item(1)
    for (let r = 1; r <= names.Count; r++) {
        sheet.Cells.Item(r, 2).Value2 = names.Item(r).Name
        sheet.Cells.Item(r, 3).Value2 = names.Item(r).RefersToRange.Address()
    }
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/member/Add)** 方法可创建一个名称并将它添加到集合。



```JavaScript
/*本示例创建一个新名称，该名称引用名为 Sheet1 的工作表上的单元格 A1：C20。*/
function test() {
    Application.Names.Add("test3", "=Sheet1!$A$1:$C$20")
}
```
使用 **Names** (*index*)（其中 *index* 是名称索引号或定义名称）可返回一个 **Name** 对象。



```JavaScript
/*本示例从活动工作簿中删除名称 mySortRange。*/
function test() {
    Application.ActiveWorkbook.Names.Item("mySortRange").Delete()
}
```


```JavaScript
/*此示例使用命名区域作为公式来进行数据验证。此示例要求验证数据位于 Sheet2 上的区域 A2:A100 中。 此验证数据用于验证 D2：D10 范围内的 Sheet1 上输入的数据。*/
function test() {
    // Initialize the Excel objects and delete any artifacts from the last time the macro was run.
    let sheet1 = ActiveWorkbook.Worksheets.Item("Sheet1")
    let sheet2 = ActiveWorkbook.Worksheets.Item("Sheet2")
    try {
        ActiveWorkbook.Names.Item("Source").Delete()
    } catch (error) { }
    // On the source worksheet, create a range in column A of up to 98 cells long, and name it "Source".
    sheet2.Range(sheet2.Range("A2"), sheet2.Range("A100").End(xlUp)).Name = "Source"

    // On the target worksheet, create a range 8 cells long in column D.
    let rnTarget = sheet1.Range("D2:D10")

    // Clear out any artifacts from previous macro runs, then set up the target range with the validation data.
    rnTarget.ClearContents()

    let validation = rnTarget.Validation
    validation.Delete()
    validation.Add(xlValidateList, xlValidAlertStop, xlBetween, "=Source")

    // Set up the Error dialog with the appropriate title and message
    validation.ErrorTitle = "Value Error"
    validation.ErrorMessage = "You can only choose from the list."
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/member/Add) | 为单元格区域定义新名称。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/member/Item) | 从 **Names** 集合返回一个 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/member/Application) | 如果不使用对象识别符，则该属性返回一个代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果使用对象识别符，则该属性返回一个代表指定对象的创建程序的 **Application** 对象（可对一个 OLE 自动化对象使用该属性来返回该对象的应用程序）。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/member/Count) | 返回一个 **Number** 值，它代表集合中对象的数量。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/member/Parent) | 返回指定对象的父对象。只读。 |