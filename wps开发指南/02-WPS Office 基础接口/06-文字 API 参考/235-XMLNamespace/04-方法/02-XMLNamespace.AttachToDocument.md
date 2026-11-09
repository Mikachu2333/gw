# XMLNamespace.AttachToDocument

将 XML 架构附加到文档。



## 语法

express.**AttachToDocument(Document)**

express   一个代表 **XMLNamespace** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Document | 必选 | any | 将指定 XML 架构附加到的文档。 |

## 返回值

void

## 说明


SimpleSample 架构包含在 Smart Document Software Development Kit (SDK) 中。 有关详细信息，请参阅 Smart Document SDK。



## 示例


```JavaScript
/*本示例将指定的架构添加到架构库，然后将其附加到活动文档中。本示例假设在指定的路径中已有一个名为 test.xml 的架构。*/
function test() {
    let xmlNamespace = Application.XMLNamespaces.Add("D:\\示例\\test.xml", "D:\\示例\\test.xml", "example_1", false)
    xmlNamespace.AttachToDocument(ActiveDocument)
}
```


```JavaScript
/*本示例将架构库中第一个架构附加到新文档上。*/
function test() {
    let document = Application.Documents.Add()
    let xmlNamespace = Application.XMLNamespaces.Item(1)
    xmlNamespace.AttachToDocument(document)
}
```
