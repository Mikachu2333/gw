# Workbook.Date1904

如果工作簿使用 1904 日期系统，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Date1904**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使 ET 对活动工作簿使用 1904 日期系统。*/
function test() {
    Application.ActiveWorkbook.Date1904 = true
}
```


```JavaScript
/*本示例分别演示在关闭和启用 Date1904 日期系统下1904年1月1日的序列号。*/
function test() {
    if (!ActiveWorkbook.Date1904) {
        ActiveCell.Value2 = "1904年1月1日"
        alert(`未启用1904日期系统：${ActiveCell.Value()} 的序列号为 ${ActiveCell.Value2}`)
    }
    ActiveWorkbook.Date1904 = true
    ActiveCell.Value2 = "1904年1月1日"
    alert (`启用1904日期系统：${ActiveCell.Value()}的序列号为 ${ActiveCell.Value2}`)
}
```
