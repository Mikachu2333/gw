# Rows.AllowBreakAcrossPages

如果允许分页符拆分表格中一行或多行中的文本，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**AllowBreakAcrossPages**

express   一个代表 **Rows** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （仅允许拆分部分指定文本）。



## 示例


```JavaScript
/*本示例新建一篇包含 5x5 表格的文档，并防止在分页时拆分表格。*/
function test() {
    let document = Documents.Add()
    let table = document.Tables.Add(Selection.Range, 5, 5)
    table.Rows.AllowBreakAcrossPages = msoFalse
}
```


```JavaScript
/*本示例显示所选表格分页时是否可以拆分当前表格中的行。如果插入点不在表格中，则显示一个消息框。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    if (Selection.Tables.Count == 0) {
        alert("The insertion point is not in a table.")
    } else {
        alert(Selection.Rows.AllowBreakAcrossPages == msoTrue)
    }
}
```
