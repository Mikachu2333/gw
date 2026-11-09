# Range.AutoFit

更改区域中的列宽或行高以达到最佳匹配。

返回值为Variant类型。



## 语法

express.**AutoFit()**

express   一个代表 **Range** 对象的变量。

## 返回值

any

## 说明


 **Range** 对象必须是行或行区域，或者列或列区域。否则，该方法将产生错误。

 一个列宽单位等于“常规”样式中一个字符的宽度。



## 示例


```JavaScript
/*本示例调整工作表 Sheet1 中从 A 到 I 的列，以获得最适当的列宽。*/
function test() {
    Application.Worksheets.Item("Sheet1").Columns.Item("A:I").AutoFit()
}
```


```JavaScript
/*本示例调整工作表 Sheet1 上从 A 到 E 的列，以获得最适当的列宽，但该调整仅依据单元格区域 A1:E1 中的内容进行。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:E1").Columns.AutoFit()
}
```


```JavaScript
/*本示例调整工作表 Sheet1 上从 1 到 3 的行，以获得最适当的行高，但该调整仅依据单元格区域 A1:A3 中的内容进行。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:A3").Rows.AutoFit()
}
```
