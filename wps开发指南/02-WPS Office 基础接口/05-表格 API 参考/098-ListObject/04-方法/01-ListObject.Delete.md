# ListObject.Delete

删除 **ListObject** 对象并从工作表中清除单元格数据。



## 语法

express.**Delete()**

express   一个代表 **ListObject** 对象的变量。

## 返回值

void

## 说明


如果列表链接到 SharePoint 网站，删除列表不会影响运行 SharePoint Foundation 的服务器上的数据。对本地列表所做的任何未提交的更改不会发送到 SharePoint 列表（系统不会警告这些未提交的更改将会丢失）。



## 示例


```JavaScript
/*本示例删除工作表 Sheet1 上第一张列表。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.Delete()
}
```


```JavaScript
/*本示例判断如果活动工作表上包含 A1 单元格的列表的名称为“表1”，则删除该列表。*/
function test() {
    let listObj = Application.ActiveSheet.Range("A1").ListObject
    if (listObj.Name == "表1") {
        listObj.Delete()
    }
}
```
