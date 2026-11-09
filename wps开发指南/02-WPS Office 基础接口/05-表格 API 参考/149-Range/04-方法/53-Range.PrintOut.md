# Range.PrintOut

打印对象。



## 语法

express.**PrintOut(From, To, Copies, Preview, ActivePrinter, PrintToFile, Collate, PrToFileName)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| From | 可选 | any | 打印的开始页号。如果省略此参数，则从起始位置开始打印。 |
| To | 可选 | any | 打印的终止页号。如果省略此参数，则打印至最后一页。 |
| Copies | 可选 | any | 打印份数。如果省略此参数，则只打印一份。 |
| Preview | 可选 | any | 如果为 **True** ，ET 将在打印对象之前调用打印预览。如果为 **False** （或省略该参数），则立即打印对象。 |
| ActivePrinter | 可选 | any | 设置活动打印机的名称。 |
| PrintToFile | 可选 | any | 如果为 **True** ，则打印到文件。如果没有指定 _PrToFileName_，ET 将提示用户输入要使用的输出文件的文件名。 |
| Collate | 可选 | any | 如果为 **True** ，则逐份打印多个副本。 |
| PrToFileName | 可选 | any | 如果 _PrintToFile_ 设为 **True** ，则该参数指定要打印到的文件名。 |

## 返回值

Variant

## 说明


_From_ 和 _To_ 所描述的“页”指的是要打印的页，并非指定工作表或工作簿中的全部页。



## 示例


```JavaScript
/*此示例打印当前活动工作表。*/
function test() {
    ActiveSheet.PrintOut()
}
```


```JavaScript
/*本示例将 A1:Y980 单元格区域的第二页至第四页打印 2 份，打印前先打开预览界面*/
function test() {
    Range("A1:Y980").PrintOut(2, 4, 2, true)
}
```
