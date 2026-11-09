# Workbook.Sheets

返回一个 [Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj) 集合，它代表指定工作簿中所有工作表。 **Sheets** 对象，只读。



## 语法

express.**Sheets**

express   一个代表 **Workbook** 对象的变量。

## 类型

Sheets

## 说明


在不使用对象识别符的情况下使用此属性等效于使用 `ActiveWorkbook.Sheets`。



## 示例


```JavaScript
/*此示例新建一张工作表，然后在第一列中列出活动工作簿中的工作表名称。*/
function test() {
    let newSheet = Application.Sheets.Add(null, null, null, xlWorksheet)
    for (let i = 1; i <= Application.Sheets.Count; i++) {
        newSheet.Cells.Item(i, 1).Value2 = Application.Sheets.Item(i).Name
    }
}
```


```JavaScript
/*此示例演示工作表的总数量。*/
function test() {
    alert("工作表的总数量：" + Application.Sheets.Count)
}
```
