# ListObject.ShowTableStyleLastColumn

返回或设置是否显示指定的 **ListObject** 对象的最后一列。可读/写 **Boolean** 类型。



## 语法

express.**ShowTableStyleLastColumn**

express   一个代表 **ListObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表上包含 B2 单元格的列表是否展示最后一列。*/
function test() {
    let listObj = Application.ActiveSheet.Range("B2").ListObject
    alert(listObj.ShowTableStyleLastColumn)
}
```


```JavaScript
/*本示例将工作表 Sheet1 上第一张列表设置为展示最后一列。*/
function test() {
    let listObj = Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.ShowTableStyleLastColumn = true
}
```
