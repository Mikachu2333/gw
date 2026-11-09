# UndoRecord 对象

提供一个撤消堆栈的入口点。

## 说明


使用 **UndoRecord** 对象可在 WPS 撤消堆栈中创建和修改自定义撤消记录。


## 示例


```JavaScript
/*本示例显示自定义撤消操作调用的数量。*/
function test() {
    let undoRecord = Application.UndoRecord
    alert(undoRecord.CustomRecordLevel)
}
```


```JavaScript
/*本示例创建自定义撤销记录，并显示自定义撤销操作的名称。*/
function test() {
    Application.UndoRecord.StartCustomRecord("example")
    alert(Application.UndoRecord.CustomRecordName)
    Application.UndoRecord.EndCustomRecord()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [EndCustomRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/member/EndCustomRecord) | 完成自定义撤消记录的创建过程。 |
| [StartCustomRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/member/StartCustomRecord) | 开始创建自定义撤消记录。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [CustomRecordLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/member/CustomRecordLevel) | 返回 **Long** 类型的值，该值指定当前处于活动状态的自定义撤消操作调用的数量。只读。 |
| [CustomRecordName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/member/CustomRecordName) | 返回 **String** 类型的值，该值指定所有自定义撤消操作完成后撤消堆栈上出现的项。只读。 |
| [IsRecordingCustomRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UndoRecord/member/IsRecordingCustomRecord) | 返回 **Boolean** 类型的值，该值指定是否正在记录某项自定义撤消操作。只读。 |