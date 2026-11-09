# Selection.InsertBefore

在指定选定内容之前插入指定文本。



## 语法

express.**InsertBefore(Text)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 要插入的文本。 |

## 返回值

void

## 说明


使用此方法插入文字后，所选内容将扩展以包含新文字。如果所选内容是书签，则书签也会扩展以包含下一处文字。



## 示例


```JavaScript
/*本示例在所选内容之前插入文字“Hamlet”（括在引号中），然后将所选内容折叠到结束位置。*/
function test() {
    Selection.InsertBefore("\"Hamlet\"")
    Selection.Collapse(wdCollapseEnd)
}
```


```JavaScript
/*本示例在活动文档的第一个段落之前插入文本。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Select()
    Selection.InsertBefore("这是插入文本。")
}
```
