# Document.PasswordEncryptionAlgorithm

返回一个 **String** 类型的值，该值代表 WPS 用密码加密文档时所用的算法。只读。



## 语法

express.**PasswordEncryptionAlgorithm**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 说明


使用 **[SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/SetPasswordEncryptionOptions)** 方法指定 WPS 用密码加密文档时所用的算法。



## 示例


```JavaScript
/*如果当前使用的密码加密算法是“OfficeStandard”，则本示例将重新设置密码加密选项。*/
function test() {
    if (ActiveDocument.PasswordEncryptionAlgorithm == "OfficeStandard") {
        ActiveDocument.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例显示 WPS 用密码加密第一个文档时所用的算法。*/
function test() {
    alert(Documents.Item(1).PasswordEncryptionAlgorithm)
}
```
