# CustomView.RowColSettings

如果自定义视图包括对隐藏行和隐藏列（包括筛选信息）的设置，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**RowColSettings**

express   一个代表 **CustomView** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例创建活动工作簿中自定义视图及其打印设置和行列设置列表。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
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
/*本示例显示第一张工作簿上第二个自定义视图是否包含对隐藏行和隐藏列（包括筛选信息）的设置。*/
function test() {
    let customView = Workbooks.Item(1).CustomViews.Item(2)
    alert(customView.RowColSettings)
}
```
