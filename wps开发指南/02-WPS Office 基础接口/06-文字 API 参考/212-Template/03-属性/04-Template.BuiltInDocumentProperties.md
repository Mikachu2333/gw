# Template.BuiltInDocumentProperties

返回一个 **DocumentProperties** 集合，该集合代表指定模板的所有内置的文档属性。



## 语法

express.**BuiltInDocumentProperties**

express   一个代表 **Template** 对象的变量。

## 类型

Object

## 说明


要返回单个代表特定内置文档属性的 **DocumentProperty** 对象，可使用 **BuiltinDocumentProperties** 属性。如果 WPS 没有为一个内置的文档属性定义一个值，则读取这个文档属性的 **Value** 属性时会产生一个错误。  

用 **CustomDocumentProperties** 属性返回自定义文档属性的集合。



## 示例


```JavaScript
/*本示例显示第一个模板上第一个内置文档属性的名称。*/
function test() {
    let docProperty = Application.Templates.Item(1).BuiltInDocumentProperties.Item(1)
    alert(docProperty.Name)
}
```


```JavaScript
/*本示例显示附加到第一个文档的模板上名为“Subject”的内置文档属性的类型是否为msoPropertyTypeString。*/
function test() {
    let docProperty = Documents.Item(1).AttachedTemplate.BuiltInDocumentProperties.Item("Subject")
    alert(docProperty.Type == msoPropertyTypeString)
}
```
