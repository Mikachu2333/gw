# Document.SetPasswordEncryptionOptions

设置 WPS 用于通过密码加密文档的选项



## 语法

express.**SetPasswordEncryptionOptions(PasswordEncryptionProvider, PasswordEncryptionAlgorithm, PasswordEncryptionKeyLength, PasswordEncryptionFileProperties)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PasswordEncryptionProvider | 必选 | string | 加密提供程序的名称。 |
| PasswordEncryptionAlgorithm | 必选 | string | 加密算法的名称。WPS 支持流式加密算法。 |
| PasswordEncryptionKeyLength | 必选 | number（int4 精度） | 加密密钥长度。必须是从 40 开始的 8 的倍数。 |
| PasswordEncryptionFileProperties | 可选 | any | 如果该属性值为 **True** ，则 WPS 对文件属性加密。默认值为 **True** 。 |

## 返回值

void

## 说明


为了增强安全性，不要使用不可靠的加密（XOR）（又称作“OfficeXor”）或“Office97/2000 Compatible”（又称作“OfficeStandard”）算法。



## 示例


```JavaScript
/*如果使用的密码加密算法是“OfficeXor”或“OfficeStandard”，本示例将密码加密设置为更强的加密。*/
function test() {
    let algorithm = ActiveDocument.PasswordEncryptionAlgorithm
    if (algorithm == "OfficeXor" || algorithm == "OfficeStandard") {
        ActiveDocument.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例设置 WPS 用于通过密码加密第一个文档的选项，并显示第一个文档的加密的密钥长度。*/
function test() {
    Documents.Item(1).SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 64, false)
    alert(Documents.Item(1).PasswordEncryptionKeyLength)
}
```
