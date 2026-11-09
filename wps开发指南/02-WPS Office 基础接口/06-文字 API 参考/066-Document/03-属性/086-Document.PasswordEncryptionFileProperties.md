# Document.PasswordEncryptionFileProperties

如果 WPS 为密码保护的文档的文件属性加密，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**PasswordEncryptionFileProperties**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


使用 **[SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SetPasswordEncryptionOptions)** 方法指定 WPS 是否将密码保护的文档的文件属性加密。



## 示例


```JavaScript
/*如果未对密码保护的文档的文件属性加密，本示例将设置密码加密选项。*/
function test() {
    if (!ActiveDocument.PasswordEncryptionFileProperties) {
        ActiveDocument.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例显示 WPS 是否为密码保护的第一个文档的文件属性加密。*/
function test() {
    alert(Documents.Item(1).PasswordEncryptionFileProperties)
}
```
