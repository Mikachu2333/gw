# Areas 对象

由选定区域内的多个子区域或连续单元格块组成的集合。

## 说明


没有单数 Area 对象; Areas 集合的各个成员是 Range 对象。在 Areas 集合中，选定区域内每个离散的连续单元格区域都有一个 Range 对象。如果选定区域内只有一个子区域，则 Areas 集合包含一个与该选定区域对应的 Range 对象。

使用 Range 对象的 Areas 属性可返回 Areas 集合。


## 示例


```JavaScript
/*本示例如果当前选定区域包含多个子区域，就清除该选定区域。*/
function test() {
    if (Application.Selection.Areas.Count !== 1) {
        Application.Selection.Clear()
    }
}
```
使用 Areas (索引) （其中 index 是区域索引号）从集合中返回单个 Range 对象。



```JavaScript
/*此示例检查当前选定区域是否为多重选定区域，如果是，则清除其中的第一个子区域的内容*/
function test() {
    if (Application.Selection.Areas.Count !== 1) {
        Application.Selection.Areas.Item(1).Clear()
    }
}
```


```JavaScript
/*此示例设置 Sheet1 上选定区域内部颜色。此示例还将检测选定区域中是否包含多重选定区域，如果包含，则对多重选定区域中每一子区域进行循环并设置内部颜色。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    let areasCount = Application.Selection.Areas.Count
    if (areasCount <= 1) {
        Application.Selection.Interior.Color = RGB(0, 255, 0)
    } else {
        for (let i = 1; i <= areasCount; i++) {
            Application.Selection.Areas.Item(i).Interior.Color = RGB(0, 0, 255)
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Areas/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Areas/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Areas/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Areas/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Areas/member/Parent) | 返回指定对象的父对象。只读。 |