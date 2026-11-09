# Selection.Editors

返回一个 **[Editors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editors/obj)** 对象，该对象代表已授权修改文档中选定内容的所有用户。



## 语法

express.**Editors**

express   一个代表 **Selection** 对象的变量。

## 类型

Editors

## 示例


```JavaScript
/*本示例给当前用户分配编辑权限以修改活动的选定内容。*/
function test() {
    Selection.Editors.Add(wdEditorCurrent)
}
```


```JavaScript
/*本示例显示已授权修改文档中选定内容的第一个用户的名称。*/
function test() {
    alert(Selection.Editors.Item(1).Name)
}
```
