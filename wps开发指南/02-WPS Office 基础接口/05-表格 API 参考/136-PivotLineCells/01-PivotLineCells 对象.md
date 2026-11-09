# PivotLineCells 对象

特定 PivotLine 的 **PivotCell** 对象的集合。

## 说明


使用 **PivotLineCells** (*index*)方法可以返回或指定集合中特定 **PivotCell** 对象的位置。您也可以指定 **PivotField** 对象或 PivotField 的名称以返回单个 **PivotCell** 对象。


## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表列轴上第二条数据透视线的PivotLineCells属性的PivotCell对象的数量。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines(2)
    alert(pvtLine.PivotLineCells.Count)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表行轴上第一条数据透视线PivotLineCells属性的第一个PivotCell对象对应的“PivotTable”实体类型是否为“xlPivotCellPivotItem”。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotRowAxis.PivotLines(1)
    alert(pvtLine.PivotLineCells.Item(1).PivotCellType == xlPivotCellPivotItem)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLineCells/member/Item) | 按 **PivotLineCells** 集合对象在集合中的位置返回特定元素。 此为只读属性。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLineCells/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLineCells/member/Count) | 返回 **PivotLineCells** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLineCells/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Full](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLineCells/member/Full) | 如果为 **True** ，则会检索数据透视线中的所有 **PivotLineCells** (包括以压缩形式) 隐藏的那些单元格。 **Boolean** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLineCells/member/Parent) | 返回指定 **PivotLineCells** 对象的父对象。只读。 |