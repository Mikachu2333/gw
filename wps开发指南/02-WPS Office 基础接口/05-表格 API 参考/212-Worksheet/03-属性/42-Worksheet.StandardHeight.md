# Worksheet.StandardHeight

以磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位返回工作表中所有行的标准高度（默认值）。 **Double** 类型，只读。



## 语法

express.**StandardHeight**

express   一个代表 **Worksheet** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中的首行的行高设置为标准行高。*/
function test() {
    Worksheets.Item("Sheet1").Rows.Item(1).RowHeight = Worksheets.Item("Sheet1").StandardHeight
}
```


```JavaScript
/*本示例显示活动工作表上所有行的标准 (默认) 高度（以 磅为单位）。*/
function test() {
    alert(Application.ActiveSheet.StandardHeight)
}
```
