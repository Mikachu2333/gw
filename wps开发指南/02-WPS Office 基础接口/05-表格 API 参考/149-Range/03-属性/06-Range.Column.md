# Range.Column

返回指定区域中第一块中的第一列的列号。Long 类型，只读。



## 语法

express.**Column**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


A 列返回 1，B 列返回 2，依此类推。

若要返回区域中最后一列的列号，请使用下列语句。

myRange.Columns(myRange.Columns.Count).Column



## 示例


```JavaScript
/*本示例将工作表 Sheet1 上每隔一列的列宽设置为 4 磅。*/
function test() {
    let col = Application.Worksheets.Item("Sheet1").Columns
    for (let i = 1; i <= col.Count; i++) {
        if ((col.Item(i).Column) % 2 == 0) {
            col.Item(i).ColumnWidth = 4
        }
    }
}
```


```JavaScript
/*本示例将工作表 Sheet1 上第一列的文字加粗。*/
function test() {
    Application.Worksheets.Item("Sheet1").Columns.Item(1).Font.Bold = true
}
```
