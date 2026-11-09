# Presentation.CustomDocumentProperties

返回一个 **DocumentProperties** 集合，该集合代表指定演示文稿的所有自定义文档属性。只读。



## 语法

express.**CustomDocumentProperties**

express   一个代表 **Presentation** 对象的变量。

## 类型

Object

## 说明


使用 **[BuiltInDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/BuiltInDocumentProperties)** 属性可以返回内置文档属性集合。



## 示例


```JavaScript
/*本示例为活动演示文稿添加一个名为“Complete”的静态自定义属性。*/
function test() {
    ActivePresentation.CustomDocumentProperties.Add("Complete", false, msoPropertyTypeBoolean, false)
}
```


```JavaScript
/*如果自定义属性“Complete”的值为 true，本示例将打印第一篇演示文稿。*/
function test() {
    let presentation = Presentations.Item(1)
    if (presentation.CustomDocumentProperties.Item("complete").Value) {
        presentation.PrintOut()
    }
}
```
