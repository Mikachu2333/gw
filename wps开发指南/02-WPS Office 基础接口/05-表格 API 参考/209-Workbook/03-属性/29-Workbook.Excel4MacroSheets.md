# Workbook.Excel4MacroSheets

返回一个 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合，它代表指定工作簿中所有的 ET 4.0 宏表。只读。



## 语法

express.**Excel4MacroSheets**

express   一个代表 **Workbook** 对象的变量。

## 类型

Sheets

## 说明


在使用 **Application** 对象的情况下使用此属性，或者，在不使用对象识别符的情况下使用此属性，都等同于使用 **ActiveWorkbook.Excel4MacroSheets** 。



## 示例


```JavaScript
/*此示例显示当前工作簿中 ET 4.0 宏表的数目。*/
function test() {
    MsgBox(`There are ${ActiveWorkbook.Excel4MacroSheets.Count} ET 4.0 macro sheets in this workbook.`)
}
```


```JavaScript
/*此示例演示在活动工作表之前新增一张ET4.0宏工作表，并告知用户当前工作簿中ET4.0宏工作表的总数。*/
function test() {
    ActiveWorkbook.Sheets.Add(undefined, undefined, 1,  xlExcel4MacroSheet)
    alert("已新增宏工作表：" + ActiveWorkbook.Excel4MacroSheets.Item(1).Name)
    alert(`当前共有 ${ActiveWorkbook.Excel4MacroSheets.Count} 个 ET 4.0 宏工作表。`)
}
```
