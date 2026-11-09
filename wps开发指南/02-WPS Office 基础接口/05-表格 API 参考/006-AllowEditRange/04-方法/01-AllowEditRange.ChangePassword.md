# AllowEditRange.ChangePassword

更改受保护的工作表中可以进行编辑的区域的密码。



## 语法

express.**ChangePassword(Password)**

express   一个代表 **AllowEditRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Password | 必选 | string | 新密码。 |

## 返回值

void

## 示例


```JavaScript
/*在此示例中，ET 允许编辑活动工作表上的 A1:A4 范围，通知用户更改此指定区域的密码，然后通知用户更改成功。在运行此代码之前，工作表必须未受到保护。*/
function test() {
    let sheet = Application.ActiveSheet
    sheet.Unprotect()

    //Establish a range that can allow edits on the protected worksheet.
    let strPassword = InputBox("Please enter the password for the range")
    sheet.Protection.AllowEditRanges.Add("Classified", Range("A1:A4"), strPassword)

    strPassword = InputBox("Please enter the new password for the range")

    //Change the password.
    sheet.Protection.AllowEditRanges("Classified").ChangePassword(strPassword)

    alert("The password for these cells has been changed.")
}
```


```JavaScript
/*本示例将活动工作表上第一个可以进行编辑的区域的密码更改为“Y6dh!et5”。*/
function test() {
    ActiveSheet.Protection.AllowEditRanges.Item(1).ChangePassword("Y6dh!et5")
}
```
