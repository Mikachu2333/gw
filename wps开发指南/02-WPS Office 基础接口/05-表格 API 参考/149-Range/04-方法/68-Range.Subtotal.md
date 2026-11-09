# Range.Subtotal

创建指定区域或当前区域（如果该区域为单个单元格时）的分类汇总。



## 语法

express.**Subtotal(GroupBy, Function, TotalList, Replace, PageBreaks, SummaryBelowData)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| GroupBy | 必选 | number（int4 精度） | 要作为分组依据的字段，为基于 1 的整数偏移量。有关详细信息，请参阅示例。 |
| Function | 必选 | XlConsolidationFunction | 分类汇总函数。 |
| TotalList | 必选 | any | 基于 1 的字段偏移量数组，它指明将被分类汇总的字段。有关详细信息，请参阅示例。 |
| Replace | 可选 | any | 如果为 **True** ，则替换现有分类汇总。默认值为 **True** 。 |
| PageBreaks | 可选 | any | 如果为 **True** ，则在每一组之后添加分页符。默认值为 **False** 。 |
| SummaryBelowData | 可选 | XlSummaryRow | 放置相对于分类汇总的汇总数据。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例创建工作表 Sheet1 中选定区域的分类汇总。该分类汇总是以第一个字段进行分组的求和，汇总对象为第二和第三个字段。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    Selection.Subtotal(1, xlSum, [2, 3])
}
```


```JavaScript
/*本示例在 A1 单元格所在数据表中进行分类汇总，以第二字段进行分组和求平均值，汇总对象为第三字段，替换现有分类汇总，并在每一组之后添加分页符*/
function test() {
    Range("A1").Subtotal(2, xlAverage, [3], true, true)
}
```
