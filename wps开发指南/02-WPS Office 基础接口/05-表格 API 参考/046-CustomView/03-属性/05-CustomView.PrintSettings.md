# CustomView.PrintSettings

如果在自定义视图中包含打印设置，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**PrintSettings**

express   一个代表 **CustomView** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例创建活动工作簿中自定义视图及其打印设置和行列设置列表。*/
function test() {
    let worksheet = Worksheets.Item(1)
    worksheet.Cells.Item(1, 1).Value2 = "Name"
    worksheet.Cells.Item(1, 2).Value2 = "Print Settings"
    worksheet.Cells.Item(1, 3).Value2 = "RowColSettings"
    let customViews = ActiveWorkbook.CustomViews
    for (let i = 1; i <= customViews.Count; i++) {
        worksheet.Cells.Item(i + 1, 1).Value2 = customViews.Item(i).Name
        worksheet.Cells.Item(i + 1, 2).Value2 = customViews.Item(i).PrintSettings
        worksheet.Cells.Item(i + 1, 3).Value2 = customViews.Item(i).RowColSettings
    }
}
```


```JavaScript
/*本示例判断第一张工作簿上第一个自定义视图是否包含打印设置，并通知用户。*/
function test() {
    let customView = Workbooks.Item(1).CustomViews.Item(1)
    if (customView.PrintSettings) {
        alert("自定义视图包含打印设置")
    } else {
        alert("自定义视图未包含打印设置")
    }
}
```
