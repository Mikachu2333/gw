# ListObject.ListColumns

返回一个 **ListColumns** 集合，该集合代表 **ListObject** 对象中的所有列。只读。



## 语法

express.**ListColumns**

express   一个代表 **ListObject** 对象的变量。

## 类型

ListColumns

## 示例


```JavaScript
/*本示例显示了通过对 ListColumns 属性的调用所创建的 ListColumns 集合对象中第二列的名称。要让本示例运行，Sheet1 工作表必须包含一个表格。*/
function test() {
    let listObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").ListObjects.Item(1)
    let objListCols = listObj.ListColumns
    alert(objListCols.Item(2).Name)
}
```


```JavaScript
/*本示例显示活动工作表上包含 A3 单元格的列表中列的数量。*/
function test() {
    let listObj = Application.ActiveSheet.Range("A3").ListObject
    alert(listObj.ListColumns.Count)
}
```
