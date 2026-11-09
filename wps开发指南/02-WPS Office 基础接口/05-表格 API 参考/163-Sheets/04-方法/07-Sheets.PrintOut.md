# Sheets.PrintOut

打印对象。返回Variant值



## 语法

express.**PrintOut(From, To, Copies, Preview, ActivePrinter, PrintToFile, Collate, PrToFileName, IgnorePrintAreas)**

express   一个代表 **Sheets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| From | 可选 | any | 打印的开始页号。如果省略此参数，则从起始位置开始打印。 |
| To | 可选 | any | 打印的终止页号。如果省略此参数，则打印至最后一页。 |
| Copies | 可选 | any | 打印份数。如果省略此参数，则只打印一份。 |
| Preview | 可选 | any | 如果为 True，ET 将在打印对象之前调用打印预览。如果为 False（或省略该参数），则立即打印对象。 |
| ActivePrinter | 可选 | any | 设置活动打印机的名称。 |
| PrintToFile | 可选 | any | 如果为 True，则打印到文件。如果没有指定 PrToFileName，ET 将提示用户输入要使用的输出文件的文件名。 |
| Collate | 可选 | any | 如果为 True，则逐份打印多个副本。 |
| PrToFileName | 可选 | any | 如果 PrintToFile 设为 True，则该参数指定要打印到的文件名。 |
| IgnorePrintAreas | 可选 | any | 如果为 True，则忽略打印区域并打印整个对象。 |

## 返回值

Variant

## 说明


*From* 和 *To* 所描述的“页”指的是要打印的页，并非指定工作表或工作簿中的全部页。



## 示例


```JavaScript
/*此示例打印活动工作簿中的所有工作表。*/
function test() {
    Application.ActiveWorkbook.Sheets.PrintOut()
}
```


```JavaScript
/*此示例将名为“Sheet1”的工作表从第 2 页打印到第 3 页，打印5份。*/
function test() {
    let names = ["Sheet1"]
    Sheets.Item(names).PrintOut(2, 3, 5, true)
}
```
