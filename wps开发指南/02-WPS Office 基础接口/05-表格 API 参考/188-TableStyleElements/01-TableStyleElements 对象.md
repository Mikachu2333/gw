# TableStyleElements 对象

代表表格样式元素。

## 说明


表格样式为表格、数据透视表或切片器的一个或所有元素定义格式。例如，标题行、最后一列或总计行是表格的元素，表格样式可以规定标题行的填充色为蓝色，最后一列为红色。

表格中表格样式元素的格式设置可在适用于该元素的表格样式中指定。 **XlTableStyleElementType** 枚举包含可供使用的表格样式元素的类型。


## 示例


```JavaScript
/*本示例显示第一张工作表上第一张列表是否存在表格样式元素。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Count > 0)
}
```


```JavaScript
/*本示例将活动工作表上第一张列表的最后一列样式元素的内部设置为红色。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.TableStyle.TableStyleElements.Item(xlLastColumn).Interior.ColorIndex = 3
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElements/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElements/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElements/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElements/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyleElements/member/Parent) | 返回指定对象的父对象。只读。 |