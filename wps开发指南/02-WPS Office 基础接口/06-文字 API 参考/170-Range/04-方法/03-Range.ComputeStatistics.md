# Range.ComputeStatistics

返回一个 **Long** 类型的值，该值代表基于指定范围内容的统计值。



## 语法

express.**ComputeStatistics(Statistic)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Statistic | 必选 | WdStatistic | 要计算的统计值的类型。 |

## 返回值

number（int4 精度）

## 说明


由于您选择或安装的语言支持不同（例如美国英语），部分常量可能无法使用。



## 示例


```JavaScript
/*本示例显示第一个文档上第一个表格的第一个单元格包含的行数。*/
function test() {
    let range = Documents.Item(1).Tables.Item(1).Cell(1, 1).Range
    let lineCount = range.ComputeStatistics(wdStatisticLines)
    alert(`The first cell contains ${lineCount} lines.`)
}
```


```JavaScript
/*本示例显示第一个文档的第一段中的字数和字符数。*/
function test() {
    let range = Documents.Item(1).Paragraphs.Item(1).Range
    let wordCount = range.ComputeStatistics(wdStatisticWords)
    let characterCount = range.ComputeStatistics(wdStatisticCharacters)
    alert(`The first paragraph contains ${wordCount} words and a total of ${characterCount} characters.`)
}
```
