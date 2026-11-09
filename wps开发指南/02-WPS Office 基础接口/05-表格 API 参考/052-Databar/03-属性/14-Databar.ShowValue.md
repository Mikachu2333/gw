# Databar.ShowValue

返回或设置一个 **Boolean** 值，该值指定数据条条件格式应用于区域时是否显示单元格中的值。



## 语法

express.**ShowValue**

express   一个代表 **Databar** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个条件格式（数据条）是否显示单元格中的值。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(databar.ShowValue)
}
```


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第一个条件格式（数据条）设置为不展示单元格中的值，并将该数据条填充色设置为纯色。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.ShowValue = false
    databar.BarFillType = xlDataBarFillSolid
}
```
