# ListObject.DataBodyRange

返回 **Range** 对象，它代表表中值的范围，但不包括标题行。只读。



## 语法

express.**DataBodyRange**

express   一个代表 **ListObject** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*此示例激活工作表 Sheet1，并选定活动工作表上第一张列表中的活动数据区域。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    ActiveSheet.ListObjects.Item(1).DataBodyRange.Select()
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一张列表的值范围的地址。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    alert(listObj.DataBodyRange.Address())
}
```
