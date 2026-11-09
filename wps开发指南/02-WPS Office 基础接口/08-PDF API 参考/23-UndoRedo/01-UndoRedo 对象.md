# UndoRedo 对象

`UndoRedo` 对象用于管理撤销和重做操作。

## 说明


通过 `doc.UndoRedo` 访问。

## 示例


```JavaScript
var undoRedo = app.ActiveDocument.UndoRedo;
if (undoRedo.CanRedo()) {
    undoRedo.Redo();
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [CanRedo](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/UndoRedo/member/CanRedo) | 检查是否可以执行重做操作。 |
| [CanUndo](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/UndoRedo/member/CanUndo) | 检查是否可以执行撤销操作。 |
| [Redo](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/UndoRedo/member/Redo) | 执行重做操作。 |
| [Undo](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/UndoRedo/member/Undo) | 执行撤销操作。 |
| [ClearAllCommands](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/UndoRedo/member/ClearAllCommands) | 清除所有撤销/重做命令历史。 |
