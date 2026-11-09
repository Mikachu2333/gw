# Editors 对象

 **Editor** 对象的集合代表已被授予特定权限可编辑文档部分的用户或用户组集合。

## 说明


使用 **Add** 方法可授予指定用户或用户组修改文档中的区域或所选内容的权限。


## 示例


```JavaScript
/*本示例将选定文本的编辑权限分配给当前用户。*/
function test() {
    let objEditor = Selection.Editors.Add(wdEditorCurrent)
}
```


```JavaScript
/*本示例删除所选内容的 Editors 集合中第一个用户的所有编辑权限。*/
function test() {
    Selection.Editors.Item(1).DeleteAll()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editors/member/Add) | 返回一个 **Editor** 对象，该对象代表指定用户用于修改文档中区域或选定内容的新权限。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editors/member/Item) | 返回一个 **Editor** 对象，该对象代表已分配给权限来编辑部分文档的特定用户或用户组。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editors/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editors/member/Count) | 返回一个 **Long** 类型值，该值代表集合中 Editor 对象的数目。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editors/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editors/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Editors** 对象的父对象。 |