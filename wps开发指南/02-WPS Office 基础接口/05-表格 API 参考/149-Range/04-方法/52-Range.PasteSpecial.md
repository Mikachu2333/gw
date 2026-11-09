# Range.PasteSpecial

将 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 从剪贴板粘贴到指定的区域中。



## 语法

express.**PasteSpecial(Paste, Operation, SkipBlanks, Transpose)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Paste | 可选 | XlPasteType | 要粘贴的区域部分。 |
| Operation | 可选 | XlPasteSpecialOperation | 粘贴操作。 |
| SkipBlanks | 可选 | any | 如果为 **True** ，则不将剪贴板上区域中的空白单元格粘贴到目标区域中。默认值为 **False** 。 |
| Transpose | 可选 | any | 如果为 **True** ，则在粘贴区域时转置行和列。默认值为 **False** 。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例用单元格 Sheet1 上单元格区域 C1:C5 和单元格区域 D1:D5 原有内容相加之和来替换单元格区域 D1:D5 中的数据。*/
function test() {
    Worksheets.Item("Sheet1").Range("C1:C5").Copy()
    Worksheets.Item("Sheet1").Range("D1:D5").PasteSpecial(undefined, xlPasteSpecialOperationAdd)
}
```


```JavaScript
/*本示例将 A3 单元格的值设置为 a3，添加批注 test，并复制；将已复制的内容粘贴到 C3 单元格中，仅粘贴批注；再复制 G1:G5 单元格区域，将非空白单元格粘贴至 A1:E1 单元格区域*/
function test() {
    Range("A3").Value2 = "a3"
    Range("A3").AddComment("test")
    Range("A3").Copy()
    Range("C3").PasteSpecial(xlPasteComments)
    Range("G1:G5").Copy()
    Range("A1").PasteSpecial(xlPasteAll, xlPasteSpecialOperationAdd, true, true)
}
```
