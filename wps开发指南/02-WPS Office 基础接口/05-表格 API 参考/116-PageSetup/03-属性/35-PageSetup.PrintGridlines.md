# PageSetup.PrintGridlines

如果在页面上打印单元格网格线，则该值为 **True** 。仅应用于工作表。 **Boolean** 类型，可读写。



## 语法

express.**PrintGridlines**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在打印 Sheet1 时同时打印单元格网格线。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.PrintGridlines = true
}
```


```JavaScript
/*本示例判断打印活动工作表时是否同时打印单元格网格线，并通知用户结果。*/
function test() {
    if (ActiveSheet.PageSetup.PrintGridlines) {
        alert("打印活动工作表时打印单元格网格线")
    } else {
        alert("打印活动工作表时不打印单元格网格线")
    }
}
```
