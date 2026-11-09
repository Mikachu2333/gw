# Chart.Paste

将剪贴板中的图表数据粘贴到指定的图表中。



## 语法

express.**Paste(Type)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 指定要粘贴的图表信息（如果剪贴板中有一个图表）。可以为以下 XlPasteType 常量之一：xlPasteFormats、xlPasteFormulas 或 xlPasteAll。默认值为 xlPasteAll。如果剪贴板上的数据不是图表数据，则不能使用该参数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将工作表 Sheet1 上单元格区域 B1:B5 中的数据粘贴到 Chart1 中。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("B1:B5").Copy()
    Application.Charts.Item("Chart1").Paste()
}
```


```JavaScript
/*本示例假定用户已选中图表并复制，并将该图表粘贴到工作表Sheet1上的第一个内嵌图表中。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.Paste(xlPasteAll)
}
```
