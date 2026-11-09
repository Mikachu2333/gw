# AllowEditRanges 对象

所有 [AllowEditRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRange/obj)对象的集合，这些对象代表受保护工作表上的可编辑单元格。

## 说明


使用 **Protection** 对象的 **[AllowEditRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowEditRanges)** 属性可返回 **AllowEditRanges** 集合。

返回 **AllowEditRanges** 集合后，可以使用 **Add** 方法添加可在受保护的工作表上编辑的区域。


## 示例


```JavaScript
/*在本示例中，ET 允许用户编辑活动工作表上的区域 A1:A4，并将指定区域的标题和地址通知用户。*/
function test() {
    let sheet = Application.ActiveSheet

    // Unprotect worksheet.
    sheet.Unprotect()
    wksPassword = InputBox("Enter password for the worksheet")

    // Establish a range that can allow edits on the protected worksheet.
    sheet.Protection.AllowEditRanges.Add("Classified", Range("A1:A4"), wksPassword)

    //Notify the user the title and address of the range.
    let allowEditRange = sheet.Protection.AllowEditRanges.Item(1)

    alert(`Title of range: ${allowEditRange.Title}`)
    alert(`Address of range: ${allowEditRange.Range.Address()}`)
}
```


```JavaScript
/*本示例显示第一张工作表上是否存在可编辑单元格。*/
function test() {
    alert(Worksheets.Item(1).Protection.AllowEditRanges.Count > 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRanges/member/Add) | 在受保护的工作表中添加可编辑的单元格区域。返回 [AllowEditRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRange/obj)对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRanges/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRanges/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |