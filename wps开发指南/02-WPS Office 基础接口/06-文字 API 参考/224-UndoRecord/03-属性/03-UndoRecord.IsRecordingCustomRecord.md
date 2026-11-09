# UndoRecord.IsRecordingCustomRecord

返回 **Boolean** 类型的值，该值指定是否正在记录某项自定义撤消操作。只读。



## 语法

express.**IsRecordingCustomRecord**

express   一个代表 **UndoRecord** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果当前未记录某项自定义撤消操作，则创建自定义撤销操作记录。*/
function test() {
    let undoRecord = Application.UndoRecord
    if (!undoRecord.IsRecordingCustomRecord) {
        undoRecord.StartCustomRecord("My Custom Undo")
    }
    undoRecord.EndCustomRecord()
}
```


```JavaScript
/*本示例判断是否正在记录自定义撤销操作，并通知用户。*/
function test() {
    if (Application.UndoRecord.IsRecordingCustomRecord) {
        alert("正在记录自定义撤销操作")
    } else {
        alert("未记录自定义撤销操作")
    }
}
```
