# PivotFormula 对象

代表在数据透视表中用于计算的公式。

## 说明


本对象及其相关属性和方法对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源无效，这是因为它不支持计算字段和计算项。

使用 **PivotFormulas** (*index*)（其中 *index* 是公式左侧的公式号或字符串）可返回 **PivotFormula** 对象。


## 示例


```JavaScript
/*本示例将更改公式一（第一张工作表的第一个数据透视表中）的索引号，使其在公式二计算完毕后再进行计算。*/
function test() {
    Worksheets.Item(1).PivotTables(1).PivotFormulas.Item(1).Index = 2
}
```


```JavaScript
/*本示例删除第一张工作表中数据透视表的第二个公式。*/
function test() {
    let pvtFormula = Worksheets.Item(1).Range("I1").PivotTable.PivotFormulas(2)
    pvtFormula.Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormula/member/Delete) | 删除对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormula/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormula/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormula/member/Formula) | 返回或设置一个 **String** 值，它代表 A1 样式表示法和宏语言中的对象的公式。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormula/member/Index) | 返回或设置一个 **Long** 值，它代表 **PivotFormula** 对象在 **PivotFormulas** 集合中的索引号。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormula/member/Parent) | 返回指定对象的父对象。只读。 |
| [StandardFormula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormula/member/StandardFormula) | 返回或设置一个 **String** 值，该值指定使用标准英语（美国）格式的公式。可读写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormula/member/Value) | 返回或设置一个 **String** 值，它代表数据透视表中指定的公式的名称。 |