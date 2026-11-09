# Range.Consolidate

将多个工作表中多个区域的数据合并计算至单个工作表上的单个区域。 **Variant** 类型。



## 语法

express.**Consolidate(Sources, Function, TopRow, LeftColumn, CreateLinks)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Sources | 可选 | any | 以文本引用字符串数组的形式给出合并计算的源，该数组采用 R1C1-样式表示法。这些引用必须包含将要合并计算的工作表的完整路径。 |
| Function | 可选 | any | **[XlConsolidationFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlConsolidationFunction)** 常量之一，用于指定合并计算的类型。 |
| TopRow | 可选 | any | 如果为 **True** ，则基于合并计算区域中首行内的列标题对数据进行合并。如果为 **False** ，则按位置进行合并计算。默认值为 **False** 。 |
| LeftColumn | 可选 | any | 如果为 **True** 则基于合并计算区域中左列内的行标题对数据进行合并计算。如果为 **False** ，则按位置进行合并计算。默认值为 **False** 。 |
| CreateLinks | 可选 | any | 如果为 **True** ，则让合并计算使用工作表链接。如果为 **False** ，则让合并计算复制数据。默认值为 **False** 。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例使用 SUM 函数对工作表 Sheet2 和工作表 Sheet3 的数据进行合并计算，将结果放到工作表 Sheet1 中。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1").Consolidate(["Sheet2!R1C1:R37C6", "Sheet3!R1C1:R37C6"], xlSum)
}
```


```JavaScript
/*本示例使用 Max 函数求出工作表 Sheet2 和工作表 Sheet3 的数据中的最大值，将结果放到工作表 Sheet1 中。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1").Consolidate(["Sheet2!R1C1:R5C3", "Sheet3!R1C1:R5C3"], xlMax)
}
```
