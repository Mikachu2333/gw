# Application.UndoRecord

返回 **[UndoRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/obj)** 对象，该对象提供撤消堆栈的自定义入口点。只读。



## 语法

express.**UndoRecord**

express   一个代表 **Application** 对象的变量。

## 类型

UndoRecord

## 说明


使用 **UndoRecord** 对象可在 WPS 撤消堆栈中创建和修改自定义撤消记录。



## 示例


```JavaScript
/*本示例创建自定义撤销记录，并将所选内容的文本替换为自定义撤销操作的名称。*/
function test() {
    Application.UndoRecord.StartCustomRecord("example")
    Selection.Range.Text = Application.UndoRecord.CustomRecordName
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
