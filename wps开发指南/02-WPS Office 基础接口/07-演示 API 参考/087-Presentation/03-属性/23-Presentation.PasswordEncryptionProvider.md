# Presentation.PasswordEncryptionProvider

返回一个 **String** 类型的值，该值指定 WPP 通过密码加密文档时所使用的加密算法提供程序的名称。只读。



## 语法

express.**PasswordEncryptionProvider**

express   一个代表 **Presentation** 对象的变量。

## 类型

string

## 说明


使用 **SetPasswordEncryptionOptions** 方法可指定 WPP 通过密码加密文档所使用的算法。



## 示例


```JavaScript
/*本示例中，如果使用的密码加密算法的提供商不是 Microsoft RSA SChannel Cryptographic Provider，则对密码加密选项进行设置。*/
function test() {
    if (ActivePresentation.PasswordEncryptionProvider != "Microsoft RSA SChannel Cryptographic Provider") {
        ActivePresentation.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿加密文档时所用加密算法提供程序的名称。*/
function test() {
    alert(Presentations.Item(1).PasswordEncryptionProvider)
}
```
