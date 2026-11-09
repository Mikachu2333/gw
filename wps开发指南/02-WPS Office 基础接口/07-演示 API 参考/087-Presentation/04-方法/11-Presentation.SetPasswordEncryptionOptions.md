# Presentation.SetPasswordEncryptionOptions

设置 WPP 通过密码加密演示文稿时使用的选项。



## 语法

express.**SetPasswordEncryptionOptions(PasswordEncryptionProvider, PasswordEncryptionAlgorithm, PasswordEncryptionKeyLength, PasswordEncryptionFileProperties)**

express   一个代表 **Presentation** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PasswordEncryptionProvider | 必选 | string | 加密提供程序的名称。 |
| PasswordEncryptionAlgorithm | 必选 | string | 加密算法的名称。WPP支持流加密算法。 |
| PasswordEncryptionKeyLength | 必选 | number（int 精度） | 加密密钥的长度。必须为 8 的倍数，且不小于 40。 |
| PasswordEncryptionFileProperties | 必选 | boolean | 如果值为 **True** ，则 WPP 会对文件属性进行加密。 |

## 返回值

void

## 说明


*PasswordEncryptionFileProperties* 参数值可以是下列 **Boolean** 常量之一：

|                                     |
| ----------------------------------- |
| **False**                        |
| **True**                         |



## 示例


```JavaScript
/*本示例判断如果使用密码保护的文档的文件属性未进行加密，则对密码加密选项进行设置。*/
function test() {
    let presentation = Application.ActivePresentation
    if (!presentation.PasswordEncryptionFileProperties) {
        presentation.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例将第一篇演示文稿加密提供程序设置为“Microsoft Base Cryptographic Provider v1.0”，并通知用户。*/
function test() {
    let presentations = Presentations.Item(1)
    presentations.SetPasswordEncryptionOptions("Microsoft Base Cryptographic Provider v1.0", "RC4", 40, true)
    alert(`当前加密提供程序的名称为： ${presentations.PasswordEncryptionProvider}`)
}
```
