# Document.SelectAllEditableRanges

选择指定用户或用户组有权修改的所有区域。



## 语法

express.**SelectAllEditableRanges(EditorID)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditorID | 可选 | any | 可以是代表用户电子邮件别名（如果在相同的域中）和电子邮件地址的 **String** 类型值，或者是代表用户组的 **WdEditorType** 常量。如果省略，则只选择所有用户有权修改的区域。 |

## 返回值

void

## 示例


```JavaScript
/*本示例选定当前用户有权修改活动文档的所有区域。*/
function test() {
    ActiveDocument.SelectAllEditableRanges(wdEditorCurrent)
}
```


```JavaScript
/*本示例选中第一个文档的所有用户有权修改的该文档所有区域，并通知用户。*/
function test() {
    Documents.Item(1).SelectAllEditableRanges(wdEditorEveryone)
    alert("选中第一个文档的所有用户有权修改的文档所有区域")
}
```
