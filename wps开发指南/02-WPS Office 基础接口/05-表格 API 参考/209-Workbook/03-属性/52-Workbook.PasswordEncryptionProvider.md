# Workbook.PasswordEncryptionProvider

返回一个 **String** 类型的字符串，该数值指定在对指定工作簿加密时 ET 使用的算法加密提供程序的名称。只读。



## 语法

express.**PasswordEncryptionProvider**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*如果受密码保护的工作簿的文件属性没有加密，则本示例设置指定工作簿的密码加密选项。*/
function test() {
    if (ActiveWorkbook.PasswordEncryptionProvider != "Microsoft RSA SChannel Cryptographic Provider") {
        ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例演示如果受密码保护的工作簿的文件属性没有加密，则设置活动工作簿使用 RC4 56 位加密，并告知用户 ET 使用的算法加密提供程序的名称。*/
function test() {
    if (ActiveWorkbook.PasswordEncryptionProvider.length == 0) {
        ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
        alert(ActiveWorkbook.PasswordEncryptionProvider)
    }
}
```
