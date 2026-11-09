# ListObject.ListRows

返回一个 **ListRows** 对象，该对象代表 **ListObject** 对象中的所有数据行。只读。



## 语法

express.**ListRows**

express   一个代表 **ListObject** 对象的变量。

## 类型

ListRows

## 说明


返回的 **ListRows** 对象不包括标题行、总计行或插入行。



## 示例


```JavaScript
/*本示例删除了由活动工作簿上工作表 Sheet1 中第一张列表的 ListRows 集合中的 iRowNumber 指定的行。*/
function test() {
    let listObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").ListObjects.Item(1)
    let objListRows = listObj.ListRows
    let iRowNumber = 1
    if ((iRowNumber !== 0) && (iRowNumber < objListRows.Count - 1)) {
        objListRows.Item(iRowNumber).Delete()
    }
}
```


```JavaScript
/*本示例为活动工作表上包含 B3 单元格的列表添加数据行。*/
function test() {
    let listObj = Application.ActiveSheet.Range("B3").ListObject
    listObj.ListRows.Add()
}
```
