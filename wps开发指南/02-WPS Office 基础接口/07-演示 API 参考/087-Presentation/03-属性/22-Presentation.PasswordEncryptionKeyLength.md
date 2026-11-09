# Presentation.PasswordEncryptionKeyLength

返回一个 **Long** 类型的值，该值表示 WPP 通过密码加密文档时所使用算法的密钥长度。只读。



## 语法

express.**PasswordEncryptionKeyLength**

express   一个代表 **Presentation** 对象的变量。

## 类型

number（int 精度）

## 说明


使用 **SetPasswordEncryptionOptions** 方法可指定 WPP 通过密码加密文档所使用的算法。



## 示例


```JavaScript
/*本示例中，如果密码加密密钥的长度小于 40，则对密码加密选项进行设置。*/
function test() {
    if (ActivePresentation.PasswordEncryptionKeyLength < 40) {
        ActivePresentation.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿加密文档时所使用算法的密钥长度。*/
function test() {
    alert(Presentations.Item(1).PasswordEncryptionKeyLength)
}
```
