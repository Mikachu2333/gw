# Range.PasteSpecial

插入剪贴板中的内容。



## 语法

express.**PasteSpecial(IconIndex, Link, Placement, DisplayAsIcon, DataType, IconFileName, IconLabel)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| IconIndex | 可选 | any | 如果 _DisplayAsIcon_ 为 **True** ，则此参数是一个数字，该数字对应于要在程序文件中使用的由 _IconFilename_ 指定的图标。图标显示在 **“更改图标”** 对话框中：0（零）对应于第一个图标，1 对应于第二个图标，依此类推。如果省略该参数，则使用第一个（默认）图标。 |
| Link | 可选 | any | 如果该参数值为 **True** ，则创建指向“剪贴板”内容源文件的链接。默认值为 **False** 。 |
| Placement | 可选 | any | 可以是下列 **WdOLEPlacement** 常量之一： **wdFloatOverText** 或 **wdInLine** 。默认值为 **wdInLine** 。 |
| DisplayAsIcon | 可选 | any | 如果该参数值为 **True** ，则将链接显示为图标。默认值为 **False** 。 |
| DataType | 可选 | any | “剪贴板”中的内容在插入文档时采用的格式。可以是任意 **WdPasteDataType** 常量。 |
| IconFileName | 可选 | any | 如果 _DisplayAsIcon_ 为 **True** ，则此参数是存储要显示的图标的文件的路径和文件名。 |
| IconLabel | 可选 | any | 如果 _DisplayAsIcon_ 为 **True** ，则此参数是显示在图标下方的文本。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在插入点将剪贴板内容插入为无格式文本。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.Range.PasteSpecial(null, null, null, null, wdPasteText)
}
```


```JavaScript
/*本示例复制选定文本，并将它作为超链接粘贴到新文档中。必须先保存源文档，然后此示例才能正常运行。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.Copy()
        Documents.Add().Content.PasteSpecial(null, true, null, null, wdPasteHyperlink)
    }
}
```
