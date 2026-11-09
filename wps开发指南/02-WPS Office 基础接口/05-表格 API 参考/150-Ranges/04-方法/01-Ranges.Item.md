# Ranges.Item

返回一个 **Range** 对象，该对象代表工作簿中的项的区域。只读。



## 语法

express.**Item(Index)**

express   一个代表 **Ranges** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 区域项的索引号。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例选中基于活动工作表上第一张查询表的连接的第一个范围。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    connection.Ranges.Item(1).Select()
}
```


```JavaScript
/*本示例显示基于活动工作簿上第一个连接的第一个范围的地址。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    alert(connection.Ranges.Item(1).Address())
}
```
