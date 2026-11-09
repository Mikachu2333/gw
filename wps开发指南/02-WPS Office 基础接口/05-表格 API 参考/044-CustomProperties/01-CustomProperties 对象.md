# CustomProperties 对象

由代表附加信息的 **CustomProperty** 对象组成的集合，这些信息可用作 XML 的元数据。

## 说明


使用 **Worksheet** 对象的 **CustomProperties** 属性返回 **CustomProperties** 集合。

返回 **CustomProperties** 集合后，可根据选择向工作表和智能标记中添加元数据。

若要向工作表添加元数据，请在 **Add** 方法中使用 **CustomProperties** 属性。


## 示例


```JavaScript
/*在此示例中，ET 向活动工作表添加标识符信息，并向用户返回名称和值。*/
function test() {
    // Add metadata to worksheet.
    ActiveSheet.CustomProperties.Add("Market", "Nasdaq")

    // Display metadata.
    let customProperty = ActiveSheet.CustomProperties.Item(1)
    alert(customProperty.Name + "\t" + customProperty.Value)
}
```


```JavaScript
/*此示例设置第一张工作表第一个标识符的值。*/
function test() {
    Worksheets.Item(1).CustomProperties.Item(1).Value = "World"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperties/member/Add) | 添加自定义属性信息，返回一个代表自定义属性信息的 **[CustomProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperty/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperties/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperties/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperties/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperties/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperties/member/Parent) | 返回指定对象的父对象。只读。 |