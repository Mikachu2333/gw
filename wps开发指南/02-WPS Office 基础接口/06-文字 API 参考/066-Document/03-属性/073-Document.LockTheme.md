# Document.LockTheme

返回或设置一个 **Boolean** 类型的值，该值代表用户是否可以更改文档主题。可读/写。



## 语法

express.**LockTheme**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


使用 **[ApplyDocumentTheme](#TODO)** 方法可应用 WPS Office主题。使用 **[DocumentTheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/DocumentTheme)** 属性可返回应用于文档的 Office 主题。



## 示例


```JavaScript
/*本示例显示用户是否可以更改活动文档的主题。*/
function test() {
    alert(!ActiveDocument.LockTheme)
}
```


```JavaScript
/*本示例设置用户不可以更改第一个文档的主题。*/
function test() {
    Documents.Item(1).LockTheme = true
}
```
