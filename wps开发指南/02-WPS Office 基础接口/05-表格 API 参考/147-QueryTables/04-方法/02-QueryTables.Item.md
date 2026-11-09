# QueryTables.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **QueryTables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 QueryTable 对象。

## 示例


```JavaScript
/*本示例对工作表 Sheet1 上第一张查询表进行设置，以便查询表右侧的公式在每次刷新时都可以进行自动更新。*/
function test() {
    Sheets.Item("Sheet1").QueryTables.Item(1).FillAdjacentFormulas = true
}
```


```JavaScript
/*本示例显示第一张工作表上第一张查询表是否将连续分隔符看作是一个分隔符。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    alert(qyTable.TextFileConsecutiveDelimiter)
}
```
