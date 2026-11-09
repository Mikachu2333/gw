# Protection.AllowEditRanges

返回 **AllowEditRanges** 对象。



## 语法

express.**AllowEditRanges**

express   一个代表 **Protection** 对象的变量。

## 类型

AllowEditRanges

## 示例


```JavaScript
/*在本示例中，ET 允许用户编辑活动工作表上的区域 A1:A4，并将指定区域的标题和地址通知用户。*/
function test() {
    let sheet = Application.ActiveSheet

    // Unprotect worksheet.
    sheet.Unprotect()

    // Establish a range that can allow edits on the protected worksheet.
    sheet.Protection.AllowEditRanges.Add("Classified", Range("A1:A4"), "123")

    //Notify the user the title and address of the range.
    let allowEditRange = sheet.Protection.AllowEditRanges.Item(1)

    alert(`Title of range: ${allowEditRange.Title}`)
    alert(`Address of range: ${allowEditRange.Range.Address()}`)
}
```


```JavaScript
/*本示例显示第二张工作表上 AllowEditRange 对象的数量。*/
function test() {
    alert(Worksheets.Item(2).Protection.AllowEditRanges.Count)
}
```
