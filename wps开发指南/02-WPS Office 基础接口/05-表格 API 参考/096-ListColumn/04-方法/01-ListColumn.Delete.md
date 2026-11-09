# ListColumn.Delete

在列表中删除数据列。



## 语法

express.**Delete()**

express   一个代表 **ListColumn** 对象的变量。

## 返回值

void

## 说明


此方法不从工作表中删除列。如果列表链接到 SharePoint Foundation 网站，则无法从服务器中删除该列，并产生一个错误。



## 示例


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第一列删除。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.ListColumns.Item(1).Delete()
}
```


```JavaScript
/*本示例将第一张工作表的第一个 ListObject 对象的第三列删除。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    listObj.ListColumns.Item(3).Delete()
}
```
