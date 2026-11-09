# Range.InsertAfter

在范围的末尾插入指定文本。



## 语法

express.**InsertAfter(Text)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 要插入的文本。 |

## 返回值

void

## 说明


应用此方法之后，该范围将扩展，以包含新文本。

使用 JavaScript 的 **String.fromCharCode()** 方法和 **InsertAfter** 方法，可以插入引号、制表符和不间断连字符等字符。还可以使用下列 JavaScript 转义字符： **\\r** 、 **\\n** 、 **\\r\\n** 和 **\\t** 。

如果对引用整个段落的范围使用此方法，则在末段标记之后插入文本（插入的文本将出现在下一段的开头）。要在段尾插入文本，请先确定终点，再从该位置减去 1（因为段落标记是一个字符）。



## 示例


```JavaScript
/*本示例在活动文档的第一个段落的末尾插入文本。*/
function test() {
    let range1 = ActiveDocument.Paragraphs.Item(1).Range
    let range2 = ActiveDocument.Range(range1.Start, range1.End - 1)
    range2.InsertAfter(" This is now the last sentence in paragraph one.")
}
```
然而，如果该范围以一个段落标记结尾，而该段落标记正好又是文档的末尾，则 WPS 在末段标记前插入文本，而不是在文档末尾创建一个新段落。

同样，如果该范围是书签，WPS 将插入指定的文本，但不会扩展范围或书签以包含新文本。

 **Content** 属性返回 **Range** 对象。



```JavaScript
/*本示例在活动文档的末尾插入文本。*/
function test() {
    ActiveDocument.Content.InsertAfter("end of document")
}
```


```JavaScript
/*本示例将输入框中的文本作为活动文档的第二段插入到文档中。*/
function test() {
    let response = InputBox("Type some text")
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.InsertAfter(`1.\t${response}`)
    range.InsertParagraphAfter()
}
```
