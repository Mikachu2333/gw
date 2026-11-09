# WorksheetView 对象

指定的或活动工作簿中所有 **WorksheetView** 对象的集合。

## 说明


通过使用 DisplayFormulas、DisplayGridlines 和 DisplayHeadings 等属性控制应用程序或工作簿级视图的外观和风格。


## 示例


```JavaScript
/*本示例激活工作表Sheet1，并隐藏第一个工作表视图的标题和网格线。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SheetViews.Item(1).DisplayHeadings = false
    ActiveWindow.SheetViews.Item(1).DisplayGridlines = false
}
```


```JavaScript
/*本示例激活工作表Sheet1，并显示第一个窗口的活动工作表视图的标题和零值。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Windows.Item(1).ActiveSheetView.DisplayHeadings = true
    Windows.Item(1).ActiveSheetView.DisplayDisplayZeros = true
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetView/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [DisplayFormulas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetView/member/DisplayFormulas) | 返回或设置在当前工作表视图中是显示还是隐藏公式。可读/写 **Boolean** 类型。 |
| [DisplayGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetView/member/DisplayGridlines) | 如果显示网格线，则为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetView/member/DisplayHeadings) | 如果同时显示行标题和列标题，则为 **True** ；如果未显示标题，则为 **False** 。可读/写 **Boolean** 类型。 |
| [DisplayOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetView/member/DisplayOutline) | 如果显示分级显示符号，则为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayZeros](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetView/member/DisplayZeros) | 如果显示零值，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Sheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetView/member/Sheet) | 返回指定 **WorksheetView** 对象的工作表对象。只读。 |