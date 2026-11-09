# Worksheet.ShowAllData

使当前筛选列表的所有行均可见。如果正在使用自动筛选，则本方法将下拉列表框内容改为“（全部）”。



## 语法

express.**ShowAllData()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例使工作表 Sheet1 上所有的数据可见。该示例应在包含使用 AutoFilter 命令筛选的列表的工作表上运行。*/
function test() {
    Application.Worksheets.Item("Sheet1").ShowAllData()
}
```


```JavaScript
/*本示例使工作簿的每一张工作表上筛选列表的所有行均可见。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        Application.Sheets.Item(i).ShowAllData()
    }
}
```
