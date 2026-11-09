# ListColumn.Name

返回或设置一个 **String** 值，它代表列表列的名称。



## 语法

express.**Name**

express   一个代表 **ListColumn** 对象的变量。

## 类型

string

## 说明


该属性值还被用作列表列的显示名称。此名称必须在列表中唯一。



## 示例


```JavaScript
/*本示例显示第一张工作表的第一个 ListObject 对象中第三列的名称。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    let objListCols = listObj.ListColumns
    alert(objListCols.Item(3).Name)
}
```


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第四列名称改为“列四”。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    listObj.ListColumns.Item(4).Name = "列四"
}
```
