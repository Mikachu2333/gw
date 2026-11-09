# Presentation.PasswordEncryptionAlgorithm

返回一个 **String** 类型的值，该值代表 WPP 通过密码加密文档所使用的算法。只读。



## 语法

express.**PasswordEncryptionAlgorithm**

express   一个代表 **Presentation** 对象的变量。

## 类型

string

## 说明


使用 **SetPasswordEncryptionOptions** 方法可指定 WPP 通过密码加密文档所使用的算法。



## 示例


```JavaScript
/*本示例中，如果使用的密码加密算法不是 RC4，则对密码加密选项进行设置。*/
function test() {
    let presentation = Application.ActivePresentation
    if (presentation.PasswordEncryptionAlgorithm != "RC4") {
        presentation.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿加密文档所用的算法是否为RC4。*/
function test() {
    let algorithm = Application.Presentations.Item(1).PasswordEncryptionAlgorithm
    if (algorithm == "RC4") {
        alert("当前加密文档时所用的算法为RC4")
    } else {
        alert("当前加密文档时所用的算法不为RC4")
    }
}
```
