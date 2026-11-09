# OLEObject.OLEType

返回 OLE 对象类型。可为以下 **XlOLEType** 常量之一： **xlOLELink** 或 **xlOLEEmbed** 。如果对象是链接的（对象存储于文件之外），则本属性返回 **xlOLELink** ，如果对象是内嵌的（对象完全包含于文件之内），则返回 **xlOLEEmbed** 。 **Long** 类型，只读。



## 语法

express.**OLEType**

express   一个代表 **OLEObject** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例创建工作表 Sheet1 上 OLE 对象的链接类型列表。该列表将出现在本示例新建的工作表中。*/
function test() {
    let newSheet = Application.Worksheets.Add()
    let i = 2
    let objects = Application.Worksheets.Item("Sheet1").OLEObjects()
    newSheet.Range("A1").Value2 = "Name"
    newSheet.Range("B1").Value2 = "Link Type"
    for (let x = 1; x <= objects.Count; x++) {
        newSheet.Cells.Item(i, 1).Value2 = objects.Item(x).Name
        if (objects.Item(x).OLEType == xlOLELink) {
            newSheet.Cells.Item(i, 2).Value2 = "Linked"
        } else {
            newSheet.Cells.Item(i, 2).Value2 = "Embedded"
        }
        ++i
    }
}
```


```JavaScript
/*此示例显示活动工作表中的第一个 OLE 对象是否为链接 OLE 对象。*/
function test() {
    alert(ActiveSheet.OLEObjects(1).OLEType == xlOLELink)
}
```
