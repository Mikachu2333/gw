# Worksheet.PasteSpecial

以指定格式将剪贴板中的内容粘贴到工作表上。可用本方法从其他应用程序中粘贴数据，或以特定格式粘贴数据。



## 语法

express.**PasteSpecial(Format, Link, DisplayAsIcon, IconFileName, IconIndex, IconLabel, NoHTMLFormatting)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Format | 可选 | any | 指定数据的剪贴板格式的字符串。 |
| Link | 可选 | any | 如果为 **True** ，则链接到被粘贴数据的源。如果源数据不适于链接，或源应用程序不支持链接，将忽略此参数。默认值是 **False** 。 |
| DisplayAsIcon | 可选 | any | 如果为 **True** ，则将粘贴内容显示为图标。默认值是 **False** 。 |
| IconFileName | 可选 | any | 如果 _DisplayAsIcon_ 为 **True** ，则指定包含所用图标的文件名。 |
| IconIndex | 可选 | any | 图标文件内的图标索引号。 |
| IconLabel | 可选 | any | 图标的文本标签。 |
| NoHTMLFormatting | 可选 | any | 如果为 **True** ，则从 HTML 中删除所有的格式设置、超链接和图像。如果为 **False** ，则完整粘贴 HTML。默认值是 **False** 。 |

## 返回值

void

## 说明


仅当 _Format_ \=“HTML”时，_NoHTMLFormatting_ 才起作用，所有其他情况下将忽略 _NoHTMLFormatting_。

必须在使用本方法之前选定目标区域。

该方法可能会修改工作表的选定区域，这取决于剪贴板中的内容。



## 示例


```JavaScript
/*此示例将剪贴板中的“WPS文字 文件 对象”粘贴到工作表 Sheet1 上的单元格 D1 中。*/
function test() {
    Worksheets.Item("Sheet1").Range("D1").Select()
    Application.ActiveSheet.PasteSpecial("WPS文字 文件 对象")
}
```


```JavaScript
/*此示例在工作表 Sheet1 复制单元格A1中的图片对象粘贴到单元格 F1 中。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1").Copy()
    Worksheets.Item("Sheet1").Range("F1").Select()
    ActiveSheet.PasteSpecial(0)
}
```
