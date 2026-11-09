# View.PasteSpecial

将剪贴板上的当前内容粘贴到 **View** 对象代表的视图中。



## 语法

express.**PasteSpecial(DataType, DisplayAsIcon, IconFileName, IconIndex, IconLabel, Link)**

express   一个代表 **View** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DataType | 可选 | PpPasteDataType | 将剪贴板内容插入到文档中所使用的格式。默认值根据剪贴板上内容的不同而不同。如果剪贴板内容不支持 _DataType_ 参数中的指定数据类型，则会产生错误。 |
| DisplayAsIcon | 可选 | MsoTriState | 如果为 **msoTrue** 则将嵌入的对象（或链接）显示为图标。 |
| IconFileName | 可选 | string | 如果 _DisplayAsIcon_ 设置为 **msoTrue** ，则此参数为存储显示图标的文件的路径和文件名。如果 _DisplayAsIcon_ 设置为 **msoFalse** ，则忽略此参数。 |
| IconIndex | 可选 | number（int 精度） | 如果 _DisplayAsIcon_ 设置为 **msoTrue** ，则此参数是一个数字，它对应于要在 _IconFilename_ 指定的程序文件中使用的图标。图标显示在 **“更改图标”** 对话框中，可从 **“插入”** 选项卡（单击 **“对象”** ，选择 **“显示为图标”** ，单击 **“更改图标”** ）进行访问：0（零）对应于第一个图标，1 对应于第二个图标，依此类推。如果省略此参数，则使用第一个（默认）图标。如果 _DisplayAsIcon_ 设置为 **msoFalse** ，则忽略此参数。如果 _IconIndex_ 不在有效范围内，则使用默认图标（索引为 0）。 |
| IconLabel | 可选 | string | 如果 _DisplayAsIcon_ 设置为 **msoTrue** ，则此参数为出现在图标之下的文本。如果缺少此标签，WPP 将根据剪贴板内容生成一个图标标签。如果 _DisplayAsIcon_ 设置为 **msoFalse** ，则忽略此参数。 |
| Link | 可选 | MsoTriState | 决定是否创建指向剪贴板内容的源文件的链接。如果剪贴板内容不支持链接，则会产生错误。 |

## 返回值

void

## 说明


调用 **PasteSpecial** 方法时，如果剪贴板上没有数据，将会产生错误。

 **PasteSpecial** 方法的有效视图与 **Paste** 方法的有效视图相同。如果无法将数据类型粘贴到视图中（例如，试图将图片粘贴到 **“幻灯片浏览视图”** 中），则会出现错误。

_DataType_ 参数可以是下列 **PpPasteDataType** 常量之一：

| 常量 |
| --------------------------- |
| **ppPasteBitmap**           |
| **ppPasteDefault** 默认值      |
| **ppPasteEnhancedMetafile** |
| **ppPasteGIF**              |
| **ppPasteHTML**             |
| **ppPasteJPG**              |
| **ppPasteMetafilePicture**  |
| **ppPasteOLEObject**        |
| **ppPastePNG**              |
| **ppPasteRTF**              |
| **ppPasteShape**            |
| **ppPasteText**             |

_DisplayAsIcon_ 参数可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --------------- | ------------------ |
| **msoFalse** | 默认值。不将嵌入的对象（或链接）显示为图标。 |
| **msoTrue** | 将嵌入的对象（或链接）显示为图标。       |

_Link_ 参数可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --------------- | ---------------- |
| **msoFalse** | 默认值。不创建指向剪贴板内容的源文件的链接。 |
| **msoTrue** | 创建指向剪贴板内容的源文件的链接。       |

如果未完全下载源内容，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例将一个位图图像以图标形式粘贴到另一窗口中。该示例假设有两个打开的窗口，当前选中的是第一个窗口中的位图图像。*/
function test() {
    Windows.Item(1).Selection.Copy()
    Windows.Item(2).View.PasteSpecial(ppPasteBitmap, msoTrue, null, null, "New Bitmap Image")
}
```


```JavaScript
/*本示例将第一篇演示文稿的第一张幻灯片以图标形式的OLE对象粘贴到活动窗口中，并设置要显示的图标。*/
function test() {
    Presentations.Item(1).Slides.Item(1).Copy()
    ActiveWindow.View.PasteSpecial(ppPasteOLEObject, msoTrue, "D:\\TestFile\\icon.dll", 2, "OLE Object")
}
```
