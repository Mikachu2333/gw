# Document.ComputeStatistics

返回基于指定文档内容的统计值。 **Long** 类型。



## 语法

express.**ComputeStatistics(Statistic, IncludeFootnotesAndEndnotes)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Statistic | 必选 | WdStatistic | 要计算的统计值。 |
| IncludeFootnotesAndEndnotes | 可选 | any | 如果为 **True** ，则统计时将包括脚注和尾注；如果省略该参数，则默认值为 **False** 。 |

## 返回值

number（int4 精度）

## 说明


由于您选择或安装的语言支持不同（例如美国英语），上述部分常量可能无法使用。



## 示例


```JavaScript
/*本示例显示活动文档的字数（包括脚注）。*/
function test() {
    alert(ActiveDocument.ComputeStatistics(wdStatisticWords, true) + " words")
}
```


```JavaScript
/*本示例显示第一个文档的段落数。*/
function test() {
    alert("文档的段落数为： " + Documents.Item(1).ComputeStatistics(wdStatisticParagraphs, false))
}
```
