# Presentation.BuiltInDocumentProperties

返回一个 **DocumentProperties** 集合，该集合代表指定演示文稿的所有内置文档属性。只读。



## 语法

express.**BuiltInDocumentProperties**

express   一个代表 **Presentation** 对象的变量。

## 类型

Object

## 说明


使用 **[CustomDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/member/CustomDocumentProperties)** 属性返回自定义文档属性集合。



## 示例


```JavaScript
/*本示例显示活动演示文稿的所有内置文档属性的名称。*/
function test() {
    let str = ""
    let documentProperties = Application.ActivePresentation.BuiltInDocumentProperties
    for (let i = 1; i <= documentProperties.Count; i++) {
        str += documentProperties.Item(i).Name + "\n"
    }
    alert(str)
}
```


```JavaScript
/*如果当前演示文稿的作者是“Jake Jarmel”，则本示例将该演示文稿的内置属性category的值设置为“Creative Writing”。*/
function test() {
    let documentProperties = Application.ActivePresentation.BuiltInDocumentProperties
    if (documentProperties.Item("author").Value == "Jake Jarmel") {
        documentProperties.Item("category").Value = "Creative Writing"
    }
}
```
