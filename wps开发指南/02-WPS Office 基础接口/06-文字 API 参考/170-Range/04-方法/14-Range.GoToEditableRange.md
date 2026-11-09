# Range.GoToEditableRange

返回一个 **Range** 对象，该对象代表指定用户或用户组可以修改的文档区域。



## 语法

express.**GoToEditableRange(EditorID)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditorID | 可选 | any | 可以是代表用户电子邮件别名（如果在相同的域中）和电子邮件地址的 **String** 类型值，或者是代表用户组的 **WdEditorType** 常量。如果省略该参数，则选择所有区域以便所有用户都拥有编辑权限。 |

## 返回值

Range

## 说明


还可使用 **Editor** 对象的 **NextRange** 属性来返回用户有权修改的下一区域。



## 示例


```JavaScript
/*本示例设置当前用户有权修改选中区域。*/
function test() {
    Selection.Range.GoToEditableRange(wdEditorCurrent)
}
```


```JavaScript
/*本示例设置打开活动文档的所有用户都可以修改文档的第一个段落。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.GoToEditableRange(wdEditorEveryone)
}
```
