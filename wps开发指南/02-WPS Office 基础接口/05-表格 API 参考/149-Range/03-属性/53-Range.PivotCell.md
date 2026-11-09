# Range.PivotCell

返回一个 **[PivotCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/obj)** 对象，该对象表示数据透视表中的一个单元格。



## 语法

express.**PivotCell**

express   一个代表 **Range** 对象的变量。

## 类型

PivotCell

## 示例


```JavaScript
/*本示例确定 PivotCell 对象所在的数据透视表的名称，并通知用户。本示例假定数据透视表位于活动工作表上，并且单元格 A3 位于数据透视表上。*/
function test() {
    //Determine the name of the PivotTable the PivotCell is located in.
    MsgBox ("Cell A3 is located in PivotTable: " + Application.Range("A3").PivotCell.Parent)
}
```


```JavaScript
/*本示例显示 B3 单元格数据透视表字段的标签文本的文本和所关联的数据透视表名称*/
function test() {
    alert("B3单元格数据透视表字段的标签文本：" + Range("B3").PivotCell.PivotField.Caption)
    alert("B3单元格所关联的数据透视表为：" + Range("B3").PivotCell.PivotTable.Name)
}
```
