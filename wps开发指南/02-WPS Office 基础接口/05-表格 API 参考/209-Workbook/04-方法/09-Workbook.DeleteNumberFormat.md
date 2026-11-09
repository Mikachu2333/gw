# Workbook.DeleteNumberFormat

从工作簿中删除一个自定义数字格式。



## 语法

express.**DeleteNumberFormat(NumberFormat)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumberFormat | 必选 | string | 命名要删除的数字格式。 |

## 返回值

void

## 示例


```JavaScript
/*本示例从当前工作簿中删除“000-00-0000”数字格式。*/
function test() {
    ActiveWorkbook.DeleteNumberFormat("000-00-0000")
}
```


```JavaScript
/*本示例演示向Sheet1的A17单元格添加 hh:mm:ss 数字格式，告知用户后删除 hh:mm:ss 数字格式。*/
function test() {
    Worksheets.Item("Sheet1").Range("A17").NumberFormat = "hh:mm:ss"
    alert("已添加hh:mm:ss数字格式")
    ActiveWorkbook.DeleteNumberFormat("hh:mm:ss")
}
```
