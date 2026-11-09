# Worksheet.Type

返回一个代表工作表类型的 [XlSheetType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSheetType)值。



## 语法

express.**Type**

express   一个代表 **Worksheet** 对象的变量。

## 类型

XlSheetType

## 示例


```JavaScript
/*本示例显示活动工作表类型的 XlSheetType 值。*/
function test() {
    alert(`活动工作表的类型值为 ${Application.ActiveSheet.Type}`)
}
```


```JavaScript
/*本示例判断活动工作簿中每一张工作表类型，如果是工作表或图表工作表则通知用户。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        let sheet = Application.Worksheets.Item(i)
        if (sheet.Type == xlWorksheet) {
            alert(`工作表 ${sheet.Name} 类型为工作表`)
        } else if (sheet.Type == xlChart) {
            alert(`工作表 ${sheet.Name} 类型为图表工作表`)
        }
    }
}
```
