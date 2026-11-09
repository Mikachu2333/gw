# DocumentProperties.Add

新建一个自定义的文档属性。只能在自定义 **DocumentProperties** 集合中新添文档属性。



## 语法

express.**Add(Name, LinkToContent, Type, Value, LinkSource)**

express   一个代表 **DocumentProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 属性的 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Name)** 字符串。 |
| LinkToContent | 必选 | boolean | 指定 **[LinkToContent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/LinkToContent)** 属性是否链接到容器文档中的内容。如果参数为 **True** ，则必需设置 _LinkSource_ 参数，如果为 **False** ，则需要设置 _Value_ 参数。 |
| Type | 可选 | any | **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Type)** 属性的数据类型。可以是以下 **[MsoDocProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoDocProperties)** 常量之一： **msoPropertyBoolean** 、 **msoPropertyDate** 、 **msoPropertyFloat** 、 **msoPropertyNumber** 或 **msoPropertyString** 。 |
| Value | 可选 | any | 如果未链接到容器文档中的内容，则为 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/Value)** 属性的值。该数值将进行转换以匹配类型参数指定的数据类型，如果不能转换，则将发生错误。如果 _LinkToContent_ 为 **True** ，将忽略该参数，新文档属性将被赋予默认值，直到容器应用程序更新链接的属性值（通常在保存文档时进行）。 |
| LinkSource | 可选 | any | 如果 _LinkToContent_ 为 **False** ，则忽略此参数。此参数为 **[LinkSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/member/LinkSource)** 属性的来源。可使用的源链接的类型由容器应用程序决定。例如，DDE 链接将使用 "Server|Document!Item" 语法。 |

## 返回值

DocumentProperty

## 说明


如果在 **DocumentProperties** 集合中添加了自定义文档属性，该属性链接到 WPS Office 文档中指定的值，则必须保存文档以查看 **DocumentProperty** 对象的更改。



## 示例


```JavaScript
/*本示例运行于文字组件，它将向 DocumentProperties 集合中添加四个自定义文档属性。*/
function test() {
    let date = new Date()
    let docProperties = ActiveDocument.CustomDocumentProperties
    docProperties.Add("LastModifiedBy", false, msoPropertyTypeString, Application.UserName)
    docProperties.Add("CustomNumber", false, msoPropertyTypeNumber, 1000)
    docProperties.Add("CustomString", false, msoPropertyTypeString, "This is a custom property.")
    docProperties.Add("CustomDate", false, msoPropertyTypeDate, date)
}
```


```JavaScript
/*本示例运行于文字组件，判断如果第一个文档的自定义文档属性的数量大于 1，则向 DocumentProperties 集合中添加一个自定义文档属性。*/
function test() {
    let docProperties = Documents.Item(1).CustomDocumentProperties
    if (docProperties.Count > 1) {
        docProperties.Add("example", false, null, "test")
    }
}
```
