# Styles 对象

指定工作簿或活动工作簿中所有 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj)** 对象的集合。

## 说明


每一个 **Style** 对象都代表对某区域的样式描述。 **Style** 对象包含样式的所有属性（字体、数字格式、对齐方式，等等）。有几种内置的样式，包括“常规”、“货币”和“百分比”。

使用 **Styles** 属性可返回 **Styles** 集合。


## 示例


```JavaScript
/*此示例在第一个工作表上创建活动工作簿中样式名的列表。*/
function test() {
    for (let i = 1; i <= Application.ActiveWorkbook.Styles.Count; i++) {
        Application.Worksheets.Item(1).Cells.Item(i, 1).Value2 = ActiveWorkbook.Styles.Item(i).Name
    }
}
```
使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/member/Add) 方法可创建一个新的样式并将它添加到集合。



```JavaScript
/*此示例基于“常规”样式创建一个新的样式，修改边框和字体，然后将该新样式应用到单元格 A25:A30。*/
function test() {
    let style = Application.ActiveWorkbook.Styles.Add("Bookman Top Border")
    style.Borders.Item(xlEdgeTop).LineStyle = xlDouble
    style.Font.Bold = true
    style.Font.Name = "Bookman"
    Application.Worksheets.Item(1).Range("A25:A30").Style = "Bookman Top Border"
}
```
使用 **Styles** (*index*)（其中 *index* 是样式索引号或名称）可从工作簿的 **Style** 集合中返回一个 **Styles** 对象。



```JavaScript
/*此示例通过设置活动工作簿中“常规”样式的 Bold 属性来更改该样式。*/
function test() {
    Application.ActiveWorkbook.Styles.Item("Normal").Font.Bold = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/member/Add) | 新建样式并将其添加到当前工作簿的可用样式列表中。返回一个代表新样式的 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/member/Item) | 从集合中返回一个对象。 |
| [Merge](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/member/Merge) | 将另一张工作簿中的样式合并到 **Styles** 集合中。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/member/Parent) | 返回指定对象的父对象。只读。 |