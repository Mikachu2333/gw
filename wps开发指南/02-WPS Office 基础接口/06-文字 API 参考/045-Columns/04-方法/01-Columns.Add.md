# Columns.Add

返回一个 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象，该对象代表添加到表中的列。



## 语法

express.**Add(BeforeColumn)**

express   一个代表 **Columns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BeforeColumn | 可选 | any | 代表将会直接显示在新列右侧的 **Column** 对象。 |

## 返回值

Column

## 示例


```JavaScript
/*本示例在活动文档中创建一个两行两列的表格，然后在第一列之前添加一列。新列的宽度设为 1.5 英寸。*/
function test() {
    let table = ActiveDocument.Tables.Add(Selection.Range, 2, 2)
    let newColumn = table.Columns.Add(table.Columns.Item(1))
    newColumn.SetWidth(InchesToPoints(1.5), wdAdjustNone)
}
```


```JavaScript
/*本示例在第一个文档第一个表格的第二列前添加一个新列，并设置其外边框样式。*/
function test() {
    let table = Documents.Item(1).Tables.Item(1)
    let newColumn = table.Columns.Add(table.Columns.Item(2))
    newColumn.Borders.OutsideLineStyle = wdLineStyleDouble
}
```
