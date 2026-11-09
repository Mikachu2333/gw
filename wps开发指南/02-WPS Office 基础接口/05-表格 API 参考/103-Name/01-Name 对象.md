# Name 对象

代表单元格区域的定义名。名称可以是内置名称（如“Database”、“Print\_Area”和“Auto\_Open”）或自定义名称。

## 说明


### 应用程序、工作簿和 Worksheet 对象

 **Name** 对象是 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 、 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 和 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象的 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** 集合的成员。使用 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** (*index* )（其中 *index* 是名称索引号或定义名称）可返回一个 **Name** 对象。

索引号表明名称在集合中的位置。名称按字母顺序从 a 到 z 放置，不区分大小写。

### Range 对象

虽然 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象可以有多个名称，但 **Range** 对象没有 **Names** 集合。对 **Range** 对象调用 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/obj)** 属性可从名称列表（按字母顺序排序）中返回第一个名称。


## 示例


```JavaScript
/*本示例显示应用程序集合中第一个名称的单元格引用。*/
function test() {
    alert(Application.Application.Names.Item(1).RefersTo)
}
```


```JavaScript
/*下例从活动工作簿中删除名称“mySortRange”。*/
function test() {
    Application.ActiveWorkbook.Names.Item("mySortRange").Delete()
}
```


```JavaScript
/*使用 Name 属性可返回或设置名称本身的文本。本示例更改活动工作簿中第一个 Name 对象的名称。*/
function test() {
    Application.Names.Item(1).Name = "stock_values"
}
```


```JavaScript
/*以下示例为第一张工作表上分配给单元格 A1:B1 的第一个名称设置 Visible 属性。*/
function test() {
    Application.Worksheets.Item(1).Range("A1:B1").Name.Visible = false
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/Delete) | 删除对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/Application) | 如果不使用对象识别符，则该属性返回一个代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果使用对象识别符，则该属性返回一个代表指定对象的创建程序的 **Application** 对象（可对一个 OLE 自动化对象使用该属性来返回该对象的应用程序）。只读。 |
| [Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/Comment) | 返回或设置与名称关联的批注。可读/写 **String** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/Index) | 返回 **Number** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [MacroType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/MacroType) | 返回或设置名称所引用的对象类型。 **[XlXLMMacroType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXLMMacroType)** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [NameLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/NameLocal) | 以用户语言返回或设置对象的名称。 **String** 型，可读写。 |
| [RefersTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/RefersTo) | 用宏语言以 A1 样式表示法返回或设置名称所引用的公式（以等号开头）。 **String** 类型，可读写。 |
| [RefersToLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/RefersToLocal) | 返回或设置指定名称所引用的公式。公式以等号开头，由用户语言和 A1-样式引用组成。 **String** 类型，可读写。 |
| [RefersToR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/RefersToR1C1) | 返回或设置指定名称所引用的公式。公式以等号开头，由宏语言和 R1C1-样式引用组成。 **String** 类型，可读写。 |
| [RefersToR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/RefersToR1C1Local) | 返回或设置指定名称所引用的公式。公式以等号开头，由用户语言和 R1C1-样式引用组成。可读/写 **String** 类型。 |
| [RefersToRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/RefersToRange) | 返回由 **Name** 对象引用的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/Value) | 返回或设置一个 **String** 值，它代表规定名称去引用的公式。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |
| [WorkbookParameter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/member/WorkbookParameter) | 以工作簿参数的形式返回或设置指定的 **Name** 对象。可读/写。 |