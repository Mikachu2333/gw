# PivotFormulas 对象

代表数据透视表的公式的集合。每个公式都由一个 **PivotFormula** 对象代表。

## 说明


本对象及其相关属性和方法对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源无效，这是因为它不支持计算字段和计算项。

使用 **PivotFormulas** 属性可返回 **PivotFormulas** 集合。


## 示例


```JavaScript
/*本示例为活动工作表上的第一张数据透视表创建一个数据透视表公式列表。*/
function test() {
    let r = 10
    for (let i = 1; i <= ActiveSheet.PivotTables(1).PivotFormulas.Count; i++) {
        Cells.Item(r, 1).Value2 = ActiveSheet.PivotTables(1).PivotFormulas.Item(i).Formula
        r++
    }
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的公式的数量。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFormulas.Count)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormulas/member/Add) | 新建数据透视表公式。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormulas/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormulas/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormulas/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormulas/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFormulas/member/Parent) | 返回指定对象的父对象。只读。 |