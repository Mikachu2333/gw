# Worksheet.ResetAllPageBreaks

重新设置指定工作表上的所有分页符。



## 语法

express.**ResetAllPageBreaks()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例重新设置第一张工作表上的所有分页符。*/
function test() {
    Application.Sheets.Item(1).ResetAllPageBreaks()
}
```


```JavaScript
/*本示例重新设置活动工作簿上每一张工作表上的所有分页符。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        let sheet = Application.Sheets.Item(i)
        sheet.ResetAllPageBreaks()
    }
}
```
