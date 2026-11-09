# Range.Clear

清除整个对象。

返回值为Variant类型。



## 语法

express.**Clear()**

express   一个代表 **Range** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例清除工作表 Sheet1 中 A1:G37 单元格区域的公式和格式设置。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:G37").Clear()
}
```


```JavaScript
/*此示例设置工作表 Sheet1 中 H2 单元格的值为 abc 并清除 H1 单元格所在列的内容。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("H2").Value2 = "abc"
    Application.Worksheets.Item("Sheet1").Range("H:H").Clear()
}
```
