# PivotItem 对象

代表数据透视表字段中的项目。

## 说明


这些项目是某个字段类型中的各个数据项。 **PivotItem** 对象是 **PivotItems** 集合的成员。 **PivotItems** 集合包含某个 **PivotField** 对象中所有的项目。使用 **PivotItems** (*index*)（其中 *index* 是项目索引号或名称）可返回一个 **PivotItem** 对象。


## 示例


```JavaScript
/*本示例隐藏“Sheet1”上第一张数据透视表中“name”字段中包含“张一”的所有数据项。*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).PivotFields("name").PivotItems("张一").Visible = false
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表的字段“name”中未展示明细数据的数据项的名称。*/
function test() {
    let pvtItems = ActiveSheet.Range("I1").PivotTable.PivotFields("name").PivotItems()
    for (let i = 1; i <= pvtItems.Count; i++) {
        if (pvtItems.Item(i).ShowDetail == false) {
            alert(pvtItems.Item(i).Name)
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Delete) | 删除对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Caption) | 返回一个 **String** 值，它代表数据透视项的标签文本。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Formula) | 返回或设置一个 **String** 值，它代表 A1 样式表示法和宏语言中的对象的公式。 |
| [IsCalculated](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/IsCalculated) | 如果数据透视表字段或数据透视表项为计算字段或计算项，则此属性为 **True** 。 **Boolean** 类型，只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Parent) | 返回指定对象的父对象。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Position) | 返回或设置一个 **Long** 值，它代表当前正在显示数据项时，该数据项字段中数据项的位置。 |
| [ShowDetail](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/ShowDetail) | 如果扩展了指定区域的分级显示（从而行或列的明细数据可见），则为 **True** 。指定区域必须为分级显示中的单个汇总列或汇总行。 **Variant** 型，可读写。对于 **PivotItem** 对象（如果该区域在数据透视表中，则为 **Range** 对象），当数据项显示明细数据时，此属性设为 **True** 。 |
| [StandardFormula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/StandardFormula) | 返回或设置一个 **String** 值，该值指定使用标准英语（美国）格式的公式。可读写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Value) | 返回或设置一个 **String** 值，它代表数据透视表中指定的数据项的名称。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |