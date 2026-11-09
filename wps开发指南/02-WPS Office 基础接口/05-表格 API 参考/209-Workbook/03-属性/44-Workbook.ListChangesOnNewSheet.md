# Workbook.ListChangesOnNewSheet

如果在单个工作表中显示共享工作簿的更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ListChangesOnNewSheet**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在单个工作表中显示共享工作簿的更改。*/
function test() {
    ActiveWorkbook.HighlightChangesOptions(xlSinceMyLastSave, "Everyone")
    ActiveWorkbook.ListChangesOnNewSheet = true
}
```


```JavaScript
/*本示例判断如果不是在单个工作表中显示共享工作簿的更改，则将ListChangesOnNewSheet设置为true，并通知用户。*/
function test() {
    if (!ActiveWorkbook.ListChangesOnNewSheet) {
        ActiveWorkbook.ListChangesOnNewSheet = true
        alert("已设置在单个工作表中显示共享工作簿的更改")
    }
}
```
