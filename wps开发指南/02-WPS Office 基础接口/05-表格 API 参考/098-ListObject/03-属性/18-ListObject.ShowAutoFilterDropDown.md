# ListObject.ShowAutoFilterDropDown

显示 **ListObject** 对象的“自动筛选”下拉列表时为 **True** 。 可读写 ， **Boolean** 类型。



## 语法

express.**ShowAutoFilterDropDown**

express   一个代表 **ListObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张列表是否展示“自动筛选”下拉列表。*/
function test() {
    let listObj = Worksheets.Item("Sheet1").ListObjects.Item(1)
    alert(listObj.ShowAutoFilterDropDown)
}
```


```JavaScript
/*本示例判断如果活动工作表上包含 C2 单元格的列表的名称为“表1”，则将该列表设置为展示“自动筛选”下拉列表。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C2").ListObject
    if (listObj.Name == "表1") {
        listObj.ShowAutoFilterDropDown = true
    }
}
```
