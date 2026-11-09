# ChartTitle.FormulaR1C1Local

获取或设置一个 **String** 值，该值以用户的语言使用 R1C1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**FormulaR1C1Local**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置工作表 Sheet1 上图表 Chart 1 的标题为该工作表中 C3 单元格的内容。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects("Chart 1").Chart.ChartTitle
    charttitle.FormulaR1C1Local = "='Sheet1'!R3C3"
}
```


```JavaScript
/*本示例设置工作表 Sheet1 中图表 Chart 2 的标题为该工作表中 A1 单元格的内容。*/
function test() {
    let charttitle = Application.Charts.Item("Sheet1").ChartObjects("Chart 2").Chart.ChartTitle
    charttitle.FormulaR1C1Local = "='Sheet1'!R1C1"
}
```
