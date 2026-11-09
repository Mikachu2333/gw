# TableStyleElement 对象

代表单个表格样式元素。

## 说明


表格样式为表格、数据透视表或切片器的一个或所有元素定义格式。例如，标题行是表格的元素。表格样式可以规定标题行的填充色为红色。

表格中每个表格样式元素的格式设置可在适用于该元素的表格样式中指定。


## 示例


```JavaScript
/*本示例清除活动工作表上第一张列表中总计行样式元素的格式。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.TableStyle.TableStyleElements.Item(xlGrandTotalRow).Clear()
}
```


```JavaScript
/*本示例显示第一张工作表上第一张列表的行条纹1样式元素条带的大小。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Item(xlRowStripe1).StripeSize)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/Clear) | 清除此元素的格式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/Borders) | 返回一个代表表样式元素的边框的 **Borders** 集合。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/Font) | 返回一个 **Font** 对象，它代表指定对象的字体。 只读。 |
| [HasFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/HasFormat) | 返回表样式元素是否具有应用到指定元素的格式设置。只读 **Boolean** 类型。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/Interior) | 返回一个 **Interior** 对象，该对象代表指定对象的内部。 只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/Parent) | 返回指定对象的父对象。只读。 |
| [StripeSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElement/member/StripeSize) | 返回或设置条带的大小。可读/写 **Long** 类型。 |