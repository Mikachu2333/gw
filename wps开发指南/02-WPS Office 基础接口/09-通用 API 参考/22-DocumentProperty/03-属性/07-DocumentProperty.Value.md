# DocumentProperty.Value

获取或设置文档属性的值。可读/写。



## 语法

express.**Value**

express   一个代表 **DocumentProperty** 对象的变量。

## 类型

any

## 说明


如果容器应用程序没有定义某个内置文档属性的值，则读取该文档属性的 **Value** 属性将导致出错。



## 示例


```JavaScript
/*本示例运行于文字组件，将活动文档中名为“Application name”的内置文档属性的值插入到文档中。*/
function test() {
    let docProperty = ActiveDocument.BuiltInDocumentProperties.Item("Application name")
    Selection.TypeText(docProperty.Value)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档的所有自定义文档属性的值。*/
function test() {
    let str = ""
    for (let i = 1; i <= ActiveDocument.CustomDocumentProperties.Count; i++) {
        let docProperty = ActiveDocument.CustomDocumentProperties.Item(i)
        str += docProperty.Value + "\n"
    }
    alert(str)
}
```
