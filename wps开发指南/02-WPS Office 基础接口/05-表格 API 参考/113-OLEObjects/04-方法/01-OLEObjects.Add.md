# OLEObjects.Add

向工作表中添加新的 OLE 对象。



## 语法

express.**Add(ClassType, Filename, Link, DisplayAsIcon, IconFileName, IconIndex, IconLabel, Left, Top, Width, Height)**

express   一个代表 **OLEObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ClassType | 可选 | any | 必须指定 ClassType 或 FileName。一个字符串，包含要创建的对象的程序标识符。如果指定了 ClassType 参数，则忽略 FileName 和 Link。 |
| FileName | 可选 | any | 必须指定 ClassType 或 FileName。一个字符串，指定用于创建 OLE 对象的文件。 |
| Link | 可选 | any | 如果为 True，则让基于 FileName 的新 OLE 对象链接到该文件。如果该对象未链接到文件，则该对象被创建为文件副本。默认值是 False。 |
| DisplayAsIcon | 可选 | any | 如果为 True，则以图标或正常图片方式显示新的 OLE 对象。如果该参数设置为 True，则可以使用 IconFileName 和 IconIndex 来指定图标。 |
| IconFileName | 可选 | any | 一个字符串，指定要显示的图标所在的文件。仅当 DisplayAsIcon 为 True 时，才使用该参数。如果不指定该参数，或文件中不包含图标，则使用 OLE 类的默认图标。 |
| IconIndex | 可选 | any | 图标文件中包含的图标数目。仅当 DisplayAsIcon 参数为 True 并且 IconFileName 参数引用包含图标的有效文件时，才使用该参数。如果由 IconFileName 参数指定的文件中不存在具有指定索引号的图标，则使用该文件中的第一个图标。 |
| IconLabel | 可选 | any | 一个字符串，指定在图标下方显示一个标签。仅当 DisplayAsIcon 为 True 时，才使用该参数。如果省略该参数，或者该参数为空字符串 ("")，则不显示任何标题。 |
| Left | 可选 | any | 相对于工作表上单元格 A1 左上角或图表左上角的新对象的初始坐标（以 磅为单位）。 |
| Top | 可选 | any | 新对象的初始坐标（以磅为单位），相对于工作表上第 1 行的顶部或图表上图表区的顶部。 |
| Width | 可选 | any | 新对象的初始宽度（以磅为单位）。 |
| Height | 可选 | any | 新对象的初始高度（以磅为单位）。 |

## 返回值

一个 **[OLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/obj)** 对象，它代表新的 OLE 对象。

## 示例


```JavaScript
/*此示例在工作表 Sheet1 中新建一个文档 OLE 对象，并显示其名称。*/
function test() {
    let oleObj = Application.ActiveWorkbook.Worksheets.Item("Sheet1").OLEObjects().Add("Word.Document.12")
    alert(`新建的文档 OLE 对象名为${oleObj.Name}`)
}
```


```JavaScript
/*此示例为第一张工作表添加一个命令按钮。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Add("Forms.CommandButton.1", "", false, false, null, null, null, 40, 40, 150, 20)
}
```
