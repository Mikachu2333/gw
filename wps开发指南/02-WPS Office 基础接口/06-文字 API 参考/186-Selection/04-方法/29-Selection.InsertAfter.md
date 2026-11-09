# Selection.InsertAfter

将指定文本插入范围或所选内容的末尾。



## 语法

express.**InsertAfter(Text)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 要插入的文本。 |

## 返回值

void

## 说明


使用此方法后，所选内容将扩展以包含新文本。

如果对引用整个段落的所选内容使用此方法，则在末段标记之后插入文本（插入文本将出现在下一段落的开头）。要在段尾插入文本，请先确定终点，再从该位置减去 1（因为段落标记是一个字符）。

如果所选内容以一个段落标记结尾，而该段落标记正好又是文档的末尾，则 WPS 在末段标记前插入文本，而不是在文档末尾创建一个新段落。同样，如果所选内容是书签，则 WPS 会插入指定文本，但是不会扩展所选内容或书签使其包含新文本。



## 示例


```JavaScript
/*本示例在活动文档的第一个段落的段尾插入文本。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    ActiveDocument.Range(range.Start, range.End - 1).Select()
    Selection.InsertAfter(" This is now the last sentence in paragraph one.")
}
```


```JavaScript
/*本示例在所选内容的末尾插入文本，然后将所选内容折叠到结束位置。*/
function test() {
    Selection.InsertAfter("appended text")
    Selection.Collapse(wdCollapseEnd)
}
```
