# Worksheet.CustomProperties

返回一个 **[CustomProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperties/obj)** 对象，该对象表示与工作表相关的标识符信息。



## 语法

express.**CustomProperties**

express   一个代表 **Worksheet** 对象的变量。

## 类型

CustomProperties

## 说明


对于 **CustomProperties** 属性，工作表的标识符信息可以表示 XML 的元数据。



## 示例


```JavaScript
/*本示例ET向活动工作表添加标识符信息，并显示名称和值。*/
function test() {
    // Add metadata to worksheet.
    Application.ActiveSheet.CustomProperties.Add("Market", "Nasdaq")

    // Display metadata.
    let propertie = Application.ActiveSheet.CustomProperties.Item(1)
    alert(`${propertie.Name}\n${propertie.Value}`)
}
```


```JavaScript
/*此示例激活工作表 Sheet1，并将该工作表上标识符信息赋值给单元格。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    let properties = ActiveSheet.CustomProperties
    for (let i = 1; i <= properties.Count; i++) {
        ActiveSheet.Cells.Item(i, 1).Value2 = properties.Item(i).Name
    }
}
```
