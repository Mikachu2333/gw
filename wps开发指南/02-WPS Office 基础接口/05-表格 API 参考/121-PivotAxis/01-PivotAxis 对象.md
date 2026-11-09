# PivotAxis 对象

 **PivotAxis** 对象用于在数据透视表中进行不对称深化。

## 说明


 **PivotAxis** 对象包含诸如 **PivotRowAxis** 和 **PivotRowAxis** 之类的属性，用于处理数据透视表中的行和列。


## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中列轴上第二条数据透视线的PivotLineCells属性中第一个PivotCell的数据透视表项的值。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines(2)
    alert(pvtLine.PivotLineCells.Item(1).PivotItem.Value)
}
```


```JavaScript
/*本示例显示活动工作表上第一张数据透视表中列轴上数据透视线的数量。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotColumnAxis.PivotLines.Count)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotAxis/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotAxis/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotAxis/member/Parent) | 返回指定 **PivotAxis** 对象的父对象。只读。 |
| [PivotLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotAxis/member/PivotLines) | 返回附加到指定 **PivotAxis** 对象的 PivotLines。只读。 |