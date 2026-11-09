# Workbook.ProtectSharing

保存工作簿并设置共享保护。



## 语法

express.**ProtectSharing(Filename, Password, WriteResPassword, ReadOnlyRecommended, CreateBackup, SharingPassword, FileFormat)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 可选 | any | 一个表示保存文件的名称的字符串。可以包含一个完整路径；否则 ET 将该文件保存到当前文件夹中。 |
| Password | 可选 | any | 一个区分大小写的字符串，表示保护此文件所用的密码。长度不应超过 15 个字符。 |
| WriteResPassword | 可选 | any | 一个字符串，表示此文件的写保护密码。如果保存文件时使用了密码，但在打开文件时未提供密码，则该文件以只读方式打开。 |
| ReadOnlyRecommended | 可选 | any | 如果为 **True** ，则在打开文件时显示一条建议文件以只读方式打开的消息。 |
| CreateBackup | 可选 | any | 如果为 **True** ，则创建备份文件。 |
| SharingPassword | 可选 | any | 一个字符串，表示文件共享保护密码。 |
| FileFormat | 可选 | any | 指示文件格式的字符串。 |

## 返回值

void

## 示例


```JavaScript
/*本示例保存第一张工作簿并设置共享保护。*/
function test() {
    let wbAWB = Application.ActiveWorkbook
    let strPwd = InputBox("Enter password for the file")
    let strSharePwd = InputBox("Enter password for sharing")
    wbAWB.ProtectSharing(undefined, strPwd, undefined, undefined, undefined, strSharePwd)
}
```


```JavaScript
/*本示例将第一张工作簿另存为 BOOK1.xls 并设置共享保护。*/
function test() {
    Application.Workbooks.Item(1).ProtectSharing("BOOK1.xls", undefined, undefined, undefined, undefined, "Y6dh!et5")
}
```
