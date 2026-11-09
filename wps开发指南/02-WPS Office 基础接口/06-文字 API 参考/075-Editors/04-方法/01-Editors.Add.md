# Editors.Add

返回一个 **Editor** 对象，该对象代表指定用户用于修改文档中区域或选定内容的新权限。



## 语法

express.**Add(EditorID)**

express   一个代表 **Editors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditorID | 必选 | any | 可为代表用户电子邮件别名（如果在相同的域中）和电子邮件地址的 String 字符串或代表用户组的 WdEditorType 常量。 |

## 返回值

Editor

## 示例


```JavaScript
/*本示例将选定文本的编辑权限分配给当前用户。*/
function test() {
    let objEditor = Selection.Editors.Add(wdEditorCurrent)
}
```


```JavaScript
/*本示例将选定文本的编辑权限分配给打开文档的所有用户，并显示当前选定内容的编辑者数量。*/
function test() {
    Selection.Editors.Add(wdEditorEveryone)
    alert(Selection.Editors.Count)
}
```
