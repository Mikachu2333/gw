# Range.LocationInTable

返回一个常量，该常量描述包含指定区域左上角部分的 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 部分。可为以下 **[XlLocationInTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLocationInTable)** 常量之一。 **Long** 类型，只读。



## 语法

express.**LocationInTable**

express   一个代表 **Range** 对象的变量。

## 类型

XlLocationInTable

## 说明


| **XlLocationInTable** 可为以下 **XlLocationInTable** 常量之一。 |
| ------------------------------------------------------ |
| **xlRowHeader**                                        |
| **xlColumnHeader**                                     |
| **xlPageHeader**                                       |
| **xlDataHeader**                                       |
| **xlRowItem**                                          |
| **xlColumnItem**                                       |
| **xlPageItem**                                         |
| **xlDataItem**                                         |
| **xlTableBody**                                        |



## 示例


```JavaScript
/*本示例显示一个消息框，用以描述数据透视表中活动单元格所在的位置。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    switch (Selection.LocationInTable) {
        case xlRowHeader :
            MsgBox("Active cell is part of a row header")
            break
        case xlColumnHeader :
            MsgBox("Active cell is part of a column header")
            break
        case xlPageHeader :
            MsgBox("Active cell is part of a page header")
            break
        case xlDataHeader :
            MsgBox("Active cell is part of a data header")
            break
        case xlRowItem :
            MsgBox("Active cell is part of a row item")
            break
        case xlColumnItem :
            MsgBox("Active cell is part of a column item")
            break
        case xlPageItem :
            MsgBox("Active cell is part of a page item")
            break
        case xlDataItem :
            MsgBox("Active cell is part of a data item")
            break
        case xlTableBody :
            MsgBox("Active cell is part of the table body")
            break
    }
}
```


```JavaScript
/*本示例判断 A2 单元格是否为数据透视表的正文*/
function test() {
    if (Range("A2").LocationInTable == xlTableBody) {
        alert("A2单元格为数据透视表的正文")
    }
}
```
