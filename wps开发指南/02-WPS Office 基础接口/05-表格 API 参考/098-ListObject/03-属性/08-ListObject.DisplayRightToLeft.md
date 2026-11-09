# ListObject.DisplayRightToLeft

如果指定的 **ListObject** 从右到左而不是从左到右显示，则此属性为 **True** 。如果对象从左到右显示，则此属性为 **False** 。 **Boolean** 类型，只读。



## 语法

express.**DisplayRightToLeft**

express   一个代表 **ListObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表上包含 B2 单元格的列表的是否从右到左展示。*/
function test() {
    let listObj = Application.ActiveSheet.Range("B2").ListObject
    alert(listObj.DisplayRightToLeft)
}
```


```JavaScript
/*本示例判断工作表 Sheet1 上第一张列表的显示方式，并通知用户。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    if (listObj.DisplayRightToLeft) {
        alert("列表从右到左显示")
    } else {
        alert("列表从左到右显示")
    }
}
```
