# DocumentProperty.LinkToContent

如果自定义文档属性的值链接到容器文档的内容，则为 **True** 。如果该值是静态的，则为 **False** 。可读/写。



## 语法

express.**LinkToContent**

express   一个代表 **DocumentProperty** 对象的变量。

## 类型

boolean

## 说明


该属性只用于自定义文档属性。对内置文档属性，该属性值为 **False** 。

使用 **[LinkSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/LinkSource)** 属性设置指定链接属性的来源。设置 **LinkSource** 属性会将 **LinkToContent** 属性设置为 **True** 。

对于 ET，如果 **LinkToContent** 设置为 **True** ，则必须提供工作簿中 **LinkSource** 的地址或区域名称。如果地址或区域名称涵盖多个单元格，则自定义文档属性从该区域的左上角单元格中获取值。



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
/*本示例运行于文字组件，显示活动文档的第一个自定义文档属性的值是否链接到容器文档的内容。*/
function test() {
    alert(ActiveDocument.CustomDocumentProperties.Item(1).LinkToContent)
}
```
