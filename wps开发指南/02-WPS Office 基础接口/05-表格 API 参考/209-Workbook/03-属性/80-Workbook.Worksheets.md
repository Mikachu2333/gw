# Workbook.Worksheets

返回一个 [Worksheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/obj) 集合，它代表指定工作簿中所有工作表。 **Worksheets** 对象，只读。



## 语法

express.**Worksheets**

express   一个代表 **Workbook** 对象的变量。

## 类型

Sheets

## 说明


在不使用对象识别符的情况下，使用此属性将返回活动工作簿中所有的工作表。

此属性不返回宏表；使用 **Excel4MacroSheets** 属性或 **Excel4IntlMacroSheets** 属性可返回这些表。



## 示例


```JavaScript
/*此示例显示活动工作簿中 sheet1 上单元格 A1 中的值。*/
function test() {
    alert(Application.Worksheets.Item("Sheet1").Range("A1").Value2)
}
```


```JavaScript
/*此示例显示活动工作簿中每个工作表的名称。*/
function test() {
    for (let i = 1; i <= Application.Worksheets.Count; i++) {
        alert(Application.Worksheets.Item(i).Name)
    }
}
```


```JavaScript
/*此示例向活动工作簿添加新工作表，并设置该工作表的名称。*/
function test() {
    let newSheet = Application.Worksheets.Add()
    newSheet.Name = "current Budget"
}
```
