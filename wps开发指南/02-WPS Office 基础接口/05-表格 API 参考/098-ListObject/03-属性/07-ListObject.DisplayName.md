# ListObject.DisplayName

返回或设置指定的 **ListObject** 对象的显示名称。可读/写 **String** 类型。



## 语法

express.**DisplayName**

express   一个代表 **ListObject** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表上包含 A2 单元格的列表的展示名称。*/
function test() {
    let listObj = Application.ActiveSheet.Range("A2").ListObject
    alert(listObj.DisplayName)
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上第一张列表的展示名称。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.DisplayName = "ListObject_1"
}
```
