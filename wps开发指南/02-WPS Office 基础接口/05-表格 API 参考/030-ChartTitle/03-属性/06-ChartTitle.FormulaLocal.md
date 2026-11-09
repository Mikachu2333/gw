# ChartTitle.FormulaLocal

获取或设置一个 **String** 值，该值以用户的语言使用 A1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**FormulaLocal**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置工作表 Sheet1 上图表 Chart 2 的标题为工作表 Sheet1 中 C6 单元格的内容。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects("Chart 2").Chart.ChartTitle
    charttitle.FormulaLocal = "=Sheet1!$C$6"
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上第一张图表的标题为工作表 Sheet1 中 A10 单元格的内容。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartTitle
    charttitle.FormulaLocal = "=Sheet1!$A$10"
}
```
