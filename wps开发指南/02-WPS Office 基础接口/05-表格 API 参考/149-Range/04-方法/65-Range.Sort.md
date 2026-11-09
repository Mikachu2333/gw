# Range.Sort

对值区域进行排序。



## 语法

express.**Sort(Key1, Order1, Key2, Type, Order2, Key3, Order3, Header, OrderCustom, MatchCase, Orientation, SortMethod, DataOption1, DataOption2, DataOption3)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Key1 | 可选 | any | 指定第一排序字段，作为区域名称（字符串）或 **Range** 对象；确定要排序的值。 |
| Order1 | 可选 | XlSortOrder | 确定 Key1 中指定的值的排序次序。 |
| Key2 | 可选 | any | 第二排序字段；对数据透视表进行排序时不能使用。 |
| Type | 可选 | any | 指定要排序的元素。 |
| Order2 | 可选 | XlSortOrder | 确定 Key2 中指定的值的排序次序。 |
| Key3 | 可选 | any | 第三排序字段；对数据透视表进行排序时不能使用。 |
| Order3 | 可选 | XlSortOrder | 确定 Key3 中指定的值的排序次序。 |
| Header | 可选 | XlYesNoGuess | 指定第一行是否包含标题信息。 **xlNo** 是默认值；如果希望由 ET 尝试确定标题，则指定 **xlGuess** 。 |
| OrderCustom | 可选 | any | 指定在自定义排序次序列表中的基于一的整数偏移。 |
| MatchCase | 可选 | any | 设置为 **True** ，则执行区分大小写的排序，设置为 **False** ，则执行不区分大小写的排序；不能用于数据透视表。 |
| Orientation | 可选 | XlSortOrientation | 指定是应按行（默认）还是按列进行排序。 将 xlSortColumns 值设置为 1 以按列排序。 将 xlSortRows 值设置为 2 以按行排序， (这是默认值) 。 |
| SortMethod | 可选 | XlSortMethod | 指定排序方法。 |
| DataOption1 | 可选 | XlSortDataOption | 指定 Key1 中所指定区域中的文本的排序方式；不应用于数据透视表排序。 |
| DataOption2 | 可选 | XlSortDataOption | 指定 Key2 中所指定区域中的文本的排序方式；不应用于数据透视表排序。 |
| DataOption3 | 可选 | XlSortDataOption | 指定 Key3 中所指定区域中的文本的排序方式；不应用于数据透视表排序。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例对 A1:B10 单元格区域根据 A1 所在列进行降序排序（区分大小写）*/
function test() {
    Range("A1:B10").Sort(Range("A1"), xlDescending, null, null, null, null, null, null, null, true)
}
```


```JavaScript
/*本示例以 A1 所在列为第一字段，降序；B1 所在列为第二字段，升序；自动判断是否包含标题，进行排序*/
function test() {
    Range("A1:B10").Sort(Range("A1"), xlDescending, Range("B1"), null, xlAscending, null, null, xlGuess)
}
```
