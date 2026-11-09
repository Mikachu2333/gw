# Fields 对象

 **[Field](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/obj)** 对象的集合，这些对象代表所选内容、范围或文档中的所有域。

## 说明


使用 Fields 属性返回 Fields 集合。

将 Fields 属性与 MailMerge 对象一起使用可返回 MailMergeFields 集合。


## 示例


```JavaScript
/*本示例更新选定内容中的所有域。*/
function test() {
    Selection.Fields.Update()
}
```
使用 Add 方法将字段添加到 Fields 集合。



```JavaScript
/*本示例在选定内容的开始处插入一个 DATE 域，然后显示域结果的文本。*/
function test() {
    Application.Selection.Collapse(wdCollapseStart)
    let field = Application.ActiveDocument.Fields.Add(Application.Selection.Range, wdFieldDate)
    alert(field.Result.Text)
}
```
使用 Fields(Index)（其中 Index 是索引号）返回单个 Field 对象。索引号表示字段在所选内容、范围或文档中的位置。



```JavaScript
/*本示例显示活动文档中第一个域的域代码和结果。*/
function test() {
    if (ActiveDocument.Fields.Count >= 1) {
        alert("Code = " + ActiveDocument.Fields.Item(1).Code + "\n" + "Result = " + ActiveDocument.Fields.Item(1).Result)
    }
}
```
一个文档中，以上集合的 Count 属性返回正文部分的项目数。要统计其他部分中的个数，请使用带有 Range 对象的集合。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Add) | 将 **[Field](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/obj)** 对象添加到 **Fields** 集合。返回指定区域内的 **Field** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Item) | 返回集合中的单个 **[Field](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/obj)** 对象。 |
| [ToggleShowCodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/ToggleShowCodes) | 在域代码与域结果之间切换域的显示。可以使用 **ShowCodes** 属性控制单个域的显示。 |
| [Unlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Unlink) | 将 **Fields** 集合中的所有域替换为它们的最新结果。 |
| [Update](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Update) | 更新域对象的结果。 |
| [UpdateSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/UpdateSource) | 将对 INCLUDETEXT 域所做的更改保存回源文档。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中域的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Locked) | 如果 **Fields** 集合中的所有域都已被锁定，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Fields** 对象的父对象。 |