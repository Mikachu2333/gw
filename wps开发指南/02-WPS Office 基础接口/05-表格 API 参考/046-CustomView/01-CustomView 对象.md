# CustomView 对象

代表自定义工作簿视图。

## 说明


 **CustomView** 对象是 **CustomViews** 集合的成员。

使用 **CustomViews** (*index*)（其中 *index*为自定义视图的名称或索引号）可返回 **CustomView** 对象。


## 示例


```JavaScript
/*本示例显示名为“example1”自定义视图。*/
function test() {
    Application.ActiveWorkbook.CustomViews.Item("example1").Show()
}
```


```JavaScript
/*本示例判断如果第一张工作簿上第一个自定义视图包含打印设置，则显示该自定义视图的名称。*/
function test() {
    let customView = Workbooks.Item(1).CustomViews.Item(1)
    if (customView.PrintSettings) {
        alert(customView.Name)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomView/member/Delete) | 删除对象。 |
| [Show](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomView/member/Show) | 显示自定义视图。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomView/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomView/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomView/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomView/member/Parent) | 返回指定对象的父对象。只读。 |
| [PrintSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomView/member/PrintSettings) | 如果在自定义视图中包含打印设置，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [RowColSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomView/member/RowColSettings) | 如果自定义视图包括对隐藏行和隐藏列（包括筛选信息）的设置，则该属性值为 **True** 。 **Boolean** 类型，只读。 |