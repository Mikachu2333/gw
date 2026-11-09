# DocumentProperty.Type

获取或设置文档属性类型。对于内置文档属性为只读；对于自定义文档属性为可读/写。



## 语法

express.**Type**

express   一个代表 **DocumentProperty** 对象的变量。

## 类型

**[MsoDocProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoDocProperties)** 常量。

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档的第一个内置文档属性的类型是否为msoPropertyTypeString。*/
function test() {
    let docProperty = ActiveDocument.BuiltInDocumentProperties.Item(1)
    alert(docProperty.Type == msoPropertyTypeString)
}
```


```JavaScript
/*本示例运行于文字组件，在活动文档中新建一个自定义文档属性，然后设置该自定义文档属性的类型。*/
function test() {
    let docProperty = ActiveDocument.CustomDocumentProperties.Add("example", false, null, true)
    docProperty.Type = msoPropertyTypeBoolean
}
```
