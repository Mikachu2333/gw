# Selection.PasteSpecial

插入“剪贴板”中的内容。



## 语法

express.**PasteSpecial(IconIndex, Link, Placement, DisplayAsIcon, DataType, IconFileName, IconLabel)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| IconIndex | 可选 | any | 如果 DisplayAsIcon 为 **True** ，则此参数是一个数字，该数字对应于要在程序文件中使用的由 IconFilename 指定的图标。 |
| Link | 可选 | any | 如果该参数值为 **True** ，则创建指向“剪贴板”内容源文件的链接。默认值为 **False** 。 |
| Placement | 可选 | any | 可以是任一 **[WdOLEPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOLEPlacement)** 常量。 |
| DisplayAsIcon | 可选 | any | 如果该参数值为 **True** ，则将链接显示为图标。默认值为 **False** 。 |
| DataType | 可选 | any | “剪贴板”内容在插入到文档时采用的格式。 **[WdPasteDataType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPasteDataType)** 。 |
| IconFileName | 可选 | any | 如果 DisplayAsIcon 为 **True** ，则此参数是存储要显示的图标的文件的路径和文件名。 |
| IconLabel | 可选 | any | 如果 DisplayAsIcon 为 **True** ，则此参数是显示在图标下方的文本。 |

## 返回值

void

## 说明


与 **[Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Paste)** 方法不同，使用 **PasteSpecial** 方法您可以控制粘贴的信息的格式，并且可以建立指向源文件（例如，ET 工作表）的链接（可选）。如果您不希望替换指定所选内容，请在使用此方法之前使用 **[Collapse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Collapse)** 方法。使用此方法时，所选内容不会扩展以包含“剪贴板”中的内容。



## 示例


```JavaScript
/*本示例在插入点将“剪贴板”中的内容作为无格式文本插入。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.PasteSpecial(null, null, null, null, wdPasteText)
}
```


```JavaScript
/*本示例将活动文档第一个形状复制，并插入到第二个段落的起始位置。*/
function test() {
    ActiveDocument.Shapes.Item(1).Select()
    Selection.Copy()
    ActiveDocument.Paragraphs.Item(2).Range.Select()
    Selection.Collapse(wdCollapseStart)
    Selection.PasteSpecial(null, false, null, false, wdPasteShape)
}
```
