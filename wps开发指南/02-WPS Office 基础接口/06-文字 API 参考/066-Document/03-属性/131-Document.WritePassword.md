# Document.WritePassword

该属性设置一个保存对指定文档所做的修改时所需的密码。 **String** 类型，只写。



## 语法

express.**WritePassword**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 说明


请避免在应用程序中使用硬编码的密码。如果过程中要求输入密码，请从用户处请求密码，并将密码作为变量存储起来，然后在代码中使用该变量。有关如何做到这一点的建议最佳操作，请参阅 WPS Office解决方案开发人员安全注意事项。



## 示例


```JavaScript
/*本示例判断如果活动文档没有设置密码以防修改文档，则将“Y6dh!et5”设置为该文档的写权限密码。*/
function test() {
    if (!ActiveDocument.WriteReserved) {
        ActiveDocument.WritePassword = "Y6dh!et5"
    }
}
```


```JavaScript
/*本示例判断如果第一个文档没有设置密码以防修改文档，则通知用户设置该文档的写权限密码。*/
function test() {
    if (!Documents.Item(1).WriteReserved) {
        let password = InputBox("请输入密码用来保存对第一个文档所做的修改：")
        if (password) {
            Documents.Item(1).WritePassword = password
        }
    }
}
```
