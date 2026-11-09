# Rows.HeadingFormat

如果将指定一行或数行的格式设置为表格标题，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**HeadingFormat**

express   一个代表 **Rows** 对象的变量。

## 类型

number（int4 精度）

## 说明


当表格不止一页时，可将多行的格式重复设置为表格标题。属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例在活动文档的开始处创建一个 5x5 表格，然后将表格所有行的格式设置为表格标题。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    let table = ActiveDocument.Tables.Add(range, 5, 5)
    table.Rows.HeadingFormat = msoTrue
}
```


```JavaScript
/*本示例判断如果所选表格行的格式为表格标题，则通知用户。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        if (Selection.Rows.HeadingFormat == msoTrue) {
            alert("The current row is a table heading")
        }
    } else {
        alert("The insertion point is not in a table.")
    }
}
```
