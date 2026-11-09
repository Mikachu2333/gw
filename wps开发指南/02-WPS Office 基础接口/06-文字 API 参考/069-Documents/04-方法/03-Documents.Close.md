# Documents.Close

关闭指定的文档。



## 语法

express.**Close(SaveChanges, OriginalFormat, RouteDocument)**

express   一个代表 **Documents** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SaveChanges | 可选 | any | 指定保存文档的操作。可以是下列 **WdSaveOptions** 常量之一： **wdDoNotSaveChanges** 、 **wdPromptToSaveChanges** 或 **wdSaveChanges** 。 |
| OriginalFormat | 可选 | any | 指定保存文档的格式。可以是下列 **WdOriginalFormat** 常量之一： **wdOriginalDocumentFormat** 、 **wdPromptUser** 或 **wdWordDocument** 。 |
| RouteDocument | 可选 | any | 如果为 **True** ，则将文档传送给下一个收件人。如果文档没有附加的传送名单，则忽略该参数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例关闭所有已打开的文档。*/
function test() {
    Documents.Close()
}
```


```JavaScript
/*本示例关闭所有已打开的文档，且不保存待定的更改。*/
function test() {
    Documents.Close(wdDoNotSaveChanges, wdOriginalDocumentFormat, false)
}
```
