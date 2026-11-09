# Range.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例清除工作表 Sheet1 上 A1:G37 单元格区域的所有格式设置。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:G37").ClearFormats()
}
```


```JavaScript
/*此示例清除工作表 Sheet1 上第一个嵌入式图表的格式设置。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects.Item(1).Chart.ChartArea.ClearFormats()
}
```
