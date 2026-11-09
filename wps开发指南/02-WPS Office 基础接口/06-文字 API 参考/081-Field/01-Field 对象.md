# Field 对象

代表一个域。 **Field** 对象是 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** 集合的一个成员。 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** 集合代表所选内容、范围或文档中的域。

## 说明


使用 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** (*Index*) 可返回一个 **Field** 对象，其中 *Index* 是索引号。索引号代表域在所选内容、范围或文档中的位置。


## 示例


```JavaScript
/*本示例显示活动文档中第一个域的域代码和结果。*/
function test() {
    if (ActiveDocument.Fields.Count >= 1) {
        let field = ActiveDocument.Fields.Item(1)
        alert(`Code = ${field.Code.Text}\nResult = ${field.Result.Text}`)
    }
}
```
使用 **Add** 方法将字段添加到 **Fields** 集合。



```JavaScript
/*本示例在所选内容的开头插入一个 DATE 域，然后显示结果。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let field = ActiveDocument.Fields.Add(Selection.Range, wdFieldDate)
    alert(field.Result.Text)
}
```
 **wdFieldDate** 常量是 **WdFieldType** 常量组的一部分，该组包括所有各种字段类型。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Copy) | 将指定域复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Cut) | 将指定域从文档中移到剪贴板上。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Delete) | 删除指定的域。 |
| [DoClick](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/DoClick) | 单击指定域。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Select) | 选择指定的域。 |
| [Unlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Unlink) | 将指定域替换为其最新结果。 |
| [Update](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Update) | 更新域的结果。如果该域更新成功，则返回 **True** 。 |
| [UpdateSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/UpdateSource) | 将对 INCLUDETEXT 域所做的更改保存回源文档。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Code](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Code) | 返回一个代表域代码的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Data](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Data) | 返回或设置 ADDIN 域中的数据。可读写 **String** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [InlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/InlineShape) | 返回一个 **InlineShape** 对象，该对象可以代表图片、OLE 对象以及作为 INCLUDEPICTURE 或 EMBED 域结果的 ActiveX 控件。 |
| [Kind](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Kind) | 返回 **Field** 对象的链接类型。只读 **WdFieldKind** 类型。 |
| [LinkFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/LinkFormat) | 返回一个 **LinkFormat** 对象，该对象代表指定域的链接选项。只读。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Locked) | 如果指定域已被锁定，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Next) | 返回集合中的下一个对象。只读。 |
| [OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/OLEFormat) | 返回一个 **OLEFormat** 对象，该对象代表指定域的 OLE 特征（链接除外）。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Field** 对象的父对象。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Previous) | 返回集合中的上一个对象。只读。 |
| [Result](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Result) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表域的结果。可读写。 |
| [ShowCodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/ShowCodes) | 如果显示指定域的域代码而不是域结果，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Field/member/Type) | 返回域的类型。只读 **[WdFieldType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFieldType)** 类型。 |