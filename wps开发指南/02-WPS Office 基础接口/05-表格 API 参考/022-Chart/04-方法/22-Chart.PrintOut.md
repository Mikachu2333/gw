# Chart.PrintOut

打印对象。



## 语法

express.**PrintOut(From, To, Copies, Preview, ActivePrinter, PrintToFile, Collate, PrToFileName)**

express   一个代表 **Chart** 对象的变量。

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

## 返回值

void

## 说明


*From* 和 *To* 所描述的“页”指的是要打印的页，并非指定工作表或工作簿中的全部页。



## 示例


```JavaScript
/*此示例打印当前活动工作表。*/
function test() {
    Application.ActiveSheet.PrintOut()
}
```


```JavaScript
/*此示例将图表工作表 Chart1 的页面方向设置为横向，然后打印两份并在打印前调用打印预览。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.PageSetup.Orientation = xlLandscape
    chart.PrintOut(null, null, 2, true)
}
```
