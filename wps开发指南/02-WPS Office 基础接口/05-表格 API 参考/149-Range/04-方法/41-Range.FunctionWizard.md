# Range.FunctionWizard

对指定区域左上角单元格启动“函数向导”。



## 语法

express.**FunctionWizard()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例对工作表 Sheet1 中活动单元格启动“函数向导”。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    ActiveCell.FunctionWizard()
}
```


```JavaScript
/*本示例选中 A1 单元格，在选中区域设置公式 =SUM(E1:F3)，并对选中区域启动“函数向导”*/
function test() {
    Range("A1").Select()
    Selection.Formula = "=SUM(E1:F3)"
    Selection.FunctionWizard()
}
```
