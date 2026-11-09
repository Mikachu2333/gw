# Document.Password

设置在打开文档必须使用的密码。 **String** 类型，只写。



## 语法

express.**Password**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 说明


 **要点** 请避免在应用程序中使用硬编码的密码。如果过程中要求输入密码，请从用户处请求密码，并将密码作为变量存储起来，然后在代码中使用该变量。有关如何做到这一点的建议最佳操作，请参阅 WPS Office解决方案开发人员安全注意事项。



## 示例


```JavaScript
/*本示例首先打开文档“example.docx”并为其设置密码，然后关闭该文档。*/
function test() {
    let document = Documents.Open("D:\\示例\\example.docx")
    document.Password = "Y6dh!et5"
    document.Close()
}
```


```JavaScript
/*本示例提示用户对活动文档进行密码保护，然后显示打开活动文档是否需要密码。*/
function test() {
    let password = InputBox("请输入密码对活动文档进行加密：")
    ActiveDocument.Password = password
    alert(ActiveDocument.HasPassword)
}
```
