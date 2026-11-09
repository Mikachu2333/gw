# ListObject.Range

返回一个 **Range** 对象，它代表在以上列表中的指定列表对象所应用的区域。



## 语法

express.**Range**

express   一个代表 **ListObject** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动工作表上包含单元格 C1 的列表应用到的区域的地址。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C1").ListObject
    alert(listObj.Range.Address())
}
```


```JavaScript
/*本示例选中工作表 Sheet1 中第一张列表应用到的区域。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.Range.Select()
}
```
