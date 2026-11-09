# Range.AutoOutline

自动为指定区域创建分级显示。如果区域为单个单元格，ET 将创建整个工作表的分级显示。新分级显示将取代所有的分级显示。



## 语法

express.**AutoOutline()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例创建工作表 Sheet1 上 A1 单元格所在区域的分级显示。该区域必须包含汇总行或汇总列。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1").AutoOutline()
}
```


```JavaScript
/*本示例选中 C1 单元格，并创建选中单元格所在区域的分级显示。*/
function test() {
    Range("C1").Select()
    Selection.AutoOutline()
}
```
