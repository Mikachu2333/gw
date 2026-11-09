# ListObject.Publish

将 **ListObject** 对象发布到运行 SharePoint Foundation 的服务器。



## 语法

express.**Publish(Target, LinkSource)**

express   一个代表 **ListObject** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Target | 必选 | any | 包含一个 String 值数组，如“备注”部分所述。 |
| LinkSource | 必选 | boolean | 请参阅“备注”部分。 |

## 返回值

一个字符串，代表 SharePoint 网站上已发布列表的 URL。

## 说明


*Target* 参数包含一个 **String** 元素数组，如下表中所述：

| 元素号 | 内容                  |
| --- | ------------------- |
| 0   | SharePoint 服务器的 URL |
| 1   | ListName（显示名称）      |
| 2   | 列表的说明。可选。           |

如果 **ListObject** 对象目前没有链接到 SharePoint 网站上的列表，在将 *LinkSource* 设置为 **True** 时，将在指定的 SharePoint 网站上创建新的列表。如果 **ListObject** 对象目前已经链接到 SharePoint 网站上的列表，在将 *LinkSource* 参数设置为 **True** 时，将替换现有的链接（只能将列表链接到一个 SharePoint 网站）。如果 **ListObject** 对象目前没有链接，在将 *LinkSource* 设置为 **False** 时，将保留 **ListObject** 对象不进行链接。如果 **ListObject** 对象目前已经链接到 SharePoint 网站，在将 *LinkSource* 设置为 **False** 时，将保持 **ListObject** 对象与当前 SharePoint 网站的链接。



## 示例


```JavaScript
/*本示例将工作表 Sheet1 上第一张列表发布到运行 SharePoint Foundation 的服务器。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.Publish(["https://myteam/project1", "ListObject_1", "example"], true)
}
```


```JavaScript
/*本示例将活动工作表上包含 D1 单元格的列表发布到运行 SharePoint Foundation 的服务器。*/
function test() {
    let listObj = Application.ActiveSheet.Range("D1").ListObject
    listObj.Publish(["https://myteam/listobject1", "List1", "ListObjecct"], false)
}
```
