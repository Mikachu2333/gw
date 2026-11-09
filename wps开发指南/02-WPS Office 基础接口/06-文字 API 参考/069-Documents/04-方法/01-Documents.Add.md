# Documents.Add

返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象代表添加到打开文档集合中的新建空文档。



## 语法

express.**Add(Template, NewTemplate, DocumentType, Visible)**

express   一个代表 **Documents** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Template | 可选 | any | 要用于新文档的模板名。如果省略该参数，则使用 Normal 模板。 |
| NewTemplate | 可选 | any | 如果该属性值为 **True** ，则将文档作为模板打开。默认值为 **False** 。 |
| DocumentType | 可选 | any | 可以是下列 **WdNewDocumentType** 常量之一： **wdNewBlankDocument** 、 **wdNewEmailMessage** 、 **wdNewFrameset** 或 **wdNewWebPage** 。默认常量是 **wdNewBlankDocument** 。 |
| Visible | 可选 | any | 如果该属性值为 **True** ，将在可见窗口中打开文档。如果该属性值为 **False** ，则 WPS 打开此文档，但将文档窗口的 **Visible** 属性设置为 **False** 。默认值为 **True** 。 |

## 返回值

Document

## 示例


```JavaScript
/*本示例基于 Normal 模板新建一篇文档。*/
function test() {
    Documents.Add()
}
```


```JavaScript
/*本示例基于 Normal 模板新建一篇文档。*/
function test() {
    Documents.Add("C:\\AppData\\Roaming\\kingsoft\\office6\\templates\\wps\\zh_CN\\Normal.dotm")
}
```


```JavaScript
/*本示例以活动文档的模板为样例，创建并打开一个新模板。*/
function test() {
    let template = ActiveDocument.AttachedTemplate.FullName
    Documents.Add(template, true)
}
```
