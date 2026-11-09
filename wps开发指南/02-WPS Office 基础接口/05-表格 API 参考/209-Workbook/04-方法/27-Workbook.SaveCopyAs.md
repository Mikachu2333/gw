# Workbook.SaveCopyAs

将指定工作簿的副本保存到文件，但不修改内存中的打开工作簿。



## 语法

express.**SaveCopyAs(Filename)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 可选 | any | 指定副本的文件名。 |

## 返回值

void

## 示例


```JavaScript
/*本示例保存活动工作簿的副本。*/
function test() {
    Application.ActiveWorkbook.SaveCopyAs("C:\\TEMP\\bookcopy.xls")
}
```


```JavaScript
/*本示例演示保存活动工作簿的副本 book1.xls 。*/
function test() {
    Application.ActiveSheet.Cells(1).Value2 = 1
    Application.ActiveWorkbook.SaveCopyAs("book1.xls")
}
```
