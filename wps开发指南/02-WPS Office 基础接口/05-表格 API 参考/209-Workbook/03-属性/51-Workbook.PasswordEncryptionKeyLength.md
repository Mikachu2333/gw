# Workbook.PasswordEncryptionKeyLength

返回一个 **Long** 类型的数值，该数值表示在对指定工作簿加密时 ET 使用的算法的密钥长度。只读。



## 语法

express.**PasswordEncryptionKeyLength**

express   一个代表 **Workbook** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **[SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SetPasswordEncryptionOptions)** 方法可指定 ET 是否对受密码保护的指定工作簿的文件属性进行加密。



## 示例


```JavaScript
/*如果密码加密的密钥长度小于 56，那么本示例设置指定工作簿的密码加密选项。*/
function test() {
    if (ActiveWorkbook.PasswordEncryptionKeyLength < 56) {
        ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例演示如果密码加密的密钥长度小于 128，那么将活动工作簿的密码加密选项设置为 AES 128 位加密，并通知用户。*/
function test() {
    if (ActiveWorkbook.PasswordEncryptionKeyLength < 128) {
        ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "AES", 128, true)
        alert("密钥设置成功！")
    }
}
```
