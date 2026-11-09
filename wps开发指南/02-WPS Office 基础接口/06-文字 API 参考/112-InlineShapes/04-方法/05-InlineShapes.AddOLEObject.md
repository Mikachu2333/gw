# InlineShapes.AddOLEObject

创建一个 OLE 对象。返回代表新 OLE 对象的 **InlineShape** 对象。



## 语法

express.**AddOLEObject(ClassType, FileName, LinkToFile, DisplayAsIcon, IconFileName, IconIndex, IconLabel, Range)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ClassType | 可选 | any | 用于激活指定 OLE 对象的应用程序名称。 |
| FileName | 可选 | any | 创建对象所用的文件。如果省略该参数，则使用当前的文件夹。必须指定对象的 ClassType 或 FileName 参数，但不能同时指定两者。 |
| LinkToFile | 可选 | any | 如果为 **True** ，则将 OLE 对象链接到创建该对象所用的文件。如果为 **False** ，则 OLE 对象成为其源文件的独立副本。如果为 ClassType 指定了值，则 LinkToFile 参数必须为 **False** 。默认值为 **False** 。 |
| DisplayAsIcon | 可选 | any | 如果为 **True** ，则将 OLE 对象显示为图标。默认值为 **False** 。 |
| IconFileName | 可选 | any | 要显示的图标所在的文件。 |
| IconIndex | 可选 | any | IconFileName 中图标的索引号。当选中 **“显示为图标”** 复选框时，在指定文件中图标的顺序对应于 **“插入”** 菜单 **“对象”** 对话框的 **“更改图标”** 对话框中图标出现的顺序。文件中的第一个图标的索引号为 0（零）。如果指定索引号的图标在 IconFileName 中不存在，则使用索引号为 1 的图标（文件中的第二个图标）。默认值为 0（零）。 |
| IconLabel | 可选 | any | 显示在图标下面的标签（题注）。 |
| Range | 可选 | any | 指定 OLE 对象放置在文本中的区域。除非区域是折叠的，否则 OLE 对象将替换该区域。如果省略该参数，则自动放置对象。 |

## 返回值

InlineShape

## 示例


```JavaScript
/*本示例在活动文档的第二段中添加一张新的 ET 工作表。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(2).Range
    ActiveDocument.InlineShapes.AddOLEObject("Excel.sheet", null, null, false, null, null, null, range)
}
```


```JavaScript
/*本示例基于名为“example1.xlsx”的工作表创建一个 OLE 对象。*/
function test() {
    let fileNameStr = "D:\\示例\\example1.xlsx"
    ActiveDocument.InlineShapes.AddOLEObject(null, fileNameStr, true, false, null, null, true, Selection.Range)
}
```
