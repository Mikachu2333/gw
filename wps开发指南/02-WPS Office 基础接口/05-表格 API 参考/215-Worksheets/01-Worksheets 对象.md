# Worksheets 对象

指定的或活动工作簿中所有 [Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)对象的集合。每个 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象都代表一个工作表。

## 说明


 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象也是 **Sheets** 集合的成员。 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合包含工作簿中所有的工作表（图表工作表和工作表）。

使用 **Workbook** 对象的 [Worksheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Worksheets) 属性可返回 **Worksheets** 集合。


## 示例


```JavaScript
/*本示例将所有工作表移到工作簿尾部。*/
function test() {
    Application.Worksheets.Move(null, Application.Worksheets.Item(Application.Worksheets.Count))
}
```
使用 [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/Add) 方法可创建一个新工作表并将它添加到集合。



```JavaScript
/*本示例将两个新工作表添加到活动工作簿的第一张工作表之前。*/
function test() {
    Application.Worksheets.Add(ActiveWorkbook.Worksheets.Item(1), null, 2)
}
```
使用 **[Worksheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/obj)** (*index*)（其中 *index* 是工作表索引号或名称）可返回一个 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象。



```JavaScript
/*本示例隐藏活动工作簿中的第一张工作表。*/
function test() {
    ActiveWorkbook.Worksheets.Item(1).Visible = false
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/Add) | 新建工作表、图表或宏表。新建的工作表将成为活动工作表。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/Item) | 从集合中返回一个对象。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/PrintOut) | 打印对象。 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/PrintPreview) | 按对象打印后的外观效果显示对象的预览。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/Application) | 如果不使用对象识别符，则该属性返回一个 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/HPageBreaks) | 返回一个 [HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/obj)集合，它代表工作表上的水平分页符。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/Parent) | 返回指定对象的父对象。只读。 |
| [VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/member/VPageBreaks) | 返回一个 [VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/obj)集合，它代表工作表上的垂直分页符。只读。 |