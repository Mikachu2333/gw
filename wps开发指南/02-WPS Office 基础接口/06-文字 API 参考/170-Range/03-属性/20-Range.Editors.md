# Range.Editors

返回一个 **Editors** 对象，该对象代表已授权修改文档中选定内容或区域的所有用户。



## 语法

express.**Editors**

express   一个代表 **Range** 对象的变量。

## 类型

Editors

## 示例


```JavaScript
/*本示例给当前用户分配编辑权限以修改活动的选定内容。*/
function test() {
    let editor = Selection.Range.Editors.Add(wdEditorCurrent)
}
```


```JavaScript
/*本示例给打开活动文档的所有用户分配编辑权限以修改文档的主文档文章的内容，然后显示可编辑文档的用户名称。*/
function test() {
    let editor = ActiveDocument.Content.Editors.Add(wdEditorEveryone)
    alert(editor.Name)
}
```
