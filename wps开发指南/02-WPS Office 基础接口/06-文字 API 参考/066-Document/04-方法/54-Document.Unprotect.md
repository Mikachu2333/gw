# Document.Unprotect

清除对指定文档的保护。



## 语法

express.**Unprotect(Password)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Password | 可选 | any | 用于保护文档的密码字符串。密码是区分大小写的。如果用户在使用一篇设置有密码的文档时没有提供正确的密码，就会显示一个对话框，提示用户输入密码。 |

## 返回值

void

## 说明


如果对文档没有加以保护，则该方法会导致出错。

## 安全性

请避免在应用程序中使用硬编码的密码。如果过程中要求输入密码，请从用户处请求密码，并将密码作为变量存储起来，然后在代码中使用该变量。有关如何做到这一点的建议最佳操作，请参阅 WPS Office 解决方案开发人员安全注意事项。



## 示例


```JavaScript
/*本示例使用密码清除对活动文档的保护。*/
function test() {
    if (ActiveDocument.ProtectionType !== wdNoProtection) {
        ActiveDocument.Unprotect("Y6dh!et5")
    }
}
```


```JavaScript
/*本示例清除对活动文档的保护。然后插入文本并对文档进行修订保护。*/
function test() {
    if (ActiveDocument.ProtectionType !== wdNoProtection) {
        ActiveDocument.Unprotect()
        Selection.InsertBefore("department six")
        ActiveDocument.Protect(wdAllowOnlyRevisions, null, "Y6dh!et5")
    }
}
```
