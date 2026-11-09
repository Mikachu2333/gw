# Selection.GoToEditableRange

返回一个 **Range** 对象，该对象代表指定用户或用户组可以修改的文档区域。



## 语法

express.**GoToEditableRange(EditorID)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditorID | 可选 | any | 可以是代表用户电子邮件别名（如果在相同的域中）和电子邮件地址的 **String** 类型值，或者是代表用户组的 **WdEditorType** 常量。如果省略该参数，则选择所有区域以便所有用户都拥有编辑权限。 |

## 返回值

Range

## 说明


还可使用 **Editor** 对象的 **[NextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/NextRange)** 属性来返回用户有权修改的下一区域。



## 示例


```JavaScript
/*本示例设置当前用户有权修改选中区域。*/
function test() {
    Selection.GoToEditableRange(wdEditorCurrent)
}
```


```JavaScript
/*本示例将活动文档第二个段落选中，并设置打开文档的所有用户都可以修改选中区域。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.GoToEditableRange(wdEditorEveryone)
}
```
