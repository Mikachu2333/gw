# Cell.PreferredWidth

返回或设置指定单元格的首选宽度（以磅为单位或表示为窗口宽度的百分比）。 **Single** 类型，可读写。



## 语法

express.**PreferredWidth**

express   一个代表 **Cell** 对象的变量。

## 类型

number（float 精度）

## 说明


如果 **PreferredWidthType** 属性设置为 **wdPreferredWidthPoints** ，则 **PreferredWidth** 属性返回或设置宽度（以磅为单位）。如果 **PreferredWidthType** 属性设置为 **wdPreferredWidthPercent** ，则 **PreferredWidth** 属性返回或设置宽度（以窗口宽度的百分比表示）。



## 示例


```JavaScript
/*本示例新建一个表格，并将表格的首个单元格首选宽度设置为50磅。*/
function test() {
    let newTable = Application.ActiveDocument.Tables.Add(Selection.Range, 1, 3)
    let cell = newTable.Cell(1, 1)
    cell.PreferredWidthType = wdPreferredWidthPoints
    cell.PreferredWidth = 50
}
```


```JavaScript
/*本示例判断活动文档中第一张表格的第一行第一列单元格首选宽度类型，并显示其首选宽度*/
function test() {
    let cell = Application.ActiveDocument.Tables.Item(1).Cell(1, 1)
    switch (cell.PreferredWidthType) {
        case wdPreferredWidthPoints:
            alert("第一行第一列单元格宽度是：" + cell.PreferredWidth + "磅")
            break
        case wdPreferredWidthPercent:
            alert("第一行第一列单元格宽度是：" + cell.PreferredWidth + "%窗口宽度")
            break
    }
}
```
