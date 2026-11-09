# ListObject.HeaderRowRange

返回一个 **Range** 对象，该对象表示列表（列表：包含相关数据的一系列行，或使用 “创建列表” 命令作为数据表指定给函数的一系列行。）标题行的区域。 **Range** 类型，只读。



## 语法

express.**HeaderRowRange**

express   一个代表 **ListObject** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例激活了由活动工作簿上工作表 Sheet1 中默认 ListObject 对象的 HeaderRowRange 属性指定的区域。*/
function test() {
    let listObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").ListObjects.Item(1)
    let objListRng = listObj.HeaderRowRange
    objListRng.Activate()
}
```


```JavaScript
/*本示例显示活动工作表上包含 A2 单元格的列表的标题行的值。*/
function test() {
    let listObj = Application.ActiveSheet.Range("A2").ListObject
    alert(listObj.HeaderRowRange.Value2.toString())
}
```
