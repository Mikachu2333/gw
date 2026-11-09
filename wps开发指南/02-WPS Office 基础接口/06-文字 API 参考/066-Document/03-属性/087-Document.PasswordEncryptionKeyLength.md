# Document.PasswordEncryptionKeyLength

返回一个 **Long** 类型的值，该值代表 WPS 用密码加密文档时所用的密钥长度。只读。



## 语法

express.**PasswordEncryptionKeyLength**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **[SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SetPasswordEncryptionOptions)** 方法指定 WPS 用密码加密文档时所用的密钥长度。



## 示例


```JavaScript
/*如果密码加密键长小于 40，则本示例将设置密码加密选项。*/
function test() {
    if (ActiveDocument.PasswordEncryptionKeyLength < 40) {
        ActiveDocument.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例显示 WPS 用密码加密第一个文档时所用的密钥长度。*/
function test() {
    alert(Documents.Item(1).PasswordEncryptionKeyLength)
}
```
