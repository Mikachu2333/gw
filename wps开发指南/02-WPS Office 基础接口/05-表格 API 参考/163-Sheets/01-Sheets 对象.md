# Sheets 对象

指定的或活动工作簿中所有工作表的集合。

## 说明


 **Sheets** 集合可以包含 **Chart** 或 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象。

如果希望返回所有类型的工作表，[ **Sheets** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj) 集合就非常有用。如果仅需使用某一类型的工作表，请参阅该工作表类型的对象主题。

使用 **Sheets** 属性可返回 **Sheets** 集合。


## 示例


```JavaScript
/*此示例打印当前活动工作簿上的所有工作表。*/
function test() {
    Application.Sheets.PrintOut()
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Add)** 方法可创建一个新的工作表并将它添加到集合。



```JavaScript
/*此示例给活动工作簿添加两个图表工作表，将它们放在工作簿中的工作表二之后。*/
function test() {
    Application.Sheets.Add(null, Application.Sheets.Item(2), 2, xlChart)
}
```
使用 **Sheets** (*index*)（其中 *index* 是工作表名称或索引号）可返回一个 **Chart** 或 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象。



```JavaScript
/*此示例激活名为 Sheet1 的工作表。*/
function test() {
    Application.Sheets.Item("Sheet1").Activate()
}
```
使用 **Sheets** (*array*) 可指定多个工作表。下例将名为“Sheet4”和“Sheet5”的工作表移到工作簿的开头。



```JavaScript
/*此示例将名为 Sheet4 和 Sheet5 的工作表移动到工作簿的开头。*/
function test() {
    Application.Sheets.Item(["Sheet4", "Sheet5"]).Move(Application.Sheets.Item(1))
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Add) | 新建工作表、图表或宏表。新建的工作表将成为活动工作表。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Copy) | 将工作表复制到工作簿的另一位置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Delete) | 删除对象。 |
| [FillAcrossSheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/FillAcrossSheets) | 将单元格区域复制到集合中所有其他工作表的同一位置。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Item) | 从集合中返回一个对象。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Move) | 将工作表移到工作簿中的其他位置。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/PrintOut) | 打印对象。返回Variant值 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/PrintPreview) | 按对象打印后的外观效果显示对象的预览。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/HPageBreaks) | 返回一个 **[HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/obj)** 集合，它代表工作表上的水平分页符。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Parent) | 返回指定对象的父对象。只读。 |
| [VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/VPageBreaks) | 返回一个 **[VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/obj)** 集合，它代表工作表上的垂直分页符。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/member/Visible) | 返回或设置一个 **Variant** 值，它确定对象是否可见。 |