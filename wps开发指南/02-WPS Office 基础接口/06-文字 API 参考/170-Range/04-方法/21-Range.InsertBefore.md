# Range.InsertBefore

在指定的范围前插入指定文本。



## 语法

express.**InsertBefore(Text)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 要插入的文本。 |

## 返回值

void

## 说明


在插入文本之后，该范围将扩展，以包含新文本。如果该范围是书签，则书签也会扩展，以包含新文本。

使用 JavaScript 的 **String.fromCharCode()** 方法和 **InsertAfter** 方法，可以插入引号、制表符和不间断连字符等字符。还可以使用下列 JavaScript 转义字符： **\\r** 、 **\\n** 、 **\\r\\n** 和 **\\t** 。



## 示例


```JavaScript
/*本示例在活动文档的开头插入文本“Introduction”，并将其作为一个单独段落。*/
function test() {
    let range = ActiveDocument.Content
    range.InsertParagraphBefore()
    range.InsertBefore("Introduction")
}
```


```JavaScript
/*本示例将输入框中的文本作为活动文档的第一段插入到文档中。*/
function test() {
    let response = InputBox("请键入一些文本：")
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.InsertBefore(`1.\t${response}\n`)
}
```
