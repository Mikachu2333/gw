# PivotLine 对象

 **PivotLine** 对象是 ET 数据透视表中的行或列的线条。

## 说明


PivotLine 只包含可见项，因此 **PivotLine** 集合中不存在折叠的项目子项以及隐藏级别中的项目。

PivotLine 在所有位置始终具有一个 PivotItem。这意味着与普通 PivotLine 相比，代表数据透视表中分类汇总的 PivotLine 包含较少的 PivotItem。


## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中第一张数据透视表中列轴上第二条数据透视线的PivotLineCells属性中PivotCell对象的数量。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotColumnAxis.PivotLines(2)
    alert(pvtLine.PivotLineCells.Count)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表中列轴上第九条数据透视线的类型是否为“xlPivotLineGrandTotal”。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines(9)
    alert(pvtLine.LineType == xlPivotLineGrandTotal)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLine/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLine/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [LineType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLine/member/LineType) | 返回一个表示 PivotLine 类型的 **XlPivotLineType** 常量。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLine/member/Parent) | 返回指定 **PivotLine** 对象的父对象。只读。 |
| [PivotLineCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLine/member/PivotLineCells) | 返回 PivotLine 中 **PivotCell** 对象的集合。只读。 |
| [PivotLineCellsFull](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLine/member/PivotLineCellsFull) | 检索所有数据透视线单元格，包括以压缩形式隐藏的单元格。 此为只读属性。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLine/member/Position) | 返回 **PivotLine** 对象的位置。只读。 |