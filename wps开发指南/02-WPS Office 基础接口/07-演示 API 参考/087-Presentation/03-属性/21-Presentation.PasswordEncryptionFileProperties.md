# Presentation.PasswordEncryptionFileProperties

如果 WPP 对使用密码保护的文档的文件属性进行加密，则返回 **True** 属性值。只读， **Boolean** 类型。



## 语法

express.**PasswordEncryptionFileProperties**

express   一个代表 **Presentation** 对象的变量。

## 类型

boolean

## 说明


使用 **SetPasswordEncryptionOptions** 方法可指定 WPP 通过密码加密文档所使用的算法。  

 **PasswordEncryptionFileProperties** 可以是下列 **Boolean** 常量之一:

| 常量 | 说明 |
| ---------------- | ------------------ |
| **False** | WPP 对密码保护的文档的文件属性不进行加密。 |
| **True** | WPP 对密码保护的文档的文件属性进行加密。 |



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
/*本示例判断使用密码保护的文档的文件属性是否进行加密，并通知用户。*/
function test() {
    let presentations = Application.Presentations.Item(1)
    if (presentations.PasswordEncryptionFileProperties) {
        alert("当前对密码保护的文档的文件属性进行加密")
    } else {
        alert("当前对密码保护的文档的文件属性不进行加密")
    }
}
```
