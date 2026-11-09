# Sheets.FillAcrossSheets

将单元格区域复制到集合中所有其他工作表的同一位置。



## 语法

express.**FillAcrossSheets(Range, Type)**

express   一个代表 **Sheets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 要填充到集合中所有工作表上的单元格区域。该区域必须来自集合中的某个工作表。 |
| Type | 可选 | XlFillWith | 指定如何复制区域。 |

## 返回值

void

## 示例


```JavaScript
/*本示例用工作表 Sheet1 上 A1:C5 单元格区域的内容填充工作表 Sheet5 和 Sheet7 上的相同区域。*/
function test() {
    let names = ["Sheet1", "Sheet5", "Sheet7"]
    Application.Sheets.Item(names).FillAcrossSheets(Application.Worksheets.Item("Sheet1").Range("A1:C5"))
}
```


```JavaScript
/*本示例用工作表 Sheet2 上 A1:B2 单元格区域的内容及格式填充工作表 Sheet3 和 Sheet4 上的相同区域。*/
function test() {
    let names = ["Sheet2", "Sheet3", "Sheet4"]
    Application.Sheets.Item(names).FillAcrossSheets(Application.Worksheets.Item("Sheet2").Range("A1:B2"), xlFillWithAll)
}
```
