# Range.Replace

返回 **Boolean** ，它表示指定区域内单元格中的字符。使用此方法并不会更改选定区域或活动单元格。



## 语法

express.**Replace(What, Replacement, LookAt, SearchOrder, MatchCase, MatchByte, SearchFormat, ReplaceFormat)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| What | 必选 | any | ET 要搜索的字符串。 |
| Replacement | 必选 | any | 替换字符串。 |
| LookAt | 可选 | any | 可为以下 **[XlLookAt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLookAt)** 常量之一： **xlWhole** 或 **xlPart** 。 |
| SearchOrder | 可选 | any | 可为以下 **[XlSearchOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSearchOrder)** 常量之一： **xlByRows** 或 **xlByColumns** 。 |
| MatchCase | 可选 | any | 如果为 **True** ，则搜索区分大小写。 |
| MatchByte | 可选 | any | 只有在 ET 中选择或安装了双字节语言时，才能使用此参数。如果为 **True** ，则双字节字符只与双字节字符匹配。如果为 **False** ，则双字节字符可与其对等的单字节字符匹配。 |
| SearchFormat | 可选 | any | 该方法的搜索格式。 |
| ReplaceFormat | 可选 | any | 该方法的替换格式。 |

## 返回值

Boolean

## 说明


每次使用此方法后，参数 _LookAt_、_SearchOrder_、_MatchCase_ 和 _MatchByte_ 的设置都将被保存。如果下次调用此方法时不指定这些参数的值，就使用保存的值。设置这些参数将更改 **“查找”** 对话框中的设置，如果省略这些参数，更改 **“查找”** 对话框中的设置将更改使用的保存值。要避免出现这一问题，每次使用此方法时请明确设置这些参数。



## 示例


```JavaScript
/*本示例将每个“SIN”三角函数都替换为“COS”函数。替换所进行的区域为工作表 Sheet1 中的 A 列。*/
function test() {
    Worksheets.Item("Sheet1").Columns.Item("A").Replace("SIN", "COS", undefined, xlByColumns, true)
}
```


```JavaScript
/*本示例将 C3 单元格的值设置为 testC3，然后将 C3 单元格中的 test 替换为 range*/
function test() {
    Range("C3").Value2 = "testC3"
    Range("C3").Replace("test", "range")
}
```
