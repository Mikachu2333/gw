# PivotLines 对象

 **PivotLines** 对象是数据透视表中线条的集合，其中包含数据透视表中行或列上的所有线条。每个线条都是一组 PivotCells。


## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中行轴上第一条数据透视线的PivotLineCells属性第二个PivotCell对应数据透视表项的名称。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotRowAxis.PivotLines.Item(1)
    alert(pvtLine.PivotLineCells.Item(2).PivotItem.Name)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表中列轴上数据透视线数量。*/
function test() {
    let pvtLines = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines
    alert(`列轴上数据透视线的数量:${pvtLines.Count}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLines/member/Item) | 根据 **PivotLines** 集合对象特定元素在集合中的位置返回该特定元素。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLines/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLines/member/Count) | 返回 **PivotLines** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLines/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLines/member/Parent) | 返回指定 **PivotLines** 对象的父对象。只读。 |