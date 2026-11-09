# AllowEditRange 对象

代表受保护的工作表上可进行编辑的单元格。

## 说明


使用 **AllowEditRanges** 集合的 **Add** 方法或 **Item** 属性可返回 **AllowEditRange** 对象。

返回 **AllowEditRange** 对象后，可使用 **ChangePassword** 方法更改密码以访问可在受保护的工作表上编辑的区域。


## 示例


```JavaScript
/*在此示例中，ET 允许编辑活动工作表上的 A1:A4 范围，通知用户更改此指定区域的密码，然后通知用户更改成功。在运行此代码之前，工作表必须未受到保护。*/
function test() {
    let sheet = Application.ActiveSheet
    sheet.Unprotect()
    let wksPassword = InputBox("Enter password for the worksheet")

    //Establish a range that can allow edits on the protected worksheet.
    sheet.Protection.AllowEditRanges.Add("Classified", Range("A1:A4"), wksPassword)
    alert("Cells A1 to A4 can be edited on the protected worksheet.")

    //Change the password.
    wksPassword = InputBox("Enter the new password for the worksheet")
    sheet.Protection.AllowEditRanges("Classified").ChangePassword(wksPassword)

    alert("The password for these cells has been changed.")
}
```


```JavaScript
/*本示例将活动工作表上第一个可编辑的单元格区域删除。*/
function test() {
    ActiveSheet.Protection.AllowEditRanges.Item(1).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ChangePassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRange/member/ChangePassword) | 更改受保护的工作表中可以进行编辑的区域的密码。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRange/member/Delete) | 删除对象。 |
| [Unprotect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRange/member/Unprotect) | 取消可编辑的单元格区域的保护。如果可编辑的单元格区域不是受保护的，则此方法不起作用。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRange/member/Range) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)代表，它代表在受保护工作表上可编辑的区域的子集。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AllowEditRange/member/Title) | 返回或设置受保护的工作表上可编辑的单元格区域的标题。 **String** 型，可读写。 |