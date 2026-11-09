# Application.DisplayDocumentInformationPanel

返回或设置一个 **Boolean** 类型的值，该值表示是否显示文档属性面板。可读/写。



## 语法

express.**DisplayDocumentInformationPanel**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


该属性会在后续版本中弃用，但它仍然是向后兼容的对象模型的一部分。您不应在新应用程序中使用它。



## 示例


```JavaScript
/*本示例判断 WPS 是否显示文档属性面板，并通知用户。*/
function test() {
    if (Application.DisplayDocumentInformationPanel) {
        alert("显示文档属性面板")
    } else {
        alert("禁用文档属性面板")
    }
}
```


```JavaScript
/*本示例设置 WPS 显示文档属性面板。*/
function test() {
    Application.DisplayDocumentInformationPanel = true
}
```
