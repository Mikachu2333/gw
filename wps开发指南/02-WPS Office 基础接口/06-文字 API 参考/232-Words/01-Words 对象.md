# Words 对象

所选内容、范围或文档中的单词的集合。 **Words** 集合中的每一项均为代表一个单词的 **Range** 对象。不存在 Word 对象。

## 说明


使用 **Words** 属性返回 **Words** 对象。


## 示例


```JavaScript
/*本示例显示当前选中内容的单词数。*/
function test() {
    alert(Selection.Words.Count + " words are selected")
}
```
使用 **Words** （Index）（其中 Index 是索引号）返回表示一个单词的 **Range** 对象。索引号表示单词在 **Words** 集合中的位置。



```JavaScript
/*本示例将所选内容中的第一个单词格式设置为 24 磅斜体。*/
function test() {
    let range = Selection.Words.Item(1)
    range.Italic = true
    range.Font.Size = 24
}
```
Words 集合中的项包括单词和单词后面的空格。若要删除尾随空格，请使用 JavaScript 的 trim 函数，例如 ActiveDocument.Words.Item(1).Text.trim()。



```JavaScript
/*本示例选中活动文档中的第一个单词（及其尾随空格）。*/
function test() {
    ActiveDocument.Words.Item(1).Select()
}
```
如果所选内容为插入点，且后面紧跟一个空格，则 Selection.Words.Item(1) 指所选内容前面的单词。 如果所选的为插入点且后面紧跟一个字符，则 Selection.Words.Item(1) 指所选内容后面的单词。

文档中此集合的 **Count** 属性仅返回主要文章中的项目数。要对其他故事中的项目进行计数，请使用带有 **Range** 对象的集合。此外， **Count** 属性在总数中包括标点符号和段落标记。要计算文档中的实际字数，请使用 **字数统计** 对话框。



```JavaScript
/*本示例通过“字数统计”对话框计算活动文档中的实际字数，并将活动文档中的单词数（包括标点符号和段落标记）赋值给变量 numWords。*/
function test() {
    let temp = Dialogs(wdDialogToolsWordCount)
    //Execute the dialog box to refresh its data.
    temp.Execute()
    let numWords = ActiveDocument.Words.Count
}
```
有关调用内置对话框的详细信息，请参阅显示内置 WPS 对话框。

 **Add** 方法不可用于 **Words** 集合。请改用 **InsertAfter** 方法或 **InsertBefore** 方法将文本添加到 **Range** 对象



```JavaScript
/*本示例为活动文档中第一个单词后面插入文本。*/
function test() {
    ActiveDocument.Range().Words.Item(1).InsertAfter("New text ")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/member/Item) | 返回集合中的单个 **Range** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/member/Application) | 返回一个代表 WPS 应用程序的 [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj) 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的字数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [First](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/member/First) | 返回一个 **Range** 对象，该对象代表单词集合中的第一个单词。 |
| [Last](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/member/Last) | 返回一个 **Range** 对象，该对象代表单词集合中的最后一个单词。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Words** 对象的父对象。 |