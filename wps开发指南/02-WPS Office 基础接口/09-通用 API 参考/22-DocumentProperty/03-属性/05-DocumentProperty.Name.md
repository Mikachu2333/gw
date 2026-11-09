# DocumentProperty.Name

获取或设置文档属性的名称。可读写。



## 语法

express.**Name**

express   一个代表 **DocumentProperty** 对象的变量。

## 类型

string

## 说明


 **DocumentProperty** 对象代表容器文档的自定义或内置文档属性。



## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档中第一个自定义文档属性的值和名称。*/
function test() {
    let docProperty = ActiveDocument.CustomDocumentProperties.Item(1)
    alert(`value = ${docProperty.Value}\nname = ${docProperty.Name}`)
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档的所有自定义文档属性的名称。*/
function test() {
    for (let i = 1; i <= ActiveDocument.CustomDocumentProperties.Count; i++) {
        let docProperty = ActiveDocument.CustomDocumentProperties.Item(i)
        alert(docProperty.Name)
    }
}
```
