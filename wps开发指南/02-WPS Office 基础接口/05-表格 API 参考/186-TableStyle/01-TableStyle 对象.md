# TableStyle 对象

代表可应用于表格或切片器的单个样式。

## 说明


表格样式为表格、数据透视表或切片器的一个或所有元素定义格式。例如，列是表格的元素。表格样式可以规定使用交替格式（也称为条带或条纹）对表格中的列进行格式设置。


## 示例


```JavaScript
/*本示例删除第一张工作簿上的表格样式中的最后一个样式。*/
function test() {
    let tableStyles = Workbooks.Item(1).TableStyles
    tableStyles.Item(tableStyles.Count).Delete()
}
```


```JavaScript
/*本示例显示第一张工作表上第一张列表的表样式是否为内置样式。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.TableStyle.BuiltIn)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/Delete) | 删除 **TableStyle** 对象。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/Duplicate) | 复制 **TableStyle** 对象，并返回对新复制对象的引用。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/BuiltIn) | 如果样式为内置样式，则为 **True** 。只读 **Boolean** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [NameLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/NameLocal) | 以用户语言返回对象的名称。只读 **String** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/Parent) | 返回指定对象的父对象。只读。 |
| [ShowAsAvailablePivotTableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/ShowAsAvailablePivotTableStyle) | 设置或返回一个值，该值表示是否在数据透视表样式库中显示样式，可读/写 **Boolean** 类型。 |
| [ShowAsAvailableSlicerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/ShowAsAvailableSlicerStyle) | 返回或设置指定的表样式是否作为可用的表样式在切片器样式库中显示。可读/写 |
| [ShowAsAvailableTableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/ShowAsAvailableTableStyle) | 返回或设置在表样式库中显示为可用的表样式。可读/写 **Boolean** 类型。 |
| [TableStyleElements](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/member/TableStyleElements) | 返回 **TableStyleElements** 对象，只读。 |