# Columns.Width

返回或设置指定列的宽度，以磅为单位。可读/写 **Long** 类型。



## 语法

express.**Width**

express   一个代表 **Columns** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在新文档中创建一张 5x5 的表格，然后将该表格中的所有列宽设为 1.5 英寸。*/
function test() {
    let document = Documents.Add()
    let table = document.Tables.Add(Selection.Range, 5, 5)
    table.Columns.Width = InchesToPoints(1.5)
}
```


```JavaScript
/*本示例显示所选表格列的宽度。*/
function test() {
    alert(`${Selection.Columns.Width} 磅`)
}
```
