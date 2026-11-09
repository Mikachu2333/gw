# Range.WrapText

返回或设置一个 **Variant** 值，它指明 ET 是否为对象中的文本自动换行。



## 语法

express.**WrapText**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


如果指定区域内所有单元格中的文本都自动换行，此属性将返回 **True** ；如果指定区域内所有单元格中的文本都不自动换行，则返回 **False** ；如果指定区域内有些单元格中的文本自动换行，而另一些单元格中的文本不自动换行，则返回 **Null** 。

ET 会在必要的时候改变区域的行高以容纳其中的文字。



## 示例


```JavaScript
/*此示例对 sheet1 中的单元格 B2 进行格式设置，使其中的文字自动换行。*/
function test() {
    Worksheets.Item("Sheet1").Range("B2").Value(undefined, "This text should wrap in a cell.")
    Worksheets.Item("Sheet1").Range("B2").WrapText = true
}
```


```JavaScript
/*本示例将 A1 单元格设置自动换行，并显示 A1:B1 单元格区域是否自动换行；然后设置 B1 单元格自动换行，再显示一次*/
function test() {
    Range("A1").WrapText = true
    alert(Range("A1:B1").WrapText)
    Range("B1").WrapText = true
    alert(Range("A1:B1").WrapText)
}
```
