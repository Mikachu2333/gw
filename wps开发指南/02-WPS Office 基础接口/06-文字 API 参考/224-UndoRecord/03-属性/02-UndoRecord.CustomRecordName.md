# UndoRecord.CustomRecordName

返回 **String** 类型的值，该值指定所有自定义撤消操作完成后撤消堆栈上出现的项。只读。



## 语法

express.**CustomRecordName**

express   一个代表 **UndoRecord** 对象的变量。

## 类型

string

## 说明


如果自定义撤消记录嵌套在其他自定义撤消记录中，则该属性指定所有自定义撤消操作完成后撤消堆栈上出现的字符串。如果嵌套了对 **[StartCustomRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/member/StartCustomRecord)** 方法的多个调用，则该属性将返回第一个调用指定的字符串。如果没有操作处于活动状态，该属性返回空字符串。



## 示例


```JavaScript
/*本示例创建嵌套的自定义撤消记录，并显示调用的第一个自定义撤销记录的名称。代码完成后，有关每个撤消记录的消息将插入到活动文档中，并且“First call”将作为撤消堆栈上的条目显示。*/
function test() {
    // Create UndoRecord object
    let undoRecord = Application.UndoRecord
    // Begin first custom record
    undoRecord.StartCustomRecord("First call")
    // Begin nested second custom record
    undoRecord.StartCustomRecord("Second call")
    // Begin nested third undo record
    undoRecord.StartCustomRecord("Third call")
    alert(undoRecord.CustomRecordName)
    // Message for the third call is written first to the document
    ActiveDocument.Content.InsertAfter("Third call. ")
    // End third custom record
    undoRecord.EndCustomRecord()
    // Message for the second call is written second to the document
    ActiveDocument.Content.InsertAfter("Second call. ")
    // End second custom record
    undoRecord.EndCustomRecord()
    // Message for first call is written third to the document
    ActiveDocument.Content.InsertAfter("First call. ")
    // End first custom record
    undoRecord.EndCustomRecord()
}
```


```JavaScript
/*本示例创建自定义撤销记录，并将所选内容的文本替换为自定义撤销操作的名称。*/
function test() {
    Application.UndoRecord.StartCustomRecord("example")
    Selection.Range.Text = Application.UndoRecord.CustomRecordName
    Application.UndoRecord.EndCustomRecord()
}
```
