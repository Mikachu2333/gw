# Workbook.PasswordEncryptionAlgorithm

返回一个 **String** 类型的数值，该数值表示 ET 对指定的工作簿编写密码时使用的算法。只读。



## 语法

express.**PasswordEncryptionAlgorithm**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 说明


使用 **[SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SetPasswordEncryptionOptions)** 方法可指定 ET 是否对受密码保护的工作簿的文件属性进行加密。



## 示例


```JavaScript
/*本示例设置活动工作簿的密码加密选项，并通知用户活动工作簿的密码的算法。*/
function test() {
    ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    alert(ActiveWorkbook.PasswordEncryptionAlgorithm)
}
```


```JavaScript
/*本示例设置活动工作簿使用 AES 128 位加密，并通知用户活动工作簿的密码的算法。*/
function test() {
    ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "AES", 128, true)
    alert(ActiveWorkbook.PasswordEncryptionAlgorithm)
}
```
