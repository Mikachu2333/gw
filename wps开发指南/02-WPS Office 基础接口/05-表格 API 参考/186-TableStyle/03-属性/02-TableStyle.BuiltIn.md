# TableStyle.BuiltIn

如果样式为内置样式，则为 **True** 。只读 **Boolean** 类型。



## 语法

express.**BuiltIn**

express   一个代表 **TableStyle** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张列表的表样式是否为内置样式。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    alert(listObj.TableStyle.BuiltIn)
}
```


```JavaScript
/*本示例显示活动工作簿上的表格样式中的最后一个样式是否为内置样式。*/
function test() {
    let tableStyles = ActiveWorkbook.TableStyles
    alert(tableStyles.Item(tableStyles.Count).BuiltIn)
}
```
