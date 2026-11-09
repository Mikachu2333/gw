# ListObject.Active

返回一个 **Boolean** 类型的值，该值表示工作表中的 **ListObject** 对象是否是活动的，即活动的单元格是否在 **ListObject** 对象的区域之内。只读 **Boolean** 类型。



## 语法

express.**Active**

express   一个代表 **ListObject** 对象的变量。

## 类型

boolean

## 说明


因为 **ListObject** 对象没有 **Activate** 方法，所以只能通过激活列表（列表：包含相关数据的一系列行，或使用 “创建列表” 命令作为数据表指定给函数的一系列行。）中某个单元格区域的方式激活 **ListObject** 对象。



## 示例


```JavaScript
/*本示例激活了活动工作簿上工作表 Sheet1 的默认 ListObject 对象的列表。调用 Range 对象的 Activate 方法时不提供单元格参数，将激活列表的整个区域。*/
function test() {
    let sheet = Application.ActiveWorkbook.Worksheets.Item("Sheet1")
    let objList = sheet.ListObjects.Item(1)
    objList.Range.Activate()
    return objList.Active
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中包含 A1 单元格的列表是否是活动的。*/
function test() {
    let listObj = Worksheets.Item("Sheet1").Range("A1").ListObject
    alert(listObj.Active)
}
```
