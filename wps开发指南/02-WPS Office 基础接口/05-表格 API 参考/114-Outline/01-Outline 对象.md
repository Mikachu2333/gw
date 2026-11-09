# Outline 对象

代表工作表上的分级显示。


## 示例


```JavaScript
/*下例将 Sheet4 上的分级显示设置为只显示第一级。*/
function test() {
    Worksheets("Sheet4").Outline.ShowLevels(1)
}
```


```JavaScript
/*此示例显示活动工作表分级显示是否使用自动样式。*/
function test() {
    alert(ActiveSheet.Outline.AutomaticStyles)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ShowLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/member/ShowLevels) | 显示指定行号和/或列号在分级显示中的层次。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutomaticStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/member/AutomaticStyles) | 如果分级显示使用自动样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/member/Parent) | 返回指定对象的父对象。只读。 |
| [SummaryColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/member/SummaryColumn) | 返回或设置分级显示中的汇总列的位置。 **XlSummaryColumn** 类型，可读写。 |
| [SummaryRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/member/SummaryRow) | 返回或设置分级显示中汇总行的位置。 **XlSummaryRow** 类型，可读写。 |