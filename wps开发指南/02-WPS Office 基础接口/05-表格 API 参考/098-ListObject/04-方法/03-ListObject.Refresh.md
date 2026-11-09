# ListObject.Refresh

从运行 SharePoint Foundation 的服务器上检索列表的当前数据和架构。此方法只能被用于链接到 SharePoint 网站的列表。如果 SharePoint 网站不可用，调用此方法将返回错误。



## 语法

express.**Refresh()**

express   一个代表 **ListObject** 对象的变量。

## 返回值

void

## 说明


对 **Refresh** 方法的调用不会将更改提交到 ET 工作簿内的列表中。在 ET 中，当调用 **Refresh** 方法时，将放弃列表中未提交的更改。



## 示例


```JavaScript
/*本示例检索活动工作表上包含单元格 C2 的列表的当前数据和架构。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C2").ListObject
    listObj.Refresh()
}
```


```JavaScript
/*本示例检索工作表 Sheet1 中第一张列表的当前数据和架构，并选中该列表。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.Refresh()
    listObj.Range.Select()
}
```
