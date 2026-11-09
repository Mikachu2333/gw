# Document.PrintOut

打印指定文档的全部或部分内容。



## 语法

express.**PrintOut(Background, Append, Range, OutputFileName, From, To, Item, Copies, Pages, PageType, PrintToFile, Collate, ActivePrinterMacGX, ManualDuplexPrint, PrintZoomColumn, PrintZoomRow, PrintZoomPaperWidth, PrintZoomPaperHeight)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Background | 可选 | any | 如果将该属性设置为 **True** ，则 WPS 在打印文档时继续运行宏。 |
| Append | 可选 | any | 如果将该属性设置为 **True** ，则将指定文档附加到 _OutputFileName_ 参数所指定的文件名。如果将该属性设置为 **False** ，则覆盖 OutputFileName 参数所指定文件的内容。 |
| Range | 可选 | any | 页面范围。可以是任意 **WdPrintOutRange** 常量。 |
| OutputFileName | 可选 | any | 如果 _PrintToFile_ 为 **True** ，则该参数指定输出文件的路径和文件名。 |
| From | 可选 | any | 如果将 _Range_ 设置为 **wdPrintFromTo** ，则该参数指定起始页码。 |
| To | 可选 | any | 如果将 _Range_ 设置为 **wdPrintFromTo** ，则该参数指定结束页码。 |
| Item | 可选 | any | 要打印的项目。可以是任意 **WdPrintOutItem** 常量。 |
| Copies | 可选 | any | 要打印的份数。 |
| Pages | 可选 | any | 要打印的页码和页码范围，中间用逗号分开。例如，“2, 6-10”表示打印第 2 页以及第 6 至第 10 页。 |
| PageType | 可选 | any | 要打印的页面类型。可以是任意 **WdPrintOutPages** 常量。 |
| PrintToFile | 可选 | any | 如果该属性值为 **True** ，则将打印指令发送到文件。请确保使用 OutputFileName 指定文件名。 |
| Collate | 可选 | any | 在打印文档的多份副本时，如果该属性值为 **True** ，则完成打印所有页面后再打印下一份副本。 |
| ActivePrinterMacGX | 可选 | any | 该参数仅适用于 Mac 版本。 |
| ManualDuplexPrint | 可选 | any | 如果该属性值为 **True** ，则在无双面打印组件的打印机上打印双面文档。如果该属性值为 **True** ，则忽略 PrintBackground 和 PrintReverse 属性。使用 PrintOddPagesInAscendingOrder 和 PrintEvenPagesInAscendingOrder 属性可在手动双面打印时控制输出。由于选择或安装的语言支持（如美国英语）不同，该参数可能不可用。 |
| PrintZoomColumn | 可选 | any | 表示 WPS 在一页纸上水平放置的页数。可以是 1、2、3 或 4 页。与 _PrintZoomRow_ 参数一同使用可在单张纸上打印多页文档。 |
| PrintZoomRow | 可选 | any | 表示 WPS 在一页纸上垂直放置的页数。可以是 1、2 或 4 页。与 _PrintZoomColumn_ 参数一同使用可在单张纸上打印多页文档。 |
| PrintZoomPaperWidth | 可选 | any | WPS 将打印页面缩放到的宽度，以缇为单位（20 缇 = 1 磅；72 磅 = 1 英寸）。 |
| PrintZoomPaperHeight | 可选 | any | WPS 将打印页面缩放到的高度，以缇为单位（20 缇 = 1 磅；72 磅 = 1 英寸）。 |

## 返回值

void

## 示例


```JavaScript
/*本示例打印活动文档的当前页面。*/
function test() {
    Application.ActiveDocument.PrintOut(null, null, wdPrintCurrentPage)
}
```


```JavaScript
/*本示例打印活动文档的前三页。*/
function test() {
    ActiveDocument.PrintOut(null, null, wdPrintFromTo, null, 1, 3)
}
```


```JavaScript
/*本示例打印活动文档中的备注。*/
function test() {
    if (ActiveDocument.Comments.Count >= 1) {
        ActiveDocument.PrintOut(null, null, null, null, null, null, wdPrintComments)
    }
}
```


```JavaScript
/*本示例将打印活动文档，每张纸上打印六页文档。*/
function test() {
    ActiveDocument.PrintOut(null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 2)
}
```


```JavaScript
/*本示例按实际尺寸的 75% 打印活动文档。*/
function test() {
    ActiveDocument.PrintOut(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.75 * (8.5 * 1440), 0.75 * (11 * 1440))
}
```
