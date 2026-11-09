# Range.DataSeries

在指定区域内创建数据系列。 **Variant** 类型。



## 语法

express.**DataSeries(Rowcol, Type, Date, Step, Stop, Trend)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Rowcol | 可选 | any | 可以是 **xlRows** 或 **xlColumns** 常量，分别表示按行或列输入数据系列。如果省略本参数，则使用区域的大小和形状。 |
| Type | 可选 | XlDataSeriesType | 数据序列的类型。 |
| Date | 可选 | XlDataSeriesDate | 如果 _Type_ 参数为 **xlChronological** ，则 _Date_ 参数指示单步执行日期单位。 |
| Step | 可选 | any | 系列的步长值。默认值为 1。 |
| Stop | 可选 | any | 系列的终止值。如果省略本参数，ET 将填满整个区域。 |
| Trend | 可选 | any | 如果为 **True** ，则创建一个线性趋势或增长趋势。如果为 **False** ，则创建一个标准数据序列。默认值为 **False** 。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例在工作表 Sheet1 上的单元格区域 A1:A12 中创建包含 12 个日期的数据系列。该系列包含 1996 年中每个月份的最后一天。*/
function test() {
    let dateRange = Worksheets.Item("Sheet1").Range("A1:A12")
    Worksheets.Item("Sheet1").Range("A1").Formula = "31-JAN-1996"
    dateRange.DataSeries(undefined, xlChronological, xlMonth)
}
```


```JavaScript
/*本示例将 A1 单元格的值设置为 100.6，对 A1:H5 单元格区域进行步长为 20，终止值为 180 的按行填充*/
function test() {
    Range("A1").Value2 = 100.6
    Range("A1:H5").DataSeries(xlRows, xlDataSeriesLinear, null, 20, 180)
}
```
