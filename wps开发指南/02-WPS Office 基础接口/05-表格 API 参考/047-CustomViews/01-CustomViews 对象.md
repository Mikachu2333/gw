# CustomViews 对象

由自定义工作簿视图组成的集合。

## 说明


每个视图由一个 **CustomView** 对象代表。

使用 **CustomViews** 属性可返回 **CustomViews** 集合。使用 **Add** 方法可新建自定义视图，并将它添加到 **CustomViews** 集合中。


## 示例


```JavaScript
/*此示例在活动工作簿中新建一个自定义视图，并命名为“Summary”。*/
function test() {
    ActiveWorkbook.CustomViews.Add("Summary", true, true)
}
```


```JavaScript
/*本示例判断如果活动工作簿上第一个自定义视图的名称为“example”，则展示该自定义视图。*/
function test() {
    let customView = ActiveWorkbook.CustomViews.Item(1)
    if (customView.Name == "example") {
        customView.Show()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomViews/member/Add) | 新建自定义视图。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomViews/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomViews/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomViews/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomViews/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomViews/member/Parent) | 返回指定对象的父对象。只读。 |