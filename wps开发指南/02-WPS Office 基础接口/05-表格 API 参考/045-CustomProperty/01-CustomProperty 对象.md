# CustomProperty 对象

代表标识符信息。标识符信息可用于 XML 的元数据。

## 说明


使用 **CustomProperties** 集合的 **Add** 方法或 **Item** 属性可返回 **CustomProperty** 对象。

可以使用 **Worksheet** 对象的 **CustomProperties** 属性和 **Add** 方法向工作表添加元数据。


## 示例


```JavaScript
/*在此示例中，ET 向活动工作表添加标识符信息，并向用户返回名称和值*/
function test() {
    // Add metadata to worksheet.
    ActiveSheet.CustomProperties.Add("Market", "Nasdaq")

    // Display metadata.
    let customProperty = ActiveSheet.CustomProperties.Item(1)
    alert(customProperty.Name + "\t" + customProperty.Value)
}
```


```JavaScript
/*此示例显示第一张工作表中第一个标识符的名称。*/
function test() {
    alert(Worksheets.Item(1).CustomProperties.Item(1).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperty/member/Delete) | 删除对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperty/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperty/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperty/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperty/member/Parent) | 返回指定对象的父对象。只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperty/member/Value) | 返回或设置一个 **Variant** 值，它代表对象的值。 |