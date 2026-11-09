# XmlMap 对象

代表已添加到工作簿的 XML 映射。

## 说明


使用 **[XmlMaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMaps/obj)** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMaps/member/Add)** 方法可将 XML 映射添加到工作簿。

使用 **[Import](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Import)** 方法可将 XML 数据从 XML 数据文件导入到映射到指定的 **XmlMap** 的单元格中。 **[ImportXml](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/ImportXml)** 方法为 **String** 变量导入 XML 数据。

使用 **[Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Export)** 方法可将数据从映射到指定的 **XmlMap** 的单元格中导出。 **[ExportXml](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/ExportXml)** 方法将数据导出到 **String** 变量。


## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap的连接的名称。*/
function test() {
    let xmlMap = ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.WorkbookConnection.Name)
}
```


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap的所有XML架构的目标命名空间的前缀。*/
function test() {
    let xmlSchemas = Workbooks.Item(1).XmlMaps.Item(1).Schemas
    for (let i = 1; i <= xmlSchemas.Count; i++) {
        alert(xmlSchemas.Item(i).Namespace.Prefix)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Delete) | 从工作簿中删除指定的 XML 映射。 |
| [Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Export) | 将映射到指定 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的单元格的内容导出到 XML 数据文件。 |
| [ExportXml](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/ExportXml) | 将映射到指定 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的单元格的内容导出到 **String** 变量。 |
| [Import](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Import) | 将数据从指定的 XML 数据文件导入到已经映射至指定的 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的单元格中。 |
| [ImportXml](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/ImportXml) | 将 XML 数据从 **String** 变量导入到已被映射到指定 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的单元格。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AdjustColumnWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/AdjustColumnWidth) | 如果每次刷新指定 XML 映射时，列宽都会自动调整为最适合的宽度，则为 **True** 。如果每次刷新时列宽不自动调整，则为 **False** 。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [AppendOnImport](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/AppendOnImport) | 如果希望在导入新数据或刷新现有连接时将新行附加到绑定在指定架构映射的 XML 列表中，则设该属性值 **True** 。如果希望在导入新数据或刷新现有连接时覆盖绑定到指定架构映射的单元格内容，则该属性值为 **False** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [DataBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/DataBinding) | 返回一个 **[XmlDataBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/obj)** 对象，该对象表示与指定的架构映射相关的绑定。只读。 |
| [IsExportable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/IsExportable) | 如果 ET 可以使用指定架构映射中的 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象导出 XML 数据，并且可以导出映射到指定架构映射的所有 XML 列表，则返回 **True** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Name) | 返回或设置一个 **String** 值，用于表示唯一标识工作簿中的映射的好记的名称。 |
| [PreserveColumnFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/PreserveColumnFilter) | 返回或设置在指定的 XML 映射被刷新时是否保留筛选。 **Boolean** 类型，可读写。 |
| [PreserveNumberFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/PreserveNumberFormatting) | 刷新架构映射时，如果要保留映射到指定 XML 架构映射的单元格的数字格式，则设为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [RootElementName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/RootElementName) | 返回一个 **String** 类型的数值，该数值表示指定 XML 架构映射的根元素 （根元素：包含所有其他元素的 XML 文档的元素。它是 XML 文档的顶层元素，并且必须是文档中的第一个元素。）的名称。只读。 |
| [RootElementNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/RootElementNamespace) | 返回一个 **[XmlNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/obj)** 对象，该对象表示指定的 XML 架构映射的根元素 （根元素：包含所有其他元素的 XML 文档的元素。它是 XML 文档的顶层元素，并且必须是文档中的第一个元素。）。只读。 |
| [SaveDataSourceDefinition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/SaveDataSourceDefinition) | 如果要在保存工作簿的同时保存指定 XML 架构映射的数据源定义，则设为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [Schemas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Schemas) | 返回一个 **[XmlSchemas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchemas/obj)** 集合，该集合表示指定的 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象所包含的架构。只读。 |
| [ShowImportExportValidationErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/ShowImportExportValidationErrors) | 当数据通过指定的 XML 架构映射导入或导出时，返回或设置是否显示详细说明架构有效性验证错误的对话框。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [WorkbookConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/WorkbookConnection) | 返回指定的 **XMLMap** 对象的新连接。只读。 |