# Tables 对象

 **[Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/obj)** 对象的集合，这些对象代表所选内容、范围或文档中的表格。

## 说明


使用 **Tables** 属性返回 Tables 集合。

使用 **Add** 方法在指定区域添加表格。

使用 Tables(Index)（其中 Index 是索引号）返回单个 **Table** 对象。索引号代表表格在所选内容、范围或文档中的位置。

文档中此集合的 **Count** 属性仅返回正文部分中的项目数。要对其他部分中的项目进行计数，请使用带有 **Range** 对象的集合。


## 示例


```JavaScript
/*本示例设置活动文档中所有表格的边框。*/
function test() {
    let tables = ActiveDocument.Tables
    for (let i = 1; i <= tables.Count; i++) {
        tables.Item(i).Borders.OutsideLineStyle = wdLineStyleSingle
        tables.Item(i).Borders.OutsideLineWidth = wdLineWidth025pt
        tables.Item(i).Borders.InsideLineStyle = wdLineStyleNone
    }
}
```


```JavaScript
/*本示例在活动文档的开头添加一个 3 行 4 列的空表格*/
function test() {
    let range = Application.ActiveDocument.Range(0, 0)
    Application.ActiveDocument.Tables.Add(range, 3, 4)
}
```


```JavaScript
/*本示例将活动文档中的第一个表格转换为文本。*/
function test() {
    ActiveDocument.Tables(1).ConvertToText(wdSeparateByTabs)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/member/Add) | 返回一个 **Table** 对象，该对象代表添加到文档中的新的空白表格。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/member/Item) | 返回集合中的单个 **Table** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中表格的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [NestingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/member/NestingLevel) | 返回指定表格的嵌套层。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Tables** 对象的父对象。 |