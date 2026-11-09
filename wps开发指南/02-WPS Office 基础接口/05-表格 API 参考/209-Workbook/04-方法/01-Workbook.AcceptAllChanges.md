# Workbook.AcceptAllChanges

接受指定共享工作簿中的所有更改。



## 语法

express.**AcceptAllChanges(When, Who, Where)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| When | 可选 | any | 指定何时接受所有更改。 |
| Who | 可选 | any | 指定由何人接受所有更改。 |
| Where | 可选 | any | 指定在何处接受所有更改。 |

## 返回值

void

## 示例


```JavaScript
/*本示例接受活动工作簿中的所有更改。*/
function test() {
    Application.ActiveWorkbook.AcceptAllChanges()
}
```


```JavaScript
/*本示例指定在 ActiveSheet.Cells 内接受活动工作簿中的所有更改。*/
function test() {
    Application.ActiveWorkbook.AcceptAllChanges(undefined, undefined, ActiveSheet.Cells.Address())
}
```
