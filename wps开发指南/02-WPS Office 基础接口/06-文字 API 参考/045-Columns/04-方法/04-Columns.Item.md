# Columns.Item

返回集合中的单个 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Columns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Column

## 示例


```JavaScript
/*本示例设置活动文档第一个表格的第一列的宽度。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(1).Width = 10
}
```


```JavaScript
/*本示例设置第一个文档上第一个表格的第三列的外边框样式。*/
function test() {
    let column = Documents.Item(1).Tables.Item(1).Columns.Item(3)
    column.Borders.OutsideLineStyle = wdLineStyleDouble
}
```
