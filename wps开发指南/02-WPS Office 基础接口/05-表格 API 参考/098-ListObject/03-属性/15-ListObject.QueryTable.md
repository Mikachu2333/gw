# ListObject.QueryTable

返回 **QueryTable** 对象，它为 **ListObject** 对象提供了一个列表服务器的链接。只读。



## 语法

express.**QueryTable**

express   一个代表 **ListObject** 对象的变量。

## 类型

QueryTable

## 示例


```JavaScript
/*本示例创建一个到 SharePoint 网站的链接，并将活动工作簿上工作表 Sheet1 中名为 `List1` 的第一张列表发布到服务器，并显示该列表关联的查询表的 MaintainConnection 属性。*/
function test() {
    let listObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.Publish(["https://myteam/project1", "1", "List1"], true)
    alert(listObj.QueryTable.MaintainConnection)
}
```


```JavaScript
/*本示例显示活动工作表上包含 B3 单元格的列表关联的查询表的数据源的命令串。*/
function test() {
    let objList = Application.ActiveSheet.Range("B3").ListObject
    alert(objList.QueryTable.CommandText)
}
```
