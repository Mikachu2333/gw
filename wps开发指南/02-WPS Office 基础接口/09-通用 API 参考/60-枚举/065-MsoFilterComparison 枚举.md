# MsoFilterComparison 枚举

指定如何比较 **ODSOFilter** 对象的 **Column** 和 **CompareTo** 属性。

| 名称                                      | 值 | 说明                                              |
| --------------------------------------- | - | ----------------------------------------------- |
| **msoFilterComparisonContains**         | 8 | 如果 CompareTo 字符串的任意部分包含在列值中，则列与 CompareTo 匹配。   |
| **msoFilterComparisonEqual**            | 0 | 如果 CompareTo 值与列值相同，则列与 CompareTo 匹配。           |
| **msoFilterComparisonGreaterThan**      | 3 | 如果列值大于 CompareTo 值，则列与 CompareTo 匹配。            |
| **msoFilterComparisonGreaterThanEqual** | 5 | 如果列值大于或等于 CompareTo 值，则列与 CompareTo 匹配。         |
| **msoFilterComparisonIsBlank**          | 6 | 如果列为空，则列通过筛选。                                   |
| **msoFilterComparisonIsNotBlank**       | 7 | 如果列为空，则列通过筛选。                                   |
| **msoFilterComparisonLessThan**         | 2 | 如果列值小于 CompareTo 值，则列与 CompareTo 匹配。            |
| **msoFilterComparisonLessThanEqual**    | 4 | 如果列值小于或等于 CompareTo 值，则列与 CompareTo 匹配。         |
| **msoFilterComparisonNotContains**      | 9 | 如果 CompareTo 字符串的任何部分都未包含在列值中，则列与 CompareTo 匹配。 |
| **msoFilterComparisonNotEqual**         | 1 | 如果 CompareTo 值不等于列值，则列与 CompareTo 匹配。           |
