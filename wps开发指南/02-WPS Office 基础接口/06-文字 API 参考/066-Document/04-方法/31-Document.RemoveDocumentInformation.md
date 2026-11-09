# Document.RemoveDocumentInformation

从文档中删除敏感性信息、属性、批注和其他元数据。



## 语法

express.**RemoveDocumentInformation(RemoveDocInfoType)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RemoveDocInfoType | 必选 | WdRemoveDocInfoType | 指定要删除的内容。 |

## 返回值

void

## 示例


```JavaScript
/*本示例从活动文档中删除文档属性。*/
function test() {
    ActiveDocument.RemoveDocumentInformation(wdRDIDocumentProperties)
}
```


```JavaScript
/*本示例删除第一个文档中的修订标记，并通知用户。*/
function test() {
    Documents.Item(1).RemoveDocumentInformation(wdRDIRevisions)
    alert("已删除第一个文档中的修订标记")
}
```
