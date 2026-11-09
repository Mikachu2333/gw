# Worksheet.Calculate

计算所有打开的工作簿、工作簿中的某张特定工作表或工作表指定区域中的单元格，如下表所示。



## 语法

express.**Calculate()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 说明


| 要计算      | 依照此示例                                |
| -------- | ------------------------------------ |
| 所有打开的工作簿 | Application.Calculate（或只是 Calculate） |
| 指定工作表    | Worksheets(1).Calculate              |
| 指定区域     | Worksheets(1).Rows(2).Calculate      |



## 示例


```JavaScript
/*此示例计算 Sheet1 上已用区域中 A 列、B 列和 C 列的公式。*/
function test() {
    Worksheets.Item("Sheet1").UsedRange.Columns("A:C").Calculate()
}
```


```JavaScript
/*本示例计算所有工作表。*/
function test() {
    for (let i = 1; i <= Worksheets.Count; i++) {
        Worksheets.Item(i).Calculate()
    }
}
```
