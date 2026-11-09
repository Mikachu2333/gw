# ListObject.ShowHeaders

返回或设置是否显示指定的 **ListObject** 对象的标题信息。可读/写 **Boolean** 类型。



## 语法

express.**ShowHeaders**

express   一个代表 **ListObject** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张列表是否展示标题信息。*/
function test() {
    let listObj = Worksheets.Item("Sheet1").ListObjects.Item(1)
    alert(listObj.ShowHeaders)
}
```


```JavaScript
/*本示例将活动工作表上包含 A2 单元格的列表设置为不展示标题信息。*/
function test() {
    let listObj = Application.ActiveSheet.Range("A2").ListObject
    listObj.ShowHeaders = false
}
```
