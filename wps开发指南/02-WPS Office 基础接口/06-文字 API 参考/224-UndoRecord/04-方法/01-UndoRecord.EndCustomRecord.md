# UndoRecord.EndCustomRecord

完成自定义撤消记录的创建过程。



## 语法

express.**EndCustomRecord()**

express   一个代表 **UndoRecord** 对象的变量。

## 返回值

void

## 说明


使用 **[StartCustomRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/member/StartCustomRecord)** 可开始创建自定义撤消记录。若要完成自定义撤消记录的创建过程，请使用 **EndCustomRecord** 方法。



## 示例


```JavaScript
/*本示例将创建自定义撤消记录。*/
function test() {
    Application.UndoRecord.StartCustomRecord("My Custom Undo")
    // Add some actions here
    Application.UndoRecord.EndCustomRecord()
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
