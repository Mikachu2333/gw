# UndoRecord.CustomRecordLevel

返回 **Long** 类型的值，该值指定当前处于活动状态的自定义撤消操作调用的数量。只读。



## 语法

express.**CustomRecordLevel**

express   一个代表 **UndoRecord** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果没有自定义撤消操作处于活动状态，该属性将设置为 0。



## 示例


```JavaScript
/*本示例验证当前是否正在录制自定义撤消记录。否则，代码将创建自定义撤消记录。最后，该代码验证任何自定义撤消操作调用是否处于活动状态。如果是这样，则会在立即窗口中打印一条消息。*/
function test() {
    let undoRecord = Application.UndoRecord

    // Verify that a custom undo record is already being recorded, and if not, start one
    if (!undoRecord.IsRecordingCustomRecord) {
        undoRecord.StartCustomRecord("New Undo Record")
    }
    // Add some actions here.
    undoRecord.EndCustomRecord()

    // Verify that any custom undo action calls are currently active.
    if (undoRecord.CustomRecordLevel > 0) {
        Console.log("An undo record call was not closed!")
    }
}
```


```JavaScript
/*本示例创建自定义撤销记录，并显示自定义撤销操作的调用数。*/
function test() {
    Application.UndoRecord.StartCustomRecord("example")
    alert(Application.UndoRecord.CustomRecordLevel)
    Application.UndoRecord.EndCustomRecord()
}
```
