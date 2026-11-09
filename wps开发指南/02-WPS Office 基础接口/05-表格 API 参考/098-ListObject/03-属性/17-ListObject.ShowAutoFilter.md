# ListObject.ShowAutoFilter

返回一个 **Boolean** 类型的数值，该数值指示是否显示“自动筛选”。 **Boolean** 类型，可读写。



## 语法

express.**ShowAutoFilter**

express   一个代表 **ListObject** 对象的变量。

## 类型

boolean

## 说明


对于新的 **ListObject** 对象， **ShowAutoFilter** 属性默认为 **True** 。



## 示例


```JavaScript
/*本示例显示活动工作簿的 Sheet1 中默认列表的 ShowAutoFilter 属性设置。*/
function test() {
    let wrksht = Application.ActiveWorkbook.Worksheets.Item("Sheet1")
    let oListCol = wrksht.ListObjects.Item(1)
    console.log(oListCol.ShowAutoFilter)
}
```


```JavaScript
/*本示例将活动工作表上包含 D2 单元格的列表设置为不展示“自动筛选”。*/
function test() {
    let listObj = Application.ActiveSheet.Range("D2").ListObject
    listObj.ShowAutoFilter = false
}
```
