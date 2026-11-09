# DocumentProperty.LinkSource

获取或设置所链接的自定义文档属性的来源。可读/写。



## 语法

express.**LinkSource**

express   一个代表 **DocumentProperty** 对象的变量。

## 类型

string

## 说明


本属性只用于自定义文档属性，不能用于内置文档属性。

指定链接的链接源由容器应用程序定义。

设置 **LinkSource** 属性会将 **LinkToContent** 属性设置为 **True** 。



## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档的第一个自定义文档属性的链接状态。要使本示例正常工作，docProperty 必须是一个有效的 DocumentProperty 对象。*/
function test() {
    let docProperty = ActiveDocument.CustomDocumentProperties.Item(1)
    let temp = ""
    if (!docProperty.LinkToContent) {
        temp = "not "
    }
    let stat = `This property is ${temp} linked`
    if (docProperty.LinkToContent) {
        stat += "\nThe link source is " + docProperty.LinkSource
    }
    alert(stat)
}
```


```JavaScript
/*本示例运行于文字组件，判断如果活动文档的自定义文档属性的值链接到容器文档的内容，则显示该自定义文档属性的来源。*/
function test() {
    for (let i = 1; i <= ActiveDocument.CustomDocumentProperties.Count; i++) {
        let docProperty = ActiveDocument.CustomDocumentProperties.Item(i)
        if (docProperty.LinkToContent) {
            alert(docProperty.LinkSource)
        }
    }
}
```
