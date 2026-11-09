# Workbook.SetPasswordEncryptionOptions

使用密码来设置对工作簿进行加密的选项。



## 语法

express.**SetPasswordEncryptionOptions(PasswordEncryptionProvider, PasswordEncryptionAlgorithm, PasswordEncryptionKeyLength, PasswordEncryptionFileProperties)**

express   一个代表 **Workbook** 对象的变量。

## 返回值

void

## 说明


_PasswordEncryptionProvider_、_PasswordEncryptionAlgorithm_ 和 _PasswordEncryptionKeyLength_ 参数不相互独立。选定的加密提供商限制了可以选择的算法和密钥长度的设置。

对于 _PasswordEncryptionKeyLength_ 参数来说，没有固定的对密钥长度范围的限制。该范围是由“加密服务提供商”确定的，同时还确定加密算法。

该代码和此方法对于新的 ET 文件格式（xlsx、xlsb、xlsm 等...）不起任何作用，因为工作簿将始终使用 AES 128 位加密。如果某属性是使用此方法设置的，该属性将显示为已设置。当重新加载文件时，相应属性将重置为 AES 设置。



## 示例


```JavaScript
/*本示例设置活动工作簿的密码加密选项。*/
function test() {
    ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
}
```


```JavaScript
/*本示例设置活动工作簿的密码加密选项（AES 128 位加密）。*/
function test() {
    ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft Enhanced RSA and AES Cryptographic Provider (Prototype)", "AES", 128, false)
}
```
@parm PasswordEncryptionProvider - 区分大小写的加密服务提供商的字符串。

@parm PasswordEncryptionAlgorithm - 区分大小写的算法简称的字符串（例如“RC4”）。

@parm PasswordEncryptionKeyLength - 加密密钥的长度，为 8 的倍数（40 或更大）。

@parm PasswordEncryptionFileProperties - 如果为 **True** （默认值），则加密文件属性。

