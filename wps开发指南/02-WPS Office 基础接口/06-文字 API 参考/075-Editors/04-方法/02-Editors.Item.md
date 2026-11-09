# Editors.Item

返回一个 **Editor** 对象，该对象代表已分配给权限来编辑部分文档的特定用户或用户组。



## 语法

express.**Item(Index)**

express   一个代表 **Editors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 可以是代表用户电子邮件别名（如果在相同的域中）和电子邮件地址的 String 类型值，或者是代表用户组的 WdEditorType 常量。 |

## 返回值

Editor

## 示例


```JavaScript
/*本示例删除所选内容的 Editors 集合中第一个用户的所有编辑权限。*/
function test() {
    Selection.Editors.Item(1).DeleteAll()
}
```


```JavaScript
/*本示例显示当前选定内容的第二个 Editor 对象的名称。*/
function test() {
    alert(Selection.Editors.Item(2).Name)
}
```
