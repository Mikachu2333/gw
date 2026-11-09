# Worksheet.OLEObjects

返回一个对象，它代表图表或工作表上的单个 OLE 对象 ( **[OLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/obj)** ) 或所有 OLE 对象的集合（ **[OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/obj)** 集合）。只读。



## 语法

express.**OLEObjects(Index)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | OLE 对象的名称或编号。 |

## 返回值

Object

## 示例


```JavaScript
/*此示例创建工作表 Sheet1 上 OLE 对象的链接类型列表。该列表将出现在此示例新建的工作表中。*/
function test() {
    let sheet = Worksheets.Add()
    sheet.Range("A1").Value2 = "Name"
    sheet.Range("B1").Value2 = "Link Type"
    let objects = Worksheets.Item("Sheet1").OLEObjects()
    for (let i = 1; i <= objects.Count; i++) {
        sheet.Cells.Item(i + 1, 1).Value2 = objects.Item(i).Name
        if (objects.Item(i).OLEType == xlOLELink) {
            sheet.Cells.Item(i + 1, 2).Value2 = "Linked"
        } else {
            sheet.Cells.Item(i + 1, 2).Value2 = "Embedded"
        }
    }
}
```


```JavaScript
/*此示例为第一张工作表添加一个命令按钮。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Add("Forms.CommandButton.1", "", false, false, null, null, null, 40, 40, 150, 20)
}
```
