# ListObject.ShowTotals

获取或设置一个 **Boolean** 类型的数值以指示“总计”行是否可见。 **Boolean** 类型，可读写。



## 语法

express.**ShowTotals**

express   一个代表 **ListObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示了对活动工作簿的 Sheet1 中默认列表的 ShowTotals 属性的当前设置。*/
function test() {
    let listObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").ListObjects.Item(1)
    console.log(listObj.ShowTotals)
}
```


```JavaScript
/*本示例将活动工作表上包含 C1 单元格的列表的“总计”行设置为可见。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C1").ListObject
    listObj.ShowTotals = true
}
```
