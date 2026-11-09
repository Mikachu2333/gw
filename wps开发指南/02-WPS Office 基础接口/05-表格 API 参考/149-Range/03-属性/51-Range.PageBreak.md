# Range.PageBreak

返回或设置分页符的位置。可为以下 **[XlPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreak)** 常量之一： **xlPageBreakAutomatic** 、 **xlPageBreakManual** 或 **xlPageBreakNone** 。 **Long** 类型，可读写。



## 语法

express.**PageBreak**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


本属性既可返回自动分页符的位置，也可返回手动分页符的位置，但本属性仅可设置手动分页符的位置（仅可设为 **xlPageBreakManual** 或 **xlPageBreakNone** ）。

要清除工作表的所有手动分页符，请将 `Cells.PageBreak` 设置为 **xlPageBreakNone** 。



## 示例


```JavaScript
/*本示例在 Sheet1 的第 25 行后设置一个手动分页符。*/
function test() {
    Worksheets.Item("Sheet1").Rows.Item(25).PageBreak = xlPageBreakManual
}
```


```JavaScript
/*本示例在工作表 Sheet1 的 J 列左侧设置一个手动分页符。*/
function test() {
    Worksheets.Item("Sheet1").Columns.Item("J").PageBreak = xlPageBreakManual
}
```


```JavaScript
/*本示例删除前两个示例所设置的分页符。*/
function test() {
    Worksheets.Item("Sheet1").Rows.Item(25).PageBreak = xlPageBreakNone
    Worksheets.Item("Sheet1").Columns.Item("J").PageBreak = xlPageBreakNone
}
```
