# Charts 对象

指定的或活动工作簿中所有图表工作表的集合。


## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 中图表的配色方案。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.ChartColor = 7
}
```


```JavaScript
/*本示例在活动工作簿所有图表工作表上添加水平分页符。*/
function test() {
    Application.Charts.HPageBreaks.Add(Range("C3"))
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/member/HPageBreaks) | 返回一个 **[HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/obj)** 集合，它代表图表上的水平分页符。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/member/Parent) | 返回指定对象的父对象。只读。 |
| [VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/member/VPageBreaks) | 返回一个 **[VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/obj)** 集合，它代表工作表上的垂直分页符。只读。 |