# Rows.Add

返回一个 **Row** 对象，该对象代表添加到表中的行。



## 语法

express.**Add(BeforeRow)**

express   一个代表 **Rows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BeforeRow | 可选 | any | 代表将显示在新行正下方的行的 **Row** 对象。 |

## 返回值

Row

## 示例


```JavaScript
/*本示例在选定内容的第一行之前插入一个新行。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Add(Selection.Rows.Item(1))
    }
}
```


```JavaScript
/*本示例在活动文档第一张表中添加一行，然后将文本 Cell 插入该行。*/
function test() {
    let table = ActiveDocument.Tables.Item(1)
    let row = table.Rows.Add(table.Rows.Item(1))
    for (let i = 1; i <= row.Cells.Count; ++i) {
        let cell = row.Cells.Item(i)
        cell.Range.InsertAfter(`Cell ${i}`)
    }
}
```
