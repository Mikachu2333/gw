# Document.Close

关闭指定的文档。



## 语法

express.**Close(SaveChanges, OriginalFormat, RouteDocument)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SaveChanges | 可选 | any | 指定保存文档的操作。可以是 **[WdSaveOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSaveOptions)** 常量之一： **wdDoNotSaveChanges** 、 **wdPromptToSaveChanges** 或 **wdSaveChanges** 。 |
| OriginalFormat | 可选 | any | 指定保存文档的格式。可以是 **[WdOriginalFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOriginalFormat)** 常量之一： **wdOriginalDocumentFormat** 、 **wdPromptUser** 或 **wdWordDocument** 。 |
| RouteDocument | 可选 | any | 如果为 **True** ，则将文档传送给下一个收件人。如果文档没有附加的传送名单，则忽略该参数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在关闭活动文档前提示用户保存该文档，如果用户单击"取消"，则显示一条信息。*/
function test() {
    try {
        ActiveDocument.Close(wdPromptToSaveChanges, wdPromptUser)
    } catch (error) {
        alert("Document was not closed")
    }
}
```


```JavaScript
/*本示例关闭所有已打开的文档且不保存待定的更改。*/
function test() {
    for (let i = Documents.Count; i >= 1; i--) {
        Documents.Item(i).Close(wdDoNotSaveChanges)
    }
}
```
