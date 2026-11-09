# Editor 对象

表示已被分配特定权限可编辑文档部分的单个用户。

## 说明


可授予权限的用户包括单独的参与者以及为“文档工作区”站点定义的用户组。

分配给范围和所选内容的权限仅在文档受到保护之后生效。使用 **Editors** 集合和 **Editor** 对象可将特定权限分配到文档的节。然后使用 **Protect** 方法来保护该文档。

使用 **Editors** 集合的 **Add** 方法可向指定的用户或组授予权限以修改文档中的范围或所选内容。


## 示例


```JavaScript
/*本示例为当前用户分配编辑权限以修改所选内容，并显示用户名称。*/
function test() {
    let editor = Selection.Editors.Add(wdEditorCurrent)
    alert(editor.Name)
}
```


```JavaScript
/*本示例判断如果所选内容的 Editors 集合中 Editor 对象数量大于 0，则将最后一个 Editor 对象删除。*/
function test() {
    if (Selection.Editors.Count > 0) {
        Selection.Editors.Item(Selection.Editors.Count).Delete()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/Delete) | 删除指定的 **Editor** 对象。 |
| [DeleteAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/DeleteAll) | 删除特定用户在文档中的所有编辑权限。 |
| [SelectAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/SelectAll) | 选择文档中由单个用户插入或编辑的所有形状。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/Application) | Visual Basic 的 **CreateObject** 和 **GetObject** 函数使您可以从 示例代码 项目中访问 OLE 自动化对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/ID) | 将父文档另存为网页时，返回或设置指定对象的标识标签。只读 **String** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/Name) | 返回或设置指定对象的名称。只读 **String** 类型。 |
| [NextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/NextRange) | 返回一个 **Range** 对象，该对象代表用户有权修改的下一个区域。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Editor** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editor/member/Range) | 返回一个 **Range** 对象，该对象代表指定对象所包含的文档部分。 |