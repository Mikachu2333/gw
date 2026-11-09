# Axes 对象

指定图表中所有 **Axis** 对象的集合。


## 示例


```JavaScript
/*本示例为图表工作表 Chart1 中分类轴设置标题文本。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes().Item(xlValue)
    axis.AxisTitle.Caption = "成绩"
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的坐标轴的数量是否为2。*/
function test() {
    let axes = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes()
    alert(axes.Count == 2)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axes/member/Item) | 从 **Axes** 集合中返回一个 **[Axis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axes/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axes/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axes/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axes/member/Parent) | 返回指定对象的父对象。只读。 |