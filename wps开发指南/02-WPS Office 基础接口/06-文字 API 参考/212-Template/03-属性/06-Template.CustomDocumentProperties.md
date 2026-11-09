# Template.CustomDocumentProperties

返回一个 **DocumentProperties** 集合，该集合代表指定模板的所有自定义文档属性。



## 语法

express.**CustomDocumentProperties**

express   一个代表 **Template** 对象的变量。

## 类型

Object

## 说明


使用 **BuiltInDocumentProperties** 属性可返回内置文档属性的集合。 **msoPropertyTypeString** 类型的属性的长度不能超过 255 个字符。  



## 示例


```JavaScript
/*本示例显示附加到第一个文档的模板上名为“KSOProductBuildVer”的自定义文档属性的值。*/
function test() {
    let docProperty = Documents.Item(1).AttachedTemplate.CustomDocumentProperties.Item("KSOProductBuildVer")
    alert(docProperty.Value)
}
```


```JavaScript
/*本示例为第一个模板添加一个自定义文档属性，并显示该模板上自定义文档属性的数量。*/
function test() {
    let docProperties = Application.Templates.Item(1).CustomDocumentProperties
    docProperties.Add("example_1", false, msoPropertyTypeNumber, 1000, false)
    alert(docProperties.Count)
}
```
