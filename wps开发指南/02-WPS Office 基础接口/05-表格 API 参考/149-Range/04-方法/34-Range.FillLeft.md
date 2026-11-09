# Range.FillLeft

从指定区域的最右边单元格开始向左填充。区域中最右列单元格的内容和格式将复制到区域中其他列内。



## 语法

express.**FillLeft()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例基于工作表 Sheet1 上单元格 M1 的内容，填充单元格区域 A1:M1。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1:M1").FillLeft()
}
```


```JavaScript
/*本示例将 M1:M2 单元格区域的值设置为 2，字体加粗，将 A1:M2 单元格区域根据最右侧单元格向左填充*/
function test() {
    Range("M1:M2").Value2 = 2
    Range("M2").Font.Bold = true
    Range("A1:M2").FillLeft()
}
```
