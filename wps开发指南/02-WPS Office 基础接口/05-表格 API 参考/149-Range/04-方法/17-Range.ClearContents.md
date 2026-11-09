# Range.ClearContents

清除区域中的公式。

返回值类型为Variant。



## 语法

express.**ClearContents()**

express   一个代表 **Range** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例清除工作表 Sheet1 上 A1:G37 单元格区域的公式，但保留其格式设置。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:G37").ClearContents()
}
```


```JavaScript
/*本示例将 A1 单元格的字体加粗，然后使用 ClearContents 清除 A1 单元格内容*/
function test() {
    Range("A1").Font.Bold = true
    Range("A1").ClearContents()
}
```
