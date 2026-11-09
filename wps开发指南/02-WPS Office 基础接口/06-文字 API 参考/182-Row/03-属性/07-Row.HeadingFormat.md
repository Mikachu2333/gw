# Row.HeadingFormat

如果为 **msoTrue** ，则将指定一行或数行的格式设置为表格标题。当表格不止一页时，可将多行的格式重复设置为表格标题。可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**HeadingFormat**

express   一个代表 **Row** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在活动文档的开始处创建一个 5x5 表格，然后将表格第一行的格式设置为表格标题。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    let table = ActiveDocument.Tables.Add(range, 5, 5)
    table.Rows.Item(1).HeadingFormat = msoTrue
}
```


```JavaScript
/*本示例判定是否将插入点所在行的格式设置为表格标题。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        if (Selection.Rows.Item(1).HeadingFormat == msoTrue) {
            alert("The current row is a table heading")
        }
    } else {
        alert("The insertion point is not in a table.")
    }
}
```
