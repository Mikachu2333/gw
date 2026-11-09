# Worksheet.ConsolidationOptions

返回表示合并计算选项的三元素数组，如下表所示。某元素为 **True** 就表示设置了该选项。 **Variant** 类型，只读。



## 语法

express.**ConsolidationOptions**

express   一个代表 **Worksheet** 对象的变量。

## 类型

any

## 说明


| 元素 | 含义        |
| -- | --------- |
| 1  | 使用首行的标签   |
| 2  | 使用左列的标签   |
| 3  | 创建与源数据的链接 |



## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中合并计算的选项。该列表将出现在本示例新建的工作表中。*/
function test() {
    let sheet = Worksheets.Add()
    let options = Worksheets.Item("Sheet1").ConsolidationOptions
    sheet.Range("A1").Value2 = "Use labels in top row"
    sheet.Range("A2").Value2 = "Use labels in left column"
    sheet.Range("A3").Value2 = "Create links to source data"
    for (let i = 0; i < 3; i++) {
        if (options[i]) {
            sheet.Cells.Item(i + 1, 2).Value2 = "True"
        } else {
            sheet.Cells.Item(i + 1, 2).Value2 = "False"
        }
    } sheet.Columns("A:B").AutoFit()
}
```


```JavaScript
/*本示例判断如果活动工作表上合并计算在顶部行中使用标签，则通知用户。*/
function test() {
    let options = Application.ActiveSheet.ConsolidationOptions
    if (options[0]) {
        alert("在顶部行中使用标签。")
    }
}
```
