# TableStyle.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **TableStyle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表上包含 C3 单元格的列表的表样式的名称。*/
function test() {
    let listObj = Application.ActiveSheet.Range("C3").ListObject
    alert(listObj.TableStyle.Name)
}
```


```JavaScript
/*本示例将第一张工作簿的表格样式中第一个样式名称赋值给D2单元格。*/
function test() {
    Range("D2").Value2 = Workbooks.Item(1).TableStyles.Item(1).Name
}
```
