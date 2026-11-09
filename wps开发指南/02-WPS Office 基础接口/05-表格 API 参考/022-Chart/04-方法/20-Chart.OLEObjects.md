# Chart.OLEObjects

返回一个对象，它代表图表或工作表上的单个 OLE 对象 ( **[OLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/obj)** ) 或所有 OLE 对象的集合（ **[OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/obj)** 集合）。只读。



## 语法

express.**OLEObjects(Index)**

express   一个代表 **Chart** 对象的变量。

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
    let newSheet = Application.Worksheets.Add()
    let j = 2
    newSheet.Range("A1").Value2 = "Name"
    newSheet.Range("B1").Value2 = "Link Type"
    let oleobjects = Application.Worksheets.Item("Sheet1").OLEObjects()
    for (let i = 1; i <= oleobjects.Count; i++) {
        newSheet.Cells.Item(j, 1).Value2 = oleobjects.Item(i).Name
        if (oleobjects.Item(i).OLEType == xlOLELink) {
            newSheet.Cells.Item(j, 2).Value2 = "Linked"
        } else {
            newSheet.Cells.Item(j, 2).Value2 = "Embedded"
        }
        j++
    }
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 OLE 对象的数量。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    alert(chart.OLEObjects().Count)
}
```
