# Selection.InsertFormula

在所选内容插入包含公式的 = (Formula) 域。



## 语法

express.**InsertFormula(Formula, NumberFormat)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Formula | 可选 | any | 希望 = (Formula) 域求值的数学公式。可以使用与电子表格类似的方式引用表格中的单元格。例如，“=SUM(A4:C4)”指定第四行中的前三个值。有关 = (Formula) 域的详细内容，请参阅域代码：= (Formula) 域。 |
| NumberFormat | 可选 | any | = (Formula) 域的结果的格式。有关可应用的格式类型的信息，请参阅“数字图片 (\#)”域开关。 |

## 返回值

void

## 说明


如果所选内容未折叠，则该公式将替换所选内容。  

如果正在使用电子表格应用程序（如 ET），那么在文档中嵌入全部或部分工作表比在表格中使用 = (Formula) 域更简单易行。

只有当所选内容在一个单元格中，并且插入点所在的单元格的上方或左边至少有一个包含值的单元格时，*Formula* 参数才是可选的。如果插入点上方的单元格包含值，则插入域 {=SUM(ABOVE)}。如果插入点左边的单元格包含值，则插入域 {=SUM(LEFT)}。如果插入点上方和左边的单元格都含有值，则 WPS 使用下面的规则确定插入何种 SUM 函数：

* 如果紧邻插入点上面的单元格中含有数值，则 WPS 插入 {=SUM(ABOVE)}。
* 如果紧邻插入点上方的单元格不包含值，但紧邻插入点左边的单元格包含值，则 WPS 插入 {=SUM(LEFT)}。
* 如果紧邻插入点上方的单元格和下方的单元格都不包含值，则 WPS 插入 {=SUM(ABOVE)}。
* 如果没有指定 **Formula** ，并且插入点上方和左边的所有单元格都是空的，则使用 = (Formula) 会发生错误。



## 示例


```JavaScript
/*本示例在活动文档的开始处创建一个三行三列的表格，然后计算第一列中所有数值的平均值。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    let table = ActiveDocument.Tables.Add(range, 3, 3)
    table.Cell(1, 1).Range.InsertAfter("100")
    table.Cell(2, 1).Range.InsertAfter("50")
    table.Cell(3, 1).Select()
    Selection.InsertFormula("=Average(Above)")
}
```


```JavaScript
/*本示例插入一个公式域，该域值是从名为“GrossSales”的书签表示的值中减去一个值，结果用美元符号表示。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.InsertFormula("=GrossSales-45000.00", "\"$#,##0.00\"")
}
```
