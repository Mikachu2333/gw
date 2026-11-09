# TextRange.PasteSpecial

以指定格式用剪贴板的内容替换文本范围。



## 语法

express.**PasteSpecial(DataType, DisplayAsIcon, IconFileName, IconIndex, IconLabel, Link)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| DataType | 可选 | PpPasteDataType | 将剪贴板内容插入到文档中所使用的格式。默认值根据剪贴板上内容的不同而不同。如果剪贴板内容不支持 _DataType_ 参数中的指定数据类型，则会产生错误。 |
| DisplayAsIcon | 可选 | MsoTriState | 如果为 **msoTrue** 则将嵌入的对象（或链接）显示为图标。 |
| IconFileName | 可选 | string | 如果 _DisplayAsIcon_ 设置为 **msoTrue** ，则此参数为存储显示图标的文件的路径和文件名。如果 _DisplayAsIcon_ 设置为 **msoFalse** ，则忽略此参数。 |
| IconIndex | 可选 | number（int 精度） | 如果 _DisplayAsIcon_ 设置为 **msoTrue** ，则此参数是一个数字，它对应于要在 _IconFilename_ 指定的程序文件中使用的图标。0（零）对应于第一个图标，1 对应于第二个图标，依此类推。如果省略此参数，则使用第一个（默认）图标。如果 _DisplayAsIcon_ 设置为 **msoFalse** ，则忽略此参数。如果 _IconIndex_ 不在有效范围内，则使用默认图标（索引为 0）。 |
| IconLabel | 可选 | string | 如果 _DisplayAsIcon_ 设置为 **msoTrue** ，此参数为出现在该图标下的文本。如果缺少此标签，WPP 将根据剪贴板内容生成一个图标标签。如果 _DisplayAsIcon_ 设置为 **msoFalse** ，则忽略此参数。 |
| Link | 可选 | MsoTriState | 决定是否创建指向剪贴板内容的源文件的链接。如果剪贴板内容不支持链接，则会产生错误。 |

## 返回值

TextRange

## 说明


 **TextRange** 对象的有效数据类型为 **ppPasteText** 、 **ppPasteHTML** 和 **ppPasteRTF** 类型（任何其他格式都会产生错误）。如果粘贴成功，此方法将返回一个 **TextRange** 对象，该对象代表粘贴的文本范围。

_DataType_ 参数值可以是下列 **PpPasteDataType** 常量之一。

| 常量           | 说明                     |
| ---------|--------- |
| **ppPasteDefault** | 粘贴剪贴板的默认内容。 |
| **ppPasteHTML**    | 粘贴 HTML。 |
| **ppPasteRTF**     | 粘贴 RTF。 |
| **ppPasteText**    | 粘贴文本。 |

_DisplayAsIcon_ 参数值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                     |
| ------------ | ---------------------- |
| **msoFalse** | 默认值。不将嵌入的对象（或链接）显示为图标。 |
| **msoTrue**  | 将嵌入的对象（或链接）显示为图标。      |

调用 **PasteSpecial** 方法时，如果剪贴板上没有数据，将会产生错误。



## 示例


```JavaScript
/*本示例以指定格式用剪贴板的内容替换活动演示文稿中第一张幻灯片的第一个形状的文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.TextFrame.TextRange.PasteSpecial(ppPasteText)
}
```


```JavaScript
/*本示例以指定格式用剪贴板的内容替换第一篇演示文稿中第一张幻灯片的第二个形状的第二段的文本。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    let textRange = shapes.Item(2).TextFrame.TextRange.Paragraphs(2)
    textRange.PasteSpecial(ppPasteDefault)
}
```
