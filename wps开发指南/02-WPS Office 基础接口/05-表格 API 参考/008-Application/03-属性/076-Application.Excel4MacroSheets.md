# Application.Excel4MacroSheets

返回一个 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合，它代表指定工作簿中所有的 ET 宏表。只读。



## 语法

express.**Excel4MacroSheets**

express   一个代表 **Application** 对象的变量。

## 类型

Sheets

## 说明


在使用 **Application** 对象的情况下使用此属性，或者，在不使用对象识别符的情况下使用此属性，都等同于使用 `ActiveWorkbook.Excel4MacroSheets`。



## 示例


```JavaScript
/*此示例显示活动工作簿中 ET 宏表的数目。*/
function test() {
    alert(`There are ${ActiveWorkbook.Excel4MacroSheets.Count} ET macro sheets in this workbook.`)
}
```


```JavaScript
/*本示例向活动工作簿添加一张宏表，并将所有宏表的名称赋值到活动工作表的单元格中。*/
function test() {
    let sheets = ActiveWorkbook.Excel4MacroSheets
    sheets.Add(null, ActiveWorkbook.Worksheets.Item(ActiveWorkbook.Worksheets.Count), 1, xlExcel4MacroSheet)
    for (let i = 1; i <= sheets.Count; i++) {
        ActiveSheet.Cells.Item(i, 1).Value2 = sheets.Item(i).Name
    }
}
```
