# Document.DeleteAllEditableRanges

删除（指定用户或用户组有权修改其权限的）所有区域中的权限。



## 语法

express.**DeleteAllEditableRanges(EditorID)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditorID | 可选 | any | 可以是代表用户电子邮件别名（如果在相同的域中）和电子邮件地址的 **String** 类型值，或者是代表用户组的 **WdEditorType** 常量。如果省略该参数，则不删除文档中的任何权限。 |

## 返回值

void

## 说明


还可以使用 **[DeleteAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/DeleteAll)** 方法来删除（指定用户或用户组有权修改其权限的）所有区域中的权限。



## 示例


```JavaScript
/*本示例删除当前用户在所有区域中的所有权限。*/
function test() {
    ActiveDocument.DeleteAllEditableRanges(wdEditorCurrent)
}
```


```JavaScript
/*本示例删除打开第一个文档的所有用户在所有区域中的所有权限，并通知用户。*/
function test() {
    Documents.Item(1).DeleteAllEditableRanges(wdEditorEveryone)
    alert("已删除打开文档的所有用户在所有区域中的所有权限。")
}
```
