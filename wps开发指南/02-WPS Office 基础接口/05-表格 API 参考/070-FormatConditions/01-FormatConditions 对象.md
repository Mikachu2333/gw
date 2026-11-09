# FormatConditions 对象

代表一个区域内所有条件格式的集合。

## 说明


 **FormatConditions** 集合可以包含多个条件格式。每个格式由一个 **[FormatCondition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/obj)** 对象代表。

有关条件格式的详细信息，请参阅 **[FormatCondition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/obj)** 对象。

使用 **FormatConditions** 属性可返回 **FormatConditions** 对象。使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Add)** 方法可新建条件格式，使用 **Modify** 方法可更改现有的条件格式。


## 示例


```JavaScript
/*本示例向第一张工作表上单元格区域 E1:E10 中添加条件格式*/
function test() {
    let formatCondition = Application.Worksheets.Item(1).Range("E1:E10").FormatConditions.Add(xlCellValue, xlGreater, "=$A$1")
    let boders = formatCondition.Borders
    boders.LineStyle = xlContinuous
    boders.Weight = xlThin
    boders.ColorIndex = 6
    let font = formatCondition.Font
    font.Bold = true
    font.ColorIndex = 3
}
```


```JavaScript
/*本示例在活动工作表上单元格区域 F1:F10 新增Top10条件格式。*/
function test() {
    let top = ActiveSheet.Range("F1:F10").FormatConditions.AddTop10()
    top.TopBottom = xlTop10Top
    top.Rank = 5
    top.Percent = false
    top.Font.Bold = true
    top.Interior.ColorIndex = 5
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Add) | 添加新的条件格式。返回一个 **[FormatCondition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/obj)** 对象，它代表新的条件格式。 |
| [AddAboveAverage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddAboveAverage) | 返回一个代表指定区域条件格式规则的新 **AboveAverage** 对象。返回一个 **AboveAverage** 对象。 |
| [AddColorScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddColorScale) | 返回一个代表条件格式规则的新 **ColorScale** 对象，该条件格式规则使用单元格颜色渐变来表示选定区域中所含单元格值的相对差异。 |
| [AddDatabar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddDatabar) | 返回一个代表指定区域数据条条件格式规则的 **Databar** 对象。 |
| [AddIconSetCondition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddIconSetCondition) | 返回一个代表指定区域图标集条件格式规则的新 **IconSetCondition** 对象。 |
| [AddTop10](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddTop10) | 返回一个代表指定区域条件格式规则的 **Top10** 对象。 |
| [AddUniqueValues](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddUniqueValues) | 返回一个代表指定区域条件格式规则的新 **UniqueValues** 对象。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Delete) | 删除对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Parent) | 返回指定对象的父对象。只读。 |