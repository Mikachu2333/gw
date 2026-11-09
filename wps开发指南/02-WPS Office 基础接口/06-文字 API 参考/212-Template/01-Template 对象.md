# Template 对象

代表文档模板。 **Template** 对象是 **Templates** 集合的一个成员。 **Templates** 集合包含所有可用的 **Template** 对象。

## 说明


可以使用 **Templates** (*Index*) 返回单个 **Template** 对象，其中 *Index* 是模板名称或索引编号。


## 示例


```JavaScript
/*本示例保存名为“memo2.dot”的模板。*/
function test() {
    for (let i = 1; i <= Application.Templates.Count; i++) {
        if (Application.Templates.Item(i).Name.toLowerCase() == "memo2.dot") {
            Application.Templates.Item(i).Save()
        }
    }
}
```
索引号代表模板在 **Templates** 集合中的位置。



```JavaScript
/*本示例打开第一个模板。*/
function test() {
    Application.Templates.Item(1).OpenAsDocument()
}
```
 **Add** 方法不可用于 **Templates** 集合。可以改用下列方式之一向 **Templates** 集合添加模板：

* 使用 **Open** 方法和 **Documents** 集合打开基于模板的文档或模板
* 使用 **Add** 方法和 **Documents** 集合打开基于模板的新文档
* 使用 **Add** 方法和 **Addins** 集合加载共用模板
* 使用 **AttachedTemplate** 属性和 **Document** 对象将模板附加到文档

使用 **NormalTemplate** 属性可返回代表 Normal 模板的模板对象。使用 **AttachedTemplate** 属性可返回附加到指定文档的模板。

可以使用 **DefaultFilePath** 属性返回或设置用户或工作组模板的位置（即，用于存储这些模板的文件夹）。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [OpenAsDocument](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/OpenAsDocument) | 将指定模板作为文档打开并返回一个 **Document** 对象。 |
| [Save](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/Save) | 保存指定的模板。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [BuildingBlockEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/BuildingBlockEntries) | 返回一个 **BuildingBlockEntries** 集合，该集合代表模板中构建基块条目的集合。只读。 |
| [BuildingBlockTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/BuildingBlockTypes) | 返回一个 **BuildingBlockTypes** 集合，该集合代表模板中包含的构建基块类型的集合。只读。 |
| [BuiltInDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/BuiltInDocumentProperties) | 返回一个 **DocumentProperties** 集合，该集合代表指定模板的所有内置的文档属性。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [CustomDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/CustomDocumentProperties) | 返回一个 **DocumentProperties** 集合，该集合代表指定模板的所有自定义文档属性。 |
| [FarEastLineBreakLanguage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/FarEastLineBreakLanguage) | 返回或设置在指定的文档或模板中对文本进行换行时使用的东亚语言。 **WdFarEastLineBreakLanguageID** 类型，可读写。 |
| [FarEastLineBreakLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/FarEastLineBreakLevel) | 返回或设置指定模板的换行控制级别。 **WdFarEastLineBreakLevel** 类型，可读写。 |
| [FullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/FullName) | 指定模板的名称，其中包含驱动器或 Web 路径。 **String** 类型，只读。 |
| [JustificationMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/JustificationMode) | 返回或设置指定模板的字符间距调整。可读写 **WdJustificationMode** 类型。 |
| [KerningByAlgorithm](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/KerningByAlgorithm) | 如果 WPS 调整指定文档中的半角西文字符与标点符号的字距，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [ListTemplates](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/ListTemplates) | 返回一个 **ListTemplates** 集合，该集合代表指定文档、模板或列表库的所有列表格式。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [NoLineBreakAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/NoLineBreakAfter) | 返回或设置 WPS 不在其后面进行换行的首尾字符。可读写 **String** 类型。 |
| [NoLineBreakBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/NoLineBreakBefore) | 返回或设置 WPS 不在其前面进行换行的首尾字符。可读写 **String** 类型。 |
| [NoProofing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/NoProofing) | 如果拼写和语法检查程序忽略基于此模板的文档，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Template** 对象的父对象。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/Path) | 返回指定文档模板的路径。只读 **String** 类型。 |
| [Saved](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/Saved) | 如果自上次保存之后指定的模板未更改，则该属性值为 **True** 。如果关闭文档时 WPS 提示保存对文档所做的更改，则该属性值为 **False** 。 **Boolean** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/member/Type) | 返回模板的类型。只读 **[WdTemplateType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdTemplateType)** 类型。 |